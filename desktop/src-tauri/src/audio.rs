use cpal::traits::{DeviceTrait, HostTrait, StreamTrait};
use cpal::Sample;
use tauri::{AppHandle, Emitter};

const CHUNK_SIZE: usize = 256;

pub fn start_capture(app: AppHandle) {
    let host = cpal::default_host();

    // Get the default output device for loopback capture
    let device = match host.default_output_device() {
        Some(d) => d,
        None => {
            eprintln!("No output device available");
            return;
        }
    };

    println!("Using output device: {}", device.name().unwrap_or_default());

    // Get supported config
    let config = match device.default_output_config() {
        Ok(c) => c,
        Err(e) => {
            eprintln!("Failed to get default output config: {}", e);
            return;
        }
    };

    println!("Default output config: {:?}", config);

    let sample_format = config.sample_format();
    let config: cpal::StreamConfig = config.into();

    // Build input stream for loopback capture
    let stream = match sample_format {
        cpal::SampleFormat::F32 => build_stream_f32(&device, &config, app),
        cpal::SampleFormat::I16 => build_stream_i16(&device, &config, app),
        cpal::SampleFormat::U16 => build_stream_u16(&device, &config, app),
        _ => {
            eprintln!("Unsupported sample format: {:?}", sample_format);
            return;
        }
    };

    let stream = match stream {
        Ok(s) => s,
        Err(e) => {
            eprintln!("Failed to build audio stream: {}", e);
            return;
        }
    };

    if let Err(e) = stream.play() {
        eprintln!("Failed to start audio stream: {}", e);
        return;
    }

    println!("Audio capture started");

    // Keep the stream alive
    std::mem::forget(stream);
}

fn build_stream_f32(
    device: &cpal::Device,
    config: &cpal::StreamConfig,
    app: AppHandle,
) -> Result<cpal::Stream, cpal::BuildStreamError> {
    let channels = config.channels as usize;

    device.build_input_stream(
        config,
        move |data: &[f32], _: &cpal::InputCallbackInfo| {
            let samples: Vec<f32> = if channels == 1 {
                data.to_vec()
            } else {
                data.chunks(channels)
                    .map(|frame| frame.iter().sum::<f32>() / channels as f32)
                    .collect()
            };

            for chunk in samples.chunks(CHUNK_SIZE) {
                if let Err(e) = app.emit("audio-samples", chunk) {
                    eprintln!("Failed to emit audio samples: {}", e);
                }
            }
        },
        |err| eprintln!("Audio stream error: {}", err),
        None,
    )
}

fn build_stream_i16(
    device: &cpal::Device,
    config: &cpal::StreamConfig,
    app: AppHandle,
) -> Result<cpal::Stream, cpal::BuildStreamError> {
    let channels = config.channels as usize;

    device.build_input_stream(
        config,
        move |data: &[i16], _: &cpal::InputCallbackInfo| {
            let samples: Vec<f32> = if channels == 1 {
                data.iter().map(|s| s.to_float_sample()).collect()
            } else {
                data.chunks(channels)
                    .map(|frame| {
                        let sum: f32 = frame.iter().map(|s| s.to_float_sample()).sum();
                        sum / channels as f32
                    })
                    .collect()
            };

            for chunk in samples.chunks(CHUNK_SIZE) {
                if let Err(e) = app.emit("audio-samples", chunk) {
                    eprintln!("Failed to emit audio samples: {}", e);
                }
            }
        },
        |err| eprintln!("Audio stream error: {}", err),
        None,
    )
}

fn build_stream_u16(
    device: &cpal::Device,
    config: &cpal::StreamConfig,
    app: AppHandle,
) -> Result<cpal::Stream, cpal::BuildStreamError> {
    let channels = config.channels as usize;

    device.build_input_stream(
        config,
        move |data: &[u16], _: &cpal::InputCallbackInfo| {
            let samples: Vec<f32> = if channels == 1 {
                data.iter().map(|s| s.to_float_sample()).collect()
            } else {
                data.chunks(channels)
                    .map(|frame| {
                        let sum: f32 = frame.iter().map(|s| s.to_float_sample()).sum();
                        sum / channels as f32
                    })
                    .collect()
            };

            for chunk in samples.chunks(CHUNK_SIZE) {
                if let Err(e) = app.emit("audio-samples", chunk) {
                    eprintln!("Failed to emit audio samples: {}", e);
                }
            }
        },
        |err| eprintln!("Audio stream error: {}", err),
        None,
    )
}
