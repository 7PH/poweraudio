/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var Stage_1 = __webpack_require__(1);
	var AudioHandler_1 = __webpack_require__(3);
	var stage;
	function init() {
	    return __awaiter(this, void 0, void 0, function () {
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4, restartSong()];
	                case 1:
	                    _a.sent();
	                    stage = new Stage_1.Stage("poweraudio");
	                    stage.start();
	                    return [2];
	            }
	        });
	    });
	}
	function restartSong() {
	    return __awaiter(this, void 0, void 0, function () {
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    if (typeof AudioHandler_1.default.song !== "undefined") {
	                        AudioHandler_1.default.song.pause();
	                        AudioHandler_1.default.song.currentTime = 0;
	                    }
	                    AudioHandler_1.default.init("/music.mp3?" + Date.now());
	                    return [4, AudioHandler_1.default.play()];
	                case 1:
	                    _a.sent();
	                    return [2];
	            }
	        });
	    });
	}
	window.onload = function () { return init(); };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var AnimatedBackground_1 = __webpack_require__(2);
	var AverageCircle_1 = __webpack_require__(5);
	var NodeContainer_1 = __webpack_require__(6);
	var DisplayObjectContainer_1 = __webpack_require__(7);
	var Stage = (function (_super) {
	    __extends(Stage, _super);
	    function Stage(canvasID) {
	        var _this = _super.call(this, null) || this;
	        _this.canvasContainerID = canvasID;
	        _this.canvasContainer = document.getElementById(canvasID);
	        _this.lastDelta = 0;
	        _this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
	        _this.canvasContainer.appendChild(_this.renderer.view);
	        _this.renderer.render(_this);
	        _this.mouse = {
	            position: new PIXI.Point(0, 0),
	        };
	        _this.on("mousemove", function (e) {
	            _this.mouse.position.set(e.data.global.x, e.data.global.y);
	        });
	        _this.lastUpdateDelta = 0;
	        return _this;
	    }
	    Stage.prototype.start = function () {
	        while (this.children.length > 0) {
	            this.removeChildAt(0);
	        }
	        var nodeContainer = new NodeContainer_1.NodeContainer(this);
	        nodeContainer.populate();
	        this.addChild(nodeContainer);
	        var avgCircle = new AverageCircle_1.AverageCircle(this, this.getWidth() / 2, 6 * this.getHeight() / 10);
	        this.addChild(avgCircle);
	        this.addChildAt(new AnimatedBackground_1.AnimatedBackground(this), 0);
	        this.run();
	    };
	    Stage.prototype.getWidth = function () {
	        return this.canvasContainer.clientWidth;
	    };
	    Stage.prototype.getHeight = function () {
	        return this.canvasContainer.clientHeight;
	    };
	    Stage.prototype.update = function () {
	        var t = Date.now() / 1000;
	        this.lastDelta = t - this.lastUpdateDelta;
	        this.lastUpdateDelta = t;
	        if (this.lastDelta > 1) {
	            this.lastDelta = 0;
	        }
	        _super.prototype.update.call(this, this.lastDelta);
	        this.renderer.render(this);
	        requestAnimationFrame(this.update.bind(this));
	    };
	    Stage.prototype.run = function () {
	        this.lastUpdateDelta = Date.now() / 1000;
	        requestAnimationFrame(this.update.bind(this));
	    };
	    return Stage;
	}(DisplayObjectContainer_1.DisplayObjectContainer));
	exports.Stage = Stage;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var AudioHandler_1 = __webpack_require__(3);
	var DisplayObject_1 = __webpack_require__(4);
	var AnimatedBackground = (function (_super) {
	    __extends(AnimatedBackground, _super);
	    function AnimatedBackground(stage) {
	        var _this = _super.call(this, stage) || this;
	        _this.setFriction(1);
	        return _this;
	    }
	    AnimatedBackground.prototype.redraw = function () {
	        if (typeof this.graphics === "undefined") {
	            return;
	        }
	        var ratio = Math.min(50, 256 * AudioHandler_1.default.firstOrderAverage) / 50;
	        var value = ratio * 0x11 | 0;
	        var grayscale = parseInt("0x" + ((value << 16) | (value << 8) | value).toString(16), 16);
	        this.graphics.clear();
	        this.graphics.beginFill(grayscale);
	        this.graphics.drawRect(0, 0, this.stage.getWidth(), this.stage.getHeight());
	        this.graphics.endFill();
	    };
	    return AnimatedBackground;
	}(DisplayObject_1.DisplayObject));
	exports.AnimatedBackground = AnimatedBackground;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var AudioHandler = (function () {
	    function AudioHandler() {
	    }
	    AudioHandler.init = function (src) {
	        var _this = this;
	        this.context = new (AudioContext || window.webkitAudioContext)();
	        this.gain = AudioHandler.context.createGain();
	        this.gain.connect(this.context.destination);
	        this.song = new Audio(src);
	        this.song.crossOrigin = "anonymous";
	        this.isPlaying = false;
	        var songSource = this.context.createMediaElementSource(this.song);
	        songSource.connect(this.gain);
	        this.analyser = this.context.createAnalyser();
	        this.gain.connect(this.analyser);
	        this.analyser.fftSize = AudioHandler.FFT_SIZE;
	        this.waveform = new Float32Array(this.analyser.frequencyBinCount);
	        this.firstOrderWaveform = new Float32Array(this.analyser.frequencyBinCount);
	        this.analyser.getFloatTimeDomainData(this.waveform);
	        this.lastUpdateDelta = Date.now();
	        this.updateStatsInterval = setInterval(function () { return _this.updateStats(); }, AudioHandler.STATS_UPDATE_INTERVAL);
	    };
	    AudioHandler.updateStats = function () {
	        var _this = this;
	        var delta = (Date.now() - this.lastUpdateDelta) / 1000;
	        this.analyser.getFloatTimeDomainData(this.waveform);
	        this.average = this.waveform.reduce(function (prev, curr) { return prev + Math.abs(curr); }, 0) / this.analyser.frequencyBinCount;
	        this.minimum = this.waveform.reduce(function (a, b) { return Math.min(a, b); }, this.waveform[0]);
	        this.maximum = this.waveform.reduce(function (a, b) { return Math.max(a, b); }, this.waveform[0]);
	        this.firstOrderAverage += (this.average - this.firstOrderAverage) * 0.5 * delta;
	        this.linearAverage += delta * (this.average > this.linearAverage ? 1 : -1);
	        this.waveform.forEach(function (value, index) {
	            if (value > _this.firstOrderWaveform[index]) {
	                _this.firstOrderWaveform[index] = value;
	            }
	            else {
	                _this.firstOrderWaveform[index] += (value - _this.firstOrderWaveform[index]) * 1.1 * delta;
	            }
	        });
	        this.lastUpdateDelta = Date.now();
	    };
	    AudioHandler.play = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.song.play()];
	                    case 1:
	                        _a.sent();
	                        this.isPlaying = true;
	                        this.updateStats();
	                        return [2];
	                }
	            });
	        });
	    };
	    AudioHandler.FFT_SIZE = 256;
	    AudioHandler.STATS_UPDATE_INTERVAL = 1000 / 40;
	    AudioHandler.average = 0;
	    AudioHandler.firstOrderAverage = 0;
	    AudioHandler.linearAverage = 0;
	    AudioHandler.minimum = 0;
	    AudioHandler.maximum = 0;
	    AudioHandler.lastUpdateDelta = 0;
	    return AudioHandler;
	}());
	exports.default = AudioHandler;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Graphics = PIXI.Graphics;
	var DisplayObject = (function (_super) {
	    __extends(DisplayObject, _super);
	    function DisplayObject(stage, appendGraphics) {
	        var _this = _super.call(this) || this;
	        appendGraphics = typeof (appendGraphics) === "undefined" ? true : appendGraphics;
	        _this.id = DisplayObject.ID++;
	        _this.stage = stage;
	        _this.graphics = undefined;
	        _this.velocity = new PIXI.Point(0, 0);
	        _this.acceleration = new PIXI.Point(0, 0);
	        _this.friction = new PIXI.Point(0, 0);
	        _this.forces = {};
	        _this.mass = 1;
	        if (appendGraphics) {
	            _this.graphics = new Graphics();
	            _this.addChild(_this.graphics);
	        }
	        return _this;
	    }
	    DisplayObject.prototype.setForce = function (name, vector) {
	        this.forces[name] = {
	            x: vector.x,
	            y: vector.y,
	        };
	    };
	    DisplayObject.prototype.clearForce = function (name) {
	        delete this.forces[name];
	    };
	    DisplayObject.prototype.setFriction = function (value) {
	        if (typeof value === "number") {
	            this.friction = new PIXI.Point(value, value);
	        }
	        else {
	            this.friction.set(value.x, value.y);
	        }
	    };
	    DisplayObject.prototype.update = function (delta) {
	        this.setForce("friction", new PIXI.Point(-this.friction.x * this.velocity.x, -this.friction.y * this.velocity.y));
	        this.acceleration.set(0, 0);
	        for (var forceName in this.forces) {
	            if (!this.forces.hasOwnProperty(forceName)) {
	                continue;
	            }
	            this.acceleration.x += this.forces[forceName].x;
	            this.acceleration.y += this.forces[forceName].y;
	        }
	        this.acceleration.x /= this.mass;
	        this.acceleration.y /= this.mass;
	        this.velocity.x += delta * this.acceleration.x;
	        this.velocity.y += delta * this.acceleration.y;
	        this.position.x += delta * this.velocity.x;
	        this.position.y += delta * this.velocity.y;
	    };
	    DisplayObject.ID = 1;
	    return DisplayObject;
	}(PIXI.Container));
	exports.DisplayObject = DisplayObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var AudioHandler_1 = __webpack_require__(3);
	var DisplayObject_1 = __webpack_require__(4);
	var AverageCircle = (function (_super) {
	    __extends(AverageCircle, _super);
	    function AverageCircle(stage, centerX, centerY) {
	        var _this = _super.call(this, stage) || this;
	        _this.centerX = centerX;
	        _this.centerY = centerY;
	        _this.lineWidth = 1;
	        _this.eyesClosed = false;
	        _this.targetPosition = new PIXI.Point(0, 0);
	        _this.lastUpdatePosition = 0;
	        _this.baseRadius = Math.min(stage.getWidth(), stage.getHeight()) / 12;
	        _this.radius = _this.baseRadius;
	        _this.filter = new PIXI.filters.BlurFilter();
	        _this.filters = [_this.filter];
	        _this.setFriction(1);
	        _this.position.x = centerX;
	        _this.position.y = centerY;
	        return _this;
	    }
	    AverageCircle.prototype.update = function (delta) {
	        _super.prototype.update.call(this, delta);
	        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 === 0;
	        this.lineWidth = 1 + AudioHandler_1.default.linearAverage * 8;
	        this.filter.blur = 0.2 + 8 * Math.exp(-16 * AudioHandler_1.default.linearAverage);
	        this.radius = this.baseRadius + 100 * AudioHandler_1.default.linearAverage;
	        this.setForce("main", {
	            x: this.targetPosition.x - this.position.x,
	            y: this.targetPosition.y - this.position.y,
	        });
	        if (Date.now() > 400 + this.lastUpdatePosition) {
	            this.updatePosition();
	            this.lastUpdatePosition = Date.now();
	        }
	        this.redraw();
	    };
	    AverageCircle.prototype.updatePosition = function () {
	        var angle = Math.random() * 2 * Math.PI;
	        var radius = this.baseRadius * .5;
	        var x = Math.cos(angle) * radius;
	        var y = Math.sin(angle) * radius;
	        this.targetPosition.x = this.centerX + x;
	        this.targetPosition.y = this.centerY + y;
	    };
	    AverageCircle.prototype.redraw = function () {
	        if (typeof this.graphics === "undefined") {
	            return;
	        }
	        this.graphics.clear();
	        var wave = AudioHandler_1.default.firstOrderWaveform;
	        var waveAverage = wave.reduce(function (acc, v) { return acc + v; }, 0) / wave.length;
	        var maxAmplitude = 100;
	        var points = [];
	        for (var i = 0, angle = Math.PI / 2; i < wave.length; ++i, angle += Math.PI / wave.length) {
	            var amplitude = Math.max(0, wave[i] - waveAverage);
	            var x = Math.cos(angle) * (this.radius + maxAmplitude * amplitude);
	            var y = Math.sin(angle) * (this.radius + maxAmplitude * amplitude);
	            points.push({ x: x, y: y });
	        }
	        var n = points.length;
	        for (var i = n - 1; i >= 0; --i) {
	            points.push({ x: -points[i].x, y: points[i].y });
	        }
	        this.graphics.beginFill(0xFFFFFF, 0.2);
	        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
	        this.graphics.moveTo(points[0].x, points[0].y);
	        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
	            var point = points_1[_i];
	            this.graphics.lineTo(point.x, point.y);
	        }
	        this.graphics.beginFill(0x111111, 1);
	        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
	        this.graphics.drawCircle(0, 0, this.radius);
	        this.graphics.endFill();
	        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
	        this.graphics.drawCircle(0, 0, this.radius);
	        var eyesSize = this.eyesClosed ? this.radius * 0.02 : this.radius * 0.1;
	        var eyesY = -this.radius * 0.3;
	        this.graphics.lineStyle(1, 0xFFFFFF);
	        this.graphics.beginFill(0xFFFFFF, 1);
	        this.graphics.drawRect(-eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
	        this.graphics.drawRect(this.radius * 0.3 - eyesSize * 0.5, eyesY - eyesSize * 0.5, eyesSize, eyesSize);
	    };
	    return AverageCircle;
	}(DisplayObject_1.DisplayObject));
	exports.AverageCircle = AverageCircle;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var DisplayObjectContainer_1 = __webpack_require__(7);
	var Node_1 = __webpack_require__(8);
	var NodeLinker_1 = __webpack_require__(9);
	var NodeContainer = (function (_super) {
	    __extends(NodeContainer, _super);
	    function NodeContainer(stage) {
	        var _this = _super.call(this, stage) || this;
	        _this.nodes = new DisplayObjectContainer_1.DisplayObjectContainer(_this.stage);
	        _this.addChild(_this.nodes);
	        _this.addChildAt(new NodeLinker_1.NodeLinker(_this.stage, _this.nodes), 0);
	        return _this;
	    }
	    NodeContainer.prototype.populate = function () {
	        for (var x = 10; x < this.stage.getWidth(); x += 200) {
	            for (var y = 10; y < this.stage.getHeight(); y += 200) {
	                this.addNode(x + 12 * Math.random(), y + 12 * Math.random(), 0, 0);
	            }
	        }
	    };
	    NodeContainer.prototype.addNode = function (x, y, vx, vy) {
	        var node = new Node_1.Node(this.stage);
	        node.position.set(x, y);
	        node.velocity.set(vx, vy);
	        this.nodes.addChild(node);
	    };
	    return NodeContainer;
	}(DisplayObjectContainer_1.DisplayObjectContainer));
	exports.NodeContainer = NodeContainer;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var DisplayObject_1 = __webpack_require__(4);
	var DisplayObjectContainer = (function (_super) {
	    __extends(DisplayObjectContainer, _super);
	    function DisplayObjectContainer(stage) {
	        return _super.call(this, stage, false) || this;
	    }
	    DisplayObjectContainer.prototype.update = function (delta) {
	        _super.prototype.update.call(this, delta);
	        for (var i = 0, j = this.children.length; i < j; ++i) {
	            var child = this.children[i];
	            if (child.update) {
	                child.update(delta);
	            }
	        }
	    };
	    return DisplayObjectContainer;
	}(DisplayObject_1.DisplayObject));
	exports.DisplayObjectContainer = DisplayObjectContainer;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var AudioHandler_1 = __webpack_require__(3);
	var DisplayObject_1 = __webpack_require__(4);
	var Node = (function (_super) {
	    __extends(Node, _super);
	    function Node(stage) {
	        var _this = _super.call(this, stage) || this;
	        _this.radius = 2 + Math.random() * 4;
	        _this.color = 0xFFFFFF * (Math.random() * .5 + .5);
	        _this.setFriction(1);
	        return _this;
	    }
	    Node.prototype.redraw = function () {
	        if (typeof this.graphics === "undefined") {
	            return;
	        }
	        var avg = 0.5 + Math.min(8, 64 * AudioHandler_1.default.average) / 16;
	        var value = avg * 0xFF | 0;
	        var grayscale = parseInt("0x" + ((value << 16) | (value << 8) | value).toString(16), 16);
	        this.graphics.clear();
	        this.graphics.beginFill(AudioHandler_1.default.average > 0.15 ? this.color : grayscale);
	        this.graphics.drawCircle(0, 0, this.radius);
	        this.graphics.endFill();
	    };
	    Node.prototype.update = function (delta) {
	        _super.prototype.update.call(this, delta);
	        var coef = Math.max(0.1, AudioHandler_1.default.average * 8);
	        this.position.x += delta * this.velocity.x * (coef - 1);
	        this.position.y += delta * this.velocity.y * (coef - 1);
	        if (this.x < 0) {
	            this.x = this.stage.getWidth();
	        }
	        else if (this.x > this.stage.getWidth()) {
	            this.x = 0;
	        }
	        if (this.y < 0) {
	            this.y = this.stage.getHeight();
	        }
	        else if (this.y > this.stage.getHeight()) {
	            this.y = 0;
	        }
	        this.redraw();
	    };
	    return Node;
	}(DisplayObject_1.DisplayObject));
	exports.Node = Node;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    }
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var DisplayObject_1 = __webpack_require__(4);
	var Point_1 = __webpack_require__(10);
	var NodeLinker = (function (_super) {
	    __extends(NodeLinker, _super);
	    function NodeLinker(stage, nodes) {
	        var _this = _super.call(this, stage) || this;
	        _this.target = nodes;
	        _this.centerPosition = new PIXI.Point(_this.stage.getWidth() / 2, 6 * _this.stage.getHeight() / 10);
	        return _this;
	    }
	    NodeLinker.prototype.redraw = function () {
	        if (typeof this.graphics === "undefined") {
	            return;
	        }
	        this.graphics.clear();
	        this.graphics.lineStyle(1, 0xFFFFFF, 0.2);
	        var N = this.target.children.length;
	        for (var i = 0; i < N; ++i) {
	            var node = this.target.children[i];
	            var distance = Point_1.Point.distance(node.position, this.centerPosition);
	            if (distance > this.stage.getWidth() / 10) {
	                continue;
	            }
	            this.graphics.moveTo(node.position.x, node.position.y);
	            this.graphics.lineTo(this.centerPosition.x, this.centerPosition.y);
	        }
	    };
	    NodeLinker.prototype.update = function (delta) {
	        _super.prototype.update.call(this, delta);
	        var N = this.target.children.length;
	        for (var i = 0; i < N; i++) {
	            var node = this.target.children[i];
	            var angle = Math.atan2(node.position.y - this.centerPosition.y, node.position.x - this.centerPosition.x);
	            var dist = Point_1.Point.distance(node.position, this.centerPosition);
	            var fx = -Math.cos(angle) * 100000 / dist;
	            var fy = -Math.sin(angle) * 100000 / dist;
	            node.setForce("tocenter", { x: fx, y: fy });
	            for (var k = i + 1; k < N; k++) {
	                var otherNode = this.target.children[k];
	                var dist2 = Point_1.Point.distance(node.position, otherNode.position);
	                if (dist2 > 300) {
	                    node.clearForce("node_" + otherNode.id);
	                    otherNode.clearForce("node_" + node.id);
	                    continue;
	                }
	                var a = Math.atan2(node.position.y - otherNode.position.y, node.position.x - otherNode.position.x);
	                var fx2 = 0;
	                var fy2 = 0;
	                if (dist2 !== 0) {
	                    fx2 = Math.cos(a) * 10000 / dist2;
	                    fy2 = Math.sin(a) * 10000 / dist2;
	                }
	                node.setForce("node_" + otherNode.id, new PIXI.Point(-fx2, -fy2));
	                otherNode.setForce("node_" + node.id, new PIXI.Point(fx2, fy2));
	            }
	        }
	        this.redraw();
	    };
	    return NodeLinker;
	}(DisplayObject_1.DisplayObject));
	exports.NodeLinker = NodeLinker;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Point = (function () {
	    function Point() {
	    }
	    Point.distance = function (point1, point2) {
	        return Math.sqrt(Math.pow(point1.x - point2.x, 2) +
	            Math.pow(point1.y - point2.y, 2));
	    };
	    return Point;
	}());
	exports.Point = Point;


/***/ })
/******/ ]);