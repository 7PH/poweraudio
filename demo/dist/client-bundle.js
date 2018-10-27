/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/client.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/client.ts":
/*!************************!*\
  !*** ./demo/client.ts ***!
  \************************/
/*! no static exports found */
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
var src_1 = __webpack_require__(/*! ../src */ "./src/index.ts");
var AudioHandler_1 = __webpack_require__(/*! ../src/audio/AudioHandler */ "./src/audio/AudioHandler.ts");
var stage;
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, restartSong()];
                case 1:
                    _a.sent();
                    stage = new src_1.Stage('poweraudio');
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
                    if (typeof AudioHandler_1.default.song !== 'undefined') {
                        AudioHandler_1.default.song.pause();
                        AudioHandler_1.default.song.currentTime = 0;
                    }
                    AudioHandler_1.default.init("/music?" + Date.now());
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

/***/ "./src/animation/audio/AnimatedBackground.ts":
/*!***************************************************!*\
  !*** ./src/animation/audio/AnimatedBackground.ts ***!
  \***************************************************/
/*! no static exports found */
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
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
var AnimatedBackground = (function (_super) {
    __extends(AnimatedBackground, _super);
    function AnimatedBackground(stage) {
        var _this = _super.call(this, stage) || this;
        _this.setFriction(1);
        return _this;
    }
    AnimatedBackground.prototype.redraw = function () {
        if (typeof this.graphics === 'undefined')
            return;
        var ratio = Math.min(50, 256 * AudioHandler_1.default.firstOrderAverage) / 50;
        var value = ratio * 0x11 | 0;
        var grayscale = parseInt('0x' + ((value << 16) | (value << 8) | value).toString(16), 16);
        this.graphics.clear();
        this.graphics.beginFill(grayscale);
        this.graphics.drawRect(0, 0, this.stage.getWidth(), this.stage.getHeight());
        this.graphics.endFill();
    };
    return AnimatedBackground;
}(DisplayObject_1.DisplayObject));
exports.AnimatedBackground = AnimatedBackground;


/***/ }),

/***/ "./src/animation/audio/AverageCircle.ts":
/*!**********************************************!*\
  !*** ./src/animation/audio/AverageCircle.ts ***!
  \**********************************************/
/*! no static exports found */
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
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
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
        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 == 0;
        this.lineWidth = 1 + AudioHandler_1.default.linearAverage * 8;
        this.filter.blur = 0.2 + 8 * Math.exp(-16 * AudioHandler_1.default.linearAverage);
        this.radius = this.baseRadius + 100 * AudioHandler_1.default.linearAverage;
        this.setForce('main', {
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
        if (typeof this.graphics === 'undefined')
            return;
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
        for (var i = n - 1; i >= 0; --i)
            points.push({ x: -points[i].x, y: points[i].y });
        this.graphics.beginFill(0xFFFFFF, 0.2);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.moveTo(points[0].x, points[0].y);
        for (var i = 0; i < points.length; ++i) {
            var point = points[i];
            this.graphics.lineTo(point.x, point.y);
        }
        this.graphics.beginFill(0x111111, 1);
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.drawCircle(0, 0, this.radius);
        this.graphics.endFill();
        this.graphics.lineStyle(this.lineWidth, 0xFFFFFF);
        this.graphics.drawCircle(0, 0, this.radius);
        var eyesSize;
        if (this.eyesClosed) {
            eyesSize = this.radius * 0.02;
        }
        else {
            eyesSize = this.radius * 0.1;
        }
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

/***/ "./src/animation/audio/Node.ts":
/*!*************************************!*\
  !*** ./src/animation/audio/Node.ts ***!
  \*************************************/
/*! no static exports found */
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
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
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
        if (typeof this.graphics === 'undefined')
            return;
        var avg = 0.5 + Math.min(8, 64 * AudioHandler_1.default.average) / 16;
        var value = avg * 0xFF | 0;
        var grayscale = parseInt('0x' + ((value << 16) | (value << 8) | value).toString(16), 16);
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
        if (this.x < 0)
            this.x = this.stage.getWidth();
        else if (this.x > this.stage.getWidth())
            this.x = 0;
        if (this.y < 0)
            this.y = this.stage.getHeight();
        else if (this.y > this.stage.getHeight())
            this.y = 0;
        this.redraw();
    };
    return Node;
}(DisplayObject_1.DisplayObject));
exports.Node = Node;


/***/ }),

/***/ "./src/animation/audio/NodeContainer.ts":
/*!**********************************************!*\
  !*** ./src/animation/audio/NodeContainer.ts ***!
  \**********************************************/
/*! no static exports found */
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
var DisplayObjectContainer_1 = __webpack_require__(/*! ../engine/DisplayObjectContainer */ "./src/animation/engine/DisplayObjectContainer.ts");
var Node_1 = __webpack_require__(/*! ./Node */ "./src/animation/audio/Node.ts");
var NodeLinker_1 = __webpack_require__(/*! ./NodeLinker */ "./src/animation/audio/NodeLinker.ts");
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
        for (var x = 10; x < this.stage.getWidth(); x += 200)
            for (var y = 10; y < this.stage.getHeight(); y += 200)
                this.addNode(x + 12 * Math.random(), y + 12 * Math.random(), 0, 0);
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

/***/ "./src/animation/audio/NodeLinker.ts":
/*!*******************************************!*\
  !*** ./src/animation/audio/NodeLinker.ts ***!
  \*******************************************/
/*! no static exports found */
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
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
var Point_1 = __webpack_require__(/*! ../engine/Point */ "./src/animation/engine/Point.ts");
var NodeLinker = (function (_super) {
    __extends(NodeLinker, _super);
    function NodeLinker(stage, nodes) {
        var _this = _super.call(this, stage) || this;
        _this.target = nodes;
        _this.centerPosition = new PIXI.Point(_this.stage.getWidth() / 2, 6 * _this.stage.getHeight() / 10);
        return _this;
    }
    NodeLinker.prototype.redraw = function () {
        if (typeof this.graphics === 'undefined')
            return;
        this.graphics.clear();
        this.graphics.lineStyle(1, 0xFFFFFF, 0.2);
        var N = this.target.children.length;
        for (var i = 0; i < N; ++i) {
            var node = this.target.children[i];
            var distance = Point_1.Point.distance(node.position, this.centerPosition);
            if (distance > this.stage.getWidth() / 10)
                continue;
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
            node.setForce('tocenter', { x: fx, y: fy });
            for (var k = i + 1; k < N; k++) {
                var otherNode = this.target.children[k];
                var dist_1 = Point_1.Point.distance(node.position, otherNode.position);
                if (dist_1 > 300) {
                    node.clearForce('node_' + otherNode.id);
                    otherNode.clearForce('node_' + node.id);
                    continue;
                }
                var a = Math.atan2(node.position.y - otherNode.position.y, node.position.x - otherNode.position.x);
                var fx_1 = 0, fy_1 = 0;
                if (dist_1 != 0) {
                    fx_1 = Math.cos(a) * 10000 / dist_1;
                    fy_1 = Math.sin(a) * 10000 / dist_1;
                }
                node.setForce('node_' + otherNode.id, new PIXI.Point(-fx_1, -fy_1));
                otherNode.setForce('node_' + node.id, new PIXI.Point(fx_1, fy_1));
            }
        }
        this.redraw();
    };
    return NodeLinker;
}(DisplayObject_1.DisplayObject));
exports.NodeLinker = NodeLinker;


/***/ }),

/***/ "./src/animation/engine/DisplayObject.ts":
/*!***********************************************!*\
  !*** ./src/animation/engine/DisplayObject.ts ***!
  \***********************************************/
/*! no static exports found */
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
var Graphics = PIXI.Graphics;
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject(stage, appendGraphics) {
        var _this = _super.call(this) || this;
        appendGraphics = typeof (appendGraphics) == 'undefined' ? true : appendGraphics;
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
            y: vector.y
        };
    };
    DisplayObject.prototype.clearForce = function (name) {
        delete this.forces[name];
    };
    DisplayObject.prototype.setFriction = function (value) {
        if (typeof value === "number")
            this.friction = new PIXI.Point(value, value);
        else
            this.friction.set(value.x, value.y);
    };
    DisplayObject.prototype.update = function (delta) {
        this.setForce('friction', new PIXI.Point(-this.friction.x * this.velocity.x, -this.friction.y * this.velocity.y));
        this.acceleration.set(0, 0);
        for (var forceName in this.forces) {
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

/***/ "./src/animation/engine/DisplayObjectContainer.ts":
/*!********************************************************!*\
  !*** ./src/animation/engine/DisplayObjectContainer.ts ***!
  \********************************************************/
/*! no static exports found */
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
var DisplayObject_1 = __webpack_require__(/*! ./DisplayObject */ "./src/animation/engine/DisplayObject.ts");
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer(stage) {
        return _super.call(this, stage, false) || this;
    }
    DisplayObjectContainer.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        for (var i = 0, j = this.children.length; i < j; ++i) {
            var child = this.children[i];
            if (child.update)
                child.update(delta);
        }
    };
    return DisplayObjectContainer;
}(DisplayObject_1.DisplayObject));
exports.DisplayObjectContainer = DisplayObjectContainer;


/***/ }),

/***/ "./src/animation/engine/Point.ts":
/*!***************************************!*\
  !*** ./src/animation/engine/Point.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/animation/engine/Stage.ts":
/*!***************************************!*\
  !*** ./src/animation/engine/Stage.ts ***!
  \***************************************/
/*! no static exports found */
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
var DisplayObjectContainer_1 = __webpack_require__(/*! ./DisplayObjectContainer */ "./src/animation/engine/DisplayObjectContainer.ts");
var NodeContainer_1 = __webpack_require__(/*! ../audio/NodeContainer */ "./src/animation/audio/NodeContainer.ts");
var AverageCircle_1 = __webpack_require__(/*! ../audio/AverageCircle */ "./src/animation/audio/AverageCircle.ts");
var AnimatedBackground_1 = __webpack_require__(/*! ../audio/AnimatedBackground */ "./src/animation/audio/AnimatedBackground.ts");
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
            position: new PIXI.Point(0, 0)
        };
        _this.on('mousemove', function (e) {
            _this.mouse.position.set(e.data.global.x, e.data.global.y);
        });
        _this.lastUpdateDelta = 0;
        return _this;
    }
    Stage.prototype.start = function () {
        while (this.children.length > 0)
            this.removeChildAt(0);
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
        if (this.lastDelta > 1)
            this.lastDelta = 0;
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

/***/ "./src/audio/AudioHandler.ts":
/*!***********************************!*\
  !*** ./src/audio/AudioHandler.ts ***!
  \***********************************/
/*! no static exports found */
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
var AudioHandler = (function () {
    function AudioHandler() {
    }
    AudioHandler.init = function (src) {
        var _this = this;
        this.context = new (AudioContext || window['webkitAudioContext'])();
        this.gain = AudioHandler.context.createGain();
        this.gain.connect(this.context.destination);
        this.song = new Audio(src);
        this.song.crossOrigin = 'anonymous';
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
            if (value > _this.firstOrderWaveform[index])
                _this.firstOrderWaveform[index] = value;
            else
                _this.firstOrderWaveform[index] += (value - _this.firstOrderWaveform[index]) * 1.1 * delta;
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./animation/engine/Stage */ "./src/animation/engine/Stage.ts"));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BbmltYXRlZEJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BdmVyYWdlQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vYXVkaW8vTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2F1ZGlvL05vZGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9Ob2RlTGlua2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZW5naW5lL0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lbmdpbmUvRGlzcGxheU9iamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW8vQXVkaW9IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDRCQUE0QixFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsOEJBQThCLEVBQUU7QUFDbkcsNkRBQTZELHVCQUF1QixFQUFFO0FBQ3RGLDZEQUE2RCx1QkFBdUIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNwR2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxTQUFTLG1CQUFPLENBQUMsaUVBQTBCIiwiZmlsZSI6ImNsaWVudC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RlbW8vY2xpZW50LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHNyY18xID0gcmVxdWlyZShcIi4uL3NyY1wiKTtcbnZhciBBdWRpb0hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi9zcmMvYXVkaW8vQXVkaW9IYW5kbGVyXCIpO1xudmFyIHN0YWdlO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgcmVzdGFydFNvbmcoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlID0gbmV3IHNyY18xLlN0YWdlKCdwb3dlcmF1ZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzdGFydFNvbmcoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuc29uZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuc29uZy5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5zb25nLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmluaXQoXCIvbXVzaWM/XCIgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LnBsYXkoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluaXQoKTsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgQXVkaW9IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vYXVkaW8vQXVkaW9IYW5kbGVyXCIpO1xudmFyIEFuaW1hdGVkQmFja2dyb3VuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGVkQmFja2dyb3VuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbmltYXRlZEJhY2tncm91bmQoc3RhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNldEZyaWN0aW9uKDEpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFuaW1hdGVkQmFja2dyb3VuZC5wcm90b3R5cGUucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JhcGhpY3MgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLm1pbig1MCwgMjU2ICogQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5maXJzdE9yZGVyQXZlcmFnZSkgLyA1MDtcbiAgICAgICAgdmFyIHZhbHVlID0gcmF0aW8gKiAweDExIHwgMDtcbiAgICAgICAgdmFyIGdyYXlzY2FsZSA9IHBhcnNlSW50KCcweCcgKyAoKHZhbHVlIDw8IDE2KSB8ICh2YWx1ZSA8PCA4KSB8IHZhbHVlKS50b1N0cmluZygxNiksIDE2KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChncmF5c2NhbGUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KDAsIDAsIHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKSwgdGhpcy5zdGFnZS5nZXRIZWlnaHQoKSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGVkQmFja2dyb3VuZDtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuQW5pbWF0ZWRCYWNrZ3JvdW5kID0gQW5pbWF0ZWRCYWNrZ3JvdW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdFwiKTtcbnZhciBBdWRpb0hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdWRpby9BdWRpb0hhbmRsZXJcIik7XG52YXIgQXZlcmFnZUNpcmNsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEF2ZXJhZ2VDaXJjbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXZlcmFnZUNpcmNsZShzdGFnZSwgY2VudGVyWCwgY2VudGVyWSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIF90aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICBfdGhpcy5saW5lV2lkdGggPSAxO1xuICAgICAgICBfdGhpcy5leWVzQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRhcmdldFBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmxhc3RVcGRhdGVQb3NpdGlvbiA9IDA7XG4gICAgICAgIF90aGlzLmJhc2VSYWRpdXMgPSBNYXRoLm1pbihzdGFnZS5nZXRXaWR0aCgpLCBzdGFnZS5nZXRIZWlnaHQoKSkgLyAxMjtcbiAgICAgICAgX3RoaXMucmFkaXVzID0gX3RoaXMuYmFzZVJhZGl1cztcbiAgICAgICAgX3RoaXMuZmlsdGVyID0gbmV3IFBJWEkuZmlsdGVycy5CbHVyRmlsdGVyKCk7XG4gICAgICAgIF90aGlzLmZpbHRlcnMgPSBbX3RoaXMuZmlsdGVyXTtcbiAgICAgICAgX3RoaXMuc2V0RnJpY3Rpb24oMSk7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uLnggPSBjZW50ZXJYO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbi55ID0gY2VudGVyWTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBdmVyYWdlQ2lyY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XG4gICAgICAgIHRoaXMuZXllc0Nsb3NlZCA9IE1hdGguZmxvb3IoMTAgKiBEYXRlLm5vdygpIC8gMTAwMCkgJSAzMCA9PSAwO1xuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IDEgKyBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmxpbmVhckF2ZXJhZ2UgKiA4O1xuICAgICAgICB0aGlzLmZpbHRlci5ibHVyID0gMC4yICsgOCAqIE1hdGguZXhwKC0xNiAqIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQubGluZWFyQXZlcmFnZSk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5iYXNlUmFkaXVzICsgMTAwICogQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5saW5lYXJBdmVyYWdlO1xuICAgICAgICB0aGlzLnNldEZvcmNlKCdtYWluJywge1xuICAgICAgICAgICAgeDogdGhpcy50YXJnZXRQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy50YXJnZXRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKERhdGUubm93KCkgPiA0MDAgKyB0aGlzLmxhc3RVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlUG9zaXRpb24gPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICBBdmVyYWdlQ2lyY2xlLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5iYXNlUmFkaXVzICogLjU7XG4gICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgICAgICB2YXIgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi54ID0gdGhpcy5jZW50ZXJYICsgeDtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi55ID0gdGhpcy5jZW50ZXJZICsgeTtcbiAgICB9O1xuICAgIEF2ZXJhZ2VDaXJjbGUucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB2YXIgd2F2ZSA9IEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuZmlyc3RPcmRlcldhdmVmb3JtO1xuICAgICAgICB2YXIgd2F2ZUF2ZXJhZ2UgPSB3YXZlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7IHJldHVybiBhY2MgKyB2OyB9LCAwKSAvIHdhdmUubGVuZ3RoO1xuICAgICAgICB2YXIgbWF4QW1wbGl0dWRlID0gMTAwO1xuICAgICAgICB2YXIgcG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhbmdsZSA9IE1hdGguUEkgLyAyOyBpIDwgd2F2ZS5sZW5ndGg7ICsraSwgYW5nbGUgKz0gTWF0aC5QSSAvIHdhdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgYW1wbGl0dWRlID0gTWF0aC5tYXgoMCwgd2F2ZVtpXSAtIHdhdmVBdmVyYWdlKTtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5zaW4oYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IC1wb2ludHNbaV0ueCwgeTogcG9pbnRzW2ldLnkgfSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4RkZGRkZGLCAwLjIpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgMHhGRkZGRkYpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoMHgxMTExMTEsIDEpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLmxpbmVXaWR0aCwgMHhGRkZGRkYpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdDaXJjbGUoMCwgMCwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdmFyIGV5ZXNTaXplO1xuICAgICAgICBpZiAodGhpcy5leWVzQ2xvc2VkKSB7XG4gICAgICAgICAgICBleWVzU2l6ZSA9IHRoaXMucmFkaXVzICogMC4wMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV5ZXNTaXplID0gdGhpcy5yYWRpdXMgKiAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV5ZXNZID0gLXRoaXMucmFkaXVzICogMC4zO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweEZGRkZGRik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4RkZGRkZGLCAxKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3UmVjdCgtZXllc1NpemUgKiAwLjUsIGV5ZXNZIC0gZXllc1NpemUgKiAwLjUsIGV5ZXNTaXplLCBleWVzU2l6ZSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QodGhpcy5yYWRpdXMgKiAwLjMgLSBleWVzU2l6ZSAqIDAuNSwgZXllc1kgLSBleWVzU2l6ZSAqIDAuNSwgZXllc1NpemUsIGV5ZXNTaXplKTtcbiAgICB9O1xuICAgIHJldHVybiBBdmVyYWdlQ2lyY2xlO1xufShEaXNwbGF5T2JqZWN0XzEuRGlzcGxheU9iamVjdCkpO1xuZXhwb3J0cy5BdmVyYWdlQ2lyY2xlID0gQXZlcmFnZUNpcmNsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgQXVkaW9IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vYXVkaW8vQXVkaW9IYW5kbGVyXCIpO1xudmFyIE5vZGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vZGUoc3RhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJhZGl1cyA9IDIgKyBNYXRoLnJhbmRvbSgpICogNDtcbiAgICAgICAgX3RoaXMuY29sb3IgPSAweEZGRkZGRiAqIChNYXRoLnJhbmRvbSgpICogLjUgKyAuNSk7XG4gICAgICAgIF90aGlzLnNldEZyaWN0aW9uKDEpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5vZGUucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGF2ZyA9IDAuNSArIE1hdGgubWluKDgsIDY0ICogQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5hdmVyYWdlKSAvIDE2O1xuICAgICAgICB2YXIgdmFsdWUgPSBhdmcgKiAweEZGIHwgMDtcbiAgICAgICAgdmFyIGdyYXlzY2FsZSA9IHBhcnNlSW50KCcweCcgKyAoKHZhbHVlIDw8IDE2KSB8ICh2YWx1ZSA8PCA4KSB8IHZhbHVlKS50b1N0cmluZygxNiksIDE2KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmF2ZXJhZ2UgPiAwLjE1ID8gdGhpcy5jb2xvciA6IGdyYXlzY2FsZSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xuICAgICAgICB2YXIgY29lZiA9IE1hdGgubWF4KDAuMSwgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5hdmVyYWdlICogOCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueCAqIChjb2VmIC0gMSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueSAqIChjb2VmIC0gMSk7XG4gICAgICAgIGlmICh0aGlzLnggPCAwKVxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zdGFnZS5nZXRXaWR0aCgpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnggPiB0aGlzLnN0YWdlLmdldFdpZHRoKCkpXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICBpZiAodGhpcy55IDwgMClcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA+IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkpXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGU7XG59KERpc3BsYXlPYmplY3RfMS5EaXNwbGF5T2JqZWN0KSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RDb250YWluZXJfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdENvbnRhaW5lclwiKTtcbnZhciBOb2RlXzEgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xudmFyIE5vZGVMaW5rZXJfMSA9IHJlcXVpcmUoXCIuL05vZGVMaW5rZXJcIik7XG52YXIgTm9kZUNvbnRhaW5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vZGVDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm9kZUNvbnRhaW5lcihzdGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubm9kZXMgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcl8xLkRpc3BsYXlPYmplY3RDb250YWluZXIoX3RoaXMuc3RhZ2UpO1xuICAgICAgICBfdGhpcy5hZGRDaGlsZChfdGhpcy5ub2Rlcyk7XG4gICAgICAgIF90aGlzLmFkZENoaWxkQXQobmV3IE5vZGVMaW5rZXJfMS5Ob2RlTGlua2VyKF90aGlzLnN0YWdlLCBfdGhpcy5ub2RlcyksIDApO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5vZGVDb250YWluZXIucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciB4ID0gMTA7IHggPCB0aGlzLnN0YWdlLmdldFdpZHRoKCk7IHggKz0gMjAwKVxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDEwOyB5IDwgdGhpcy5zdGFnZS5nZXRIZWlnaHQoKTsgeSArPSAyMDApXG4gICAgICAgICAgICAgICAgdGhpcy5hZGROb2RlKHggKyAxMiAqIE1hdGgucmFuZG9tKCksIHkgKyAxMiAqIE1hdGgucmFuZG9tKCksIDAsIDApO1xuICAgIH07XG4gICAgTm9kZUNvbnRhaW5lci5wcm90b3R5cGUuYWRkTm9kZSA9IGZ1bmN0aW9uICh4LCB5LCB2eCwgdnkpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZV8xLk5vZGUodGhpcy5zdGFnZSk7XG4gICAgICAgIG5vZGUucG9zaXRpb24uc2V0KHgsIHkpO1xuICAgICAgICBub2RlLnZlbG9jaXR5LnNldCh2eCwgdnkpO1xuICAgICAgICB0aGlzLm5vZGVzLmFkZENoaWxkKG5vZGUpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGVDb250YWluZXI7XG59KERpc3BsYXlPYmplY3RDb250YWluZXJfMS5EaXNwbGF5T2JqZWN0Q29udGFpbmVyKSk7XG5leHBvcnRzLk5vZGVDb250YWluZXIgPSBOb2RlQ29udGFpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdFwiKTtcbnZhciBQb2ludF8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9Qb2ludFwiKTtcbnZhciBOb2RlTGlua2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm9kZUxpbmtlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb2RlTGlua2VyKHN0YWdlLCBub2Rlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudGFyZ2V0ID0gbm9kZXM7XG4gICAgICAgIF90aGlzLmNlbnRlclBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoX3RoaXMuc3RhZ2UuZ2V0V2lkdGgoKSAvIDIsIDYgKiBfdGhpcy5zdGFnZS5nZXRIZWlnaHQoKSAvIDEwKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBOb2RlTGlua2VyLnByb3RvdHlwZS5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmFwaGljcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHhGRkZGRkYsIDAuMik7XG4gICAgICAgIHZhciBOID0gdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE47ICsraSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRhcmdldC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IFBvaW50XzEuUG9pbnQuZGlzdGFuY2Uobm9kZS5wb3NpdGlvbiwgdGhpcy5jZW50ZXJQb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiB0aGlzLnN0YWdlLmdldFdpZHRoKCkgLyAxMClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY2VudGVyUG9zaXRpb24ueCwgdGhpcy5jZW50ZXJQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZUxpbmtlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xuICAgICAgICB2YXIgTiA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKG5vZGUucG9zaXRpb24ueSAtIHRoaXMuY2VudGVyUG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi54IC0gdGhpcy5jZW50ZXJQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIHZhciBkaXN0ID0gUG9pbnRfMS5Qb2ludC5kaXN0YW5jZShub2RlLnBvc2l0aW9uLCB0aGlzLmNlbnRlclBvc2l0aW9uKTtcbiAgICAgICAgICAgIHZhciBmeCA9IC1NYXRoLmNvcyhhbmdsZSkgKiAxMDAwMDAgLyBkaXN0O1xuICAgICAgICAgICAgdmFyIGZ5ID0gLU1hdGguc2luKGFuZ2xlKSAqIDEwMDAwMCAvIGRpc3Q7XG4gICAgICAgICAgICBub2RlLnNldEZvcmNlKCd0b2NlbnRlcicsIHsgeDogZngsIHk6IGZ5IH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgayA9IGkgKyAxOyBrIDwgTjsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyTm9kZSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0XzEgPSBQb2ludF8xLlBvaW50LmRpc3RhbmNlKG5vZGUucG9zaXRpb24sIG90aGVyTm9kZS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RfMSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNsZWFyRm9yY2UoJ25vZGVfJyArIG90aGVyTm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZS5jbGVhckZvcmNlKCdub2RlXycgKyBub2RlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gTWF0aC5hdGFuMihub2RlLnBvc2l0aW9uLnkgLSBvdGhlck5vZGUucG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi54IC0gb3RoZXJOb2RlLnBvc2l0aW9uLngpO1xuICAgICAgICAgICAgICAgIHZhciBmeF8xID0gMCwgZnlfMSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RfMSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ4XzEgPSBNYXRoLmNvcyhhKSAqIDEwMDAwIC8gZGlzdF8xO1xuICAgICAgICAgICAgICAgICAgICBmeV8xID0gTWF0aC5zaW4oYSkgKiAxMDAwMCAvIGRpc3RfMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRGb3JjZSgnbm9kZV8nICsgb3RoZXJOb2RlLmlkLCBuZXcgUElYSS5Qb2ludCgtZnhfMSwgLWZ5XzEpKTtcbiAgICAgICAgICAgICAgICBvdGhlck5vZGUuc2V0Rm9yY2UoJ25vZGVfJyArIG5vZGUuaWQsIG5ldyBQSVhJLlBvaW50KGZ4XzEsIGZ5XzEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH07XG4gICAgcmV0dXJuIE5vZGVMaW5rZXI7XG59KERpc3BsYXlPYmplY3RfMS5EaXNwbGF5T2JqZWN0KSk7XG5leHBvcnRzLk5vZGVMaW5rZXIgPSBOb2RlTGlua2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcbnZhciBEaXNwbGF5T2JqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlzcGxheU9iamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaXNwbGF5T2JqZWN0KHN0YWdlLCBhcHBlbmRHcmFwaGljcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBhcHBlbmRHcmFwaGljcyA9IHR5cGVvZiAoYXBwZW5kR3JhcGhpY3MpID09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGFwcGVuZEdyYXBoaWNzO1xuICAgICAgICBfdGhpcy5pZCA9IERpc3BsYXlPYmplY3QuSUQrKztcbiAgICAgICAgX3RoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgICAgICAgX3RoaXMuZ3JhcGhpY3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIF90aGlzLnZlbG9jaXR5ID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICBfdGhpcy5mcmljdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICBfdGhpcy5mb3JjZXMgPSB7fTtcbiAgICAgICAgX3RoaXMubWFzcyA9IDE7XG4gICAgICAgIGlmIChhcHBlbmRHcmFwaGljcykge1xuICAgICAgICAgICAgX3RoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLnNldEZvcmNlID0gZnVuY3Rpb24gKG5hbWUsIHZlY3Rvcikge1xuICAgICAgICB0aGlzLmZvcmNlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIHg6IHZlY3Rvci54LFxuICAgICAgICAgICAgeTogdmVjdG9yLnlcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLmNsZWFyRm9yY2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5mb3JjZXNbbmFtZV07XG4gICAgfTtcbiAgICBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5zZXRGcmljdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgdGhpcy5mcmljdGlvbiA9IG5ldyBQSVhJLlBvaW50KHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZnJpY3Rpb24uc2V0KHZhbHVlLngsIHZhbHVlLnkpO1xuICAgIH07XG4gICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9yY2UoJ2ZyaWN0aW9uJywgbmV3IFBJWEkuUG9pbnQoLXRoaXMuZnJpY3Rpb24ueCAqIHRoaXMudmVsb2NpdHkueCwgLXRoaXMuZnJpY3Rpb24ueSAqIHRoaXMudmVsb2NpdHkueSkpO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi5zZXQoMCwgMCk7XG4gICAgICAgIGZvciAodmFyIGZvcmNlTmFtZSBpbiB0aGlzLmZvcmNlcykge1xuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueCArPSB0aGlzLmZvcmNlc1tmb3JjZU5hbWVdLng7XG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi55ICs9IHRoaXMuZm9yY2VzW2ZvcmNlTmFtZV0ueTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi54IC89IHRoaXMubWFzcztcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueSAvPSB0aGlzLm1hc3M7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBkZWx0YSAqIHRoaXMuYWNjZWxlcmF0aW9uLng7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBkZWx0YSAqIHRoaXMuYWNjZWxlcmF0aW9uLnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGRlbHRhICogdGhpcy52ZWxvY2l0eS55O1xuICAgIH07XG4gICAgRGlzcGxheU9iamVjdC5JRCA9IDE7XG4gICAgcmV0dXJuIERpc3BsYXlPYmplY3Q7XG59KFBJWEkuQ29udGFpbmVyKSk7XG5leHBvcnRzLkRpc3BsYXlPYmplY3QgPSBEaXNwbGF5T2JqZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgRGlzcGxheU9iamVjdENvbnRhaW5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BsYXlPYmplY3RDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGxheU9iamVjdENvbnRhaW5lcihzdGFnZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UsIGZhbHNlKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoY2hpbGQudXBkYXRlKVxuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZShkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xufShEaXNwbGF5T2JqZWN0XzEuRGlzcGxheU9iamVjdCkpO1xuZXhwb3J0cy5EaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gRGlzcGxheU9iamVjdENvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBvaW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQb2ludCgpIHtcbiAgICB9XG4gICAgUG9pbnQuZGlzdGFuY2UgPSBmdW5jdGlvbiAocG9pbnQxLCBwb2ludDIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDEueCAtIHBvaW50Mi54LCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyhwb2ludDEueSAtIHBvaW50Mi55LCAyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUG9pbnQ7XG59KCkpO1xuZXhwb3J0cy5Qb2ludCA9IFBvaW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RDb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG52YXIgTm9kZUNvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4uL2F1ZGlvL05vZGVDb250YWluZXJcIik7XG52YXIgQXZlcmFnZUNpcmNsZV8xID0gcmVxdWlyZShcIi4uL2F1ZGlvL0F2ZXJhZ2VDaXJjbGVcIik7XG52YXIgQW5pbWF0ZWRCYWNrZ3JvdW5kXzEgPSByZXF1aXJlKFwiLi4vYXVkaW8vQW5pbWF0ZWRCYWNrZ3JvdW5kXCIpO1xudmFyIFN0YWdlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RhZ2UsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3RhZ2UoY2FudmFzSUQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbnVsbCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2FudmFzQ29udGFpbmVySUQgPSBjYW52YXNJRDtcbiAgICAgICAgX3RoaXMuY2FudmFzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSUQpO1xuICAgICAgICBfdGhpcy5sYXN0RGVsdGEgPSAwO1xuICAgICAgICBfdGhpcy5yZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBfdGhpcy5jYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQoX3RoaXMucmVuZGVyZXIudmlldyk7XG4gICAgICAgIF90aGlzLnJlbmRlcmVyLnJlbmRlcihfdGhpcyk7XG4gICAgICAgIF90aGlzLm1vdXNlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBQSVhJLlBvaW50KDAsIDApXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMubW91c2UucG9zaXRpb24uc2V0KGUuZGF0YS5nbG9iYWwueCwgZS5kYXRhLmdsb2JhbC55KTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLmxhc3RVcGRhdGVEZWx0YSA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3RhZ2UucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KDApO1xuICAgICAgICB2YXIgbm9kZUNvbnRhaW5lciA9IG5ldyBOb2RlQ29udGFpbmVyXzEuTm9kZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgbm9kZUNvbnRhaW5lci5wb3B1bGF0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKG5vZGVDb250YWluZXIpO1xuICAgICAgICB2YXIgYXZnQ2lyY2xlID0gbmV3IEF2ZXJhZ2VDaXJjbGVfMS5BdmVyYWdlQ2lyY2xlKHRoaXMsIHRoaXMuZ2V0V2lkdGgoKSAvIDIsIDYgKiB0aGlzLmdldEhlaWdodCgpIC8gMTApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGF2Z0NpcmNsZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRBdChuZXcgQW5pbWF0ZWRCYWNrZ3JvdW5kXzEuQW5pbWF0ZWRCYWNrZ3JvdW5kKHRoaXMpLCAwKTtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9O1xuICAgIFN0YWdlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICB9O1xuICAgIFN0YWdlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMubGFzdERlbHRhID0gdCAtIHRoaXMubGFzdFVwZGF0ZURlbHRhO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVEZWx0YSA9IHQ7XG4gICAgICAgIGlmICh0aGlzLmxhc3REZWx0YSA+IDEpXG4gICAgICAgICAgICB0aGlzLmxhc3REZWx0YSA9IDA7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgdGhpcy5sYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YWdlO1xufShEaXNwbGF5T2JqZWN0Q29udGFpbmVyXzEuRGlzcGxheU9iamVjdENvbnRhaW5lcikpO1xuZXhwb3J0cy5TdGFnZSA9IFN0YWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEF1ZGlvSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXVkaW9IYW5kbGVyKCkge1xuICAgIH1cbiAgICBBdWRpb0hhbmRsZXIuaW5pdCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IChBdWRpb0NvbnRleHQgfHwgd2luZG93Wyd3ZWJraXRBdWRpb0NvbnRleHQnXSkoKTtcbiAgICAgICAgdGhpcy5nYWluID0gQXVkaW9IYW5kbGVyLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnNvbmcgPSBuZXcgQXVkaW8oc3JjKTtcbiAgICAgICAgdGhpcy5zb25nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzb25nU291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSh0aGlzLnNvbmcpO1xuICAgICAgICBzb25nU291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IHRoaXMuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcbiAgICAgICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gQXVkaW9IYW5kbGVyLkZGVF9TSVpFO1xuICAgICAgICB0aGlzLndhdmVmb3JtID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm0gPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmdldEZsb2F0VGltZURvbWFpbkRhdGEodGhpcy53YXZlZm9ybSk7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlU3RhdHMoKTsgfSwgQXVkaW9IYW5kbGVyLlNUQVRTX1VQREFURV9JTlRFUlZBTCk7XG4gICAgfTtcbiAgICBBdWRpb0hhbmRsZXIudXBkYXRlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkZWx0YSA9IChEYXRlLm5vdygpIC0gdGhpcy5sYXN0VXBkYXRlRGVsdGEpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5hbmFseXNlci5nZXRGbG9hdFRpbWVEb21haW5EYXRhKHRoaXMud2F2ZWZvcm0pO1xuICAgICAgICB0aGlzLmF2ZXJhZ2UgPSB0aGlzLndhdmVmb3JtLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldiArIE1hdGguYWJzKGN1cnIpOyB9LCAwKSAvIHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgICAgIHRoaXMubWluaW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBNYXRoLm1pbihhLCBiKTsgfSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBNYXRoLm1heChhLCBiKTsgfSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UgKz0gKHRoaXMuYXZlcmFnZSAtIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UpICogMC41ICogZGVsdGE7XG4gICAgICAgIHRoaXMubGluZWFyQXZlcmFnZSArPSBkZWx0YSAqICh0aGlzLmF2ZXJhZ2UgPiB0aGlzLmxpbmVhckF2ZXJhZ2UgPyAxIDogLTEpO1xuICAgICAgICB0aGlzLndhdmVmb3JtLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSlcbiAgICAgICAgICAgICAgICBfdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm1baW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSArPSAodmFsdWUgLSBfdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm1baW5kZXhdKSAqIDEuMSAqIGRlbHRhO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSBEYXRlLm5vdygpO1xuICAgIH07XG4gICAgQXVkaW9IYW5kbGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCB0aGlzLnNvbmcucGxheSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdWRpb0hhbmRsZXIuRkZUX1NJWkUgPSAyNTY7XG4gICAgQXVkaW9IYW5kbGVyLlNUQVRTX1VQREFURV9JTlRFUlZBTCA9IDEwMDAgLyA0MDtcbiAgICBBdWRpb0hhbmRsZXIuYXZlcmFnZSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLmZpcnN0T3JkZXJBdmVyYWdlID0gMDtcbiAgICBBdWRpb0hhbmRsZXIubGluZWFyQXZlcmFnZSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLm1pbmltdW0gPSAwO1xuICAgIEF1ZGlvSGFuZGxlci5tYXhpbXVtID0gMDtcbiAgICBBdWRpb0hhbmRsZXIubGFzdFVwZGF0ZURlbHRhID0gMDtcbiAgICByZXR1cm4gQXVkaW9IYW5kbGVyO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1ZGlvSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2FuaW1hdGlvbi9lbmdpbmUvU3RhZ2VcIikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==