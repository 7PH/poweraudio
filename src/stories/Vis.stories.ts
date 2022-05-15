import { Story, Meta } from '@storybook/html';
import { screen, userEvent } from '@storybook/testing-library';
import { createViz, VizProps } from './Viz';


export default {
    title: 'PowerAudio/Framed Example',
    argTypes: {
        
    },
} as Meta;

export const FramedExample: Story<VizProps> = (args) => {
    return createViz(args);
};

