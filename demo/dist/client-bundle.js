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
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
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
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
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
var AudioHandler_1 = __webpack_require__(/*! ../../audio/AudioHandler */ "./src/audio/AudioHandler.ts");
var DisplayObject_1 = __webpack_require__(/*! ../engine/DisplayObject */ "./src/animation/engine/DisplayObject.ts");
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
            if (child.update) {
                child.update(delta);
            }
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
var AnimatedBackground_1 = __webpack_require__(/*! ../audio/AnimatedBackground */ "./src/animation/audio/AnimatedBackground.ts");
var AverageCircle_1 = __webpack_require__(/*! ../audio/AverageCircle */ "./src/animation/audio/AverageCircle.ts");
var NodeContainer_1 = __webpack_require__(/*! ../audio/NodeContainer */ "./src/animation/audio/NodeContainer.ts");
var DisplayObjectContainer_1 = __webpack_require__(/*! ./DisplayObjectContainer */ "./src/animation/engine/DisplayObjectContainer.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BbmltYXRlZEJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BdmVyYWdlQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vYXVkaW8vTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2F1ZGlvL05vZGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9Ob2RlTGlua2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZW5naW5lL0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lbmdpbmUvRGlzcGxheU9iamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW8vQXVkaW9IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDRCQUE0QixFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsOEJBQThCLEVBQUU7QUFDbkcsNkRBQTZELHVCQUF1QixFQUFFO0FBQ3RGLDZEQUE2RCx1QkFBdUIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdEdhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsU0FBUyxtQkFBTyxDQUFDLGlFQUEwQiIsImZpbGUiOiJjbGllbnQtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZW1vL2NsaWVudC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzcmNfMSA9IHJlcXVpcmUoXCIuLi9zcmNcIik7XG52YXIgQXVkaW9IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vc3JjL2F1ZGlvL0F1ZGlvSGFuZGxlclwiKTtcbnZhciBzdGFnZTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQsIHJlc3RhcnRTb25nKCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGFnZSA9IG5ldyBzcmNfMS5TdGFnZSgncG93ZXJhdWRpbycpO1xuICAgICAgICAgICAgICAgICAgICBzdGFnZS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlc3RhcnRTb25nKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LnNvbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LnNvbmcucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuc29uZy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5pbml0KFwiL211c2ljP1wiICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5wbGF5KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpbml0KCk7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXVkaW9IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vYXVkaW8vQXVkaW9IYW5kbGVyXCIpO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdFwiKTtcbnZhciBBbmltYXRlZEJhY2tncm91bmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbmltYXRlZEJhY2tncm91bmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0ZWRCYWNrZ3JvdW5kKHN0YWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zZXRGcmljdGlvbigxKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbmltYXRlZEJhY2tncm91bmQucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhdGlvID0gTWF0aC5taW4oNTAsIDI1NiAqIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuZmlyc3RPcmRlckF2ZXJhZ2UpIC8gNTA7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJhdGlvICogMHgxMSB8IDA7XG4gICAgICAgIHZhciBncmF5c2NhbGUgPSBwYXJzZUludChcIjB4XCIgKyAoKHZhbHVlIDw8IDE2KSB8ICh2YWx1ZSA8PCA4KSB8IHZhbHVlKS50b1N0cmluZygxNiksIDE2KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChncmF5c2NhbGUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KDAsIDAsIHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKSwgdGhpcy5zdGFnZS5nZXRIZWlnaHQoKSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGVkQmFja2dyb3VuZDtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuQW5pbWF0ZWRCYWNrZ3JvdW5kID0gQW5pbWF0ZWRCYWNrZ3JvdW5kO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEF1ZGlvSGFuZGxlcl8xID0gcmVxdWlyZShcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiKTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgQXZlcmFnZUNpcmNsZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEF2ZXJhZ2VDaXJjbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXZlcmFnZUNpcmNsZShzdGFnZSwgY2VudGVyWCwgY2VudGVyWSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIF90aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICBfdGhpcy5saW5lV2lkdGggPSAxO1xuICAgICAgICBfdGhpcy5leWVzQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRhcmdldFBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmxhc3RVcGRhdGVQb3NpdGlvbiA9IDA7XG4gICAgICAgIF90aGlzLmJhc2VSYWRpdXMgPSBNYXRoLm1pbihzdGFnZS5nZXRXaWR0aCgpLCBzdGFnZS5nZXRIZWlnaHQoKSkgLyAxMjtcbiAgICAgICAgX3RoaXMucmFkaXVzID0gX3RoaXMuYmFzZVJhZGl1cztcbiAgICAgICAgX3RoaXMuZmlsdGVyID0gbmV3IFBJWEkuZmlsdGVycy5CbHVyRmlsdGVyKCk7XG4gICAgICAgIF90aGlzLmZpbHRlcnMgPSBbX3RoaXMuZmlsdGVyXTtcbiAgICAgICAgX3RoaXMuc2V0RnJpY3Rpb24oMSk7XG4gICAgICAgIF90aGlzLnBvc2l0aW9uLnggPSBjZW50ZXJYO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbi55ID0gY2VudGVyWTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBdmVyYWdlQ2lyY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XG4gICAgICAgIHRoaXMuZXllc0Nsb3NlZCA9IE1hdGguZmxvb3IoMTAgKiBEYXRlLm5vdygpIC8gMTAwMCkgJSAzMCA9PT0gMDtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAxICsgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5saW5lYXJBdmVyYWdlICogODtcbiAgICAgICAgdGhpcy5maWx0ZXIuYmx1ciA9IDAuMiArIDggKiBNYXRoLmV4cCgtMTYgKiBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmxpbmVhckF2ZXJhZ2UpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuYmFzZVJhZGl1cyArIDEwMCAqIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQubGluZWFyQXZlcmFnZTtcbiAgICAgICAgdGhpcy5zZXRGb3JjZShcIm1haW5cIiwge1xuICAgICAgICAgICAgeDogdGhpcy50YXJnZXRQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy50YXJnZXRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKERhdGUubm93KCkgPiA0MDAgKyB0aGlzLmxhc3RVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlUG9zaXRpb24gPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICBBdmVyYWdlQ2lyY2xlLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5iYXNlUmFkaXVzICogLjU7XG4gICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgICAgICB2YXIgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi54ID0gdGhpcy5jZW50ZXJYICsgeDtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi55ID0gdGhpcy5jZW50ZXJZICsgeTtcbiAgICB9O1xuICAgIEF2ZXJhZ2VDaXJjbGUucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB2YXIgd2F2ZSA9IEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuZmlyc3RPcmRlcldhdmVmb3JtO1xuICAgICAgICB2YXIgd2F2ZUF2ZXJhZ2UgPSB3YXZlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7IHJldHVybiBhY2MgKyB2OyB9LCAwKSAvIHdhdmUubGVuZ3RoO1xuICAgICAgICB2YXIgbWF4QW1wbGl0dWRlID0gMTAwO1xuICAgICAgICB2YXIgcG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhbmdsZSA9IE1hdGguUEkgLyAyOyBpIDwgd2F2ZS5sZW5ndGg7ICsraSwgYW5nbGUgKz0gTWF0aC5QSSAvIHdhdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgYW1wbGl0dWRlID0gTWF0aC5tYXgoMCwgd2F2ZVtpXSAtIHdhdmVBdmVyYWdlKTtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5zaW4oYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogLXBvaW50c1tpXS54LCB5OiBwb2ludHNbaV0ueSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweEZGRkZGRiwgMC4yKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBwb2ludHNfMSA9IHBvaW50czsgX2kgPCBwb2ludHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c18xW19pXTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4MTExMTExLCAxKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCAweEZGRkZGRik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHZhciBleWVzU2l6ZSA9IHRoaXMuZXllc0Nsb3NlZCA/IHRoaXMucmFkaXVzICogMC4wMiA6IHRoaXMucmFkaXVzICogMC4xO1xuICAgICAgICB2YXIgZXllc1kgPSAtdGhpcy5yYWRpdXMgKiAwLjM7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoMHhGRkZGRkYsIDEpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KC1leWVzU2l6ZSAqIDAuNSwgZXllc1kgLSBleWVzU2l6ZSAqIDAuNSwgZXllc1NpemUsIGV5ZXNTaXplKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3UmVjdCh0aGlzLnJhZGl1cyAqIDAuMyAtIGV5ZXNTaXplICogMC41LCBleWVzWSAtIGV5ZXNTaXplICogMC41LCBleWVzU2l6ZSwgZXllc1NpemUpO1xuICAgIH07XG4gICAgcmV0dXJuIEF2ZXJhZ2VDaXJjbGU7XG59KERpc3BsYXlPYmplY3RfMS5EaXNwbGF5T2JqZWN0KSk7XG5leHBvcnRzLkF2ZXJhZ2VDaXJjbGUgPSBBdmVyYWdlQ2lyY2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEF1ZGlvSGFuZGxlcl8xID0gcmVxdWlyZShcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiKTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgTm9kZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vZGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm9kZShzdGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmFkaXVzID0gMiArIE1hdGgucmFuZG9tKCkgKiA0O1xuICAgICAgICBfdGhpcy5jb2xvciA9IDB4RkZGRkZGICogKE1hdGgucmFuZG9tKCkgKiAuNSArIC41KTtcbiAgICAgICAgX3RoaXMuc2V0RnJpY3Rpb24oMSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTm9kZS5wcm90b3R5cGUucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JhcGhpY3MgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXZnID0gMC41ICsgTWF0aC5taW4oOCwgNjQgKiBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmF2ZXJhZ2UpIC8gMTY7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF2ZyAqIDB4RkYgfCAwO1xuICAgICAgICB2YXIgZ3JheXNjYWxlID0gcGFyc2VJbnQoXCIweFwiICsgKCh2YWx1ZSA8PCAxNikgfCAodmFsdWUgPDwgOCkgfCB2YWx1ZSkudG9TdHJpbmcoMTYpLCAxNik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5hdmVyYWdlID4gMC4xNSA/IHRoaXMuY29sb3IgOiBncmF5c2NhbGUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdDaXJjbGUoMCwgMCwgdGhpcy5yYWRpdXMpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIGRlbHRhKTtcbiAgICAgICAgdmFyIGNvZWYgPSBNYXRoLm1heCgwLjEsIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuYXZlcmFnZSAqIDgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZGVsdGEgKiB0aGlzLnZlbG9jaXR5LnggKiAoY29lZiAtIDEpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gZGVsdGEgKiB0aGlzLnZlbG9jaXR5LnkgKiAoY29lZiAtIDEpO1xuICAgICAgICBpZiAodGhpcy54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5zdGFnZS5nZXRXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueCA+IHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKSkge1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55IDwgMCkge1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5zdGFnZS5nZXRIZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnkgPiB0aGlzLnN0YWdlLmdldEhlaWdodCgpKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZTtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuTm9kZSA9IE5vZGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGlzcGxheU9iamVjdENvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9EaXNwbGF5T2JqZWN0Q29udGFpbmVyXCIpO1xudmFyIE5vZGVfMSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG52YXIgTm9kZUxpbmtlcl8xID0gcmVxdWlyZShcIi4vTm9kZUxpbmtlclwiKTtcbnZhciBOb2RlQ29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm9kZUNvbnRhaW5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb2RlQ29udGFpbmVyKHN0YWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ub2RlcyA9IG5ldyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyXzEuRGlzcGxheU9iamVjdENvbnRhaW5lcihfdGhpcy5zdGFnZSk7XG4gICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLm5vZGVzKTtcbiAgICAgICAgX3RoaXMuYWRkQ2hpbGRBdChuZXcgTm9kZUxpbmtlcl8xLk5vZGVMaW5rZXIoX3RoaXMuc3RhZ2UsIF90aGlzLm5vZGVzKSwgMCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTm9kZUNvbnRhaW5lci5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIHggPSAxMDsgeCA8IHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKTsgeCArPSAyMDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAxMDsgeSA8IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCk7IHkgKz0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGROb2RlKHggKyAxMiAqIE1hdGgucmFuZG9tKCksIHkgKyAxMiAqIE1hdGgucmFuZG9tKCksIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlQ29udGFpbmVyLnByb3RvdHlwZS5hZGROb2RlID0gZnVuY3Rpb24gKHgsIHksIHZ4LCB2eSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZSh0aGlzLnN0YWdlKTtcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5zZXQoeCwgeSk7XG4gICAgICAgIG5vZGUudmVsb2NpdHkuc2V0KHZ4LCB2eSk7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkQ2hpbGQobm9kZSk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZUNvbnRhaW5lcjtcbn0oRGlzcGxheU9iamVjdENvbnRhaW5lcl8xLkRpc3BsYXlPYmplY3RDb250YWluZXIpKTtcbmV4cG9ydHMuTm9kZUNvbnRhaW5lciA9IE5vZGVDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGlzcGxheU9iamVjdF8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9EaXNwbGF5T2JqZWN0XCIpO1xudmFyIFBvaW50XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL1BvaW50XCIpO1xudmFyIE5vZGVMaW5rZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlTGlua2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vZGVMaW5rZXIoc3RhZ2UsIG5vZGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50YXJnZXQgPSBub2RlcztcbiAgICAgICAgX3RoaXMuY2VudGVyUG9zaXRpb24gPSBuZXcgUElYSS5Qb2ludChfdGhpcy5zdGFnZS5nZXRXaWR0aCgpIC8gMiwgNiAqIF90aGlzLnN0YWdlLmdldEhlaWdodCgpIC8gMTApO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5vZGVMaW5rZXIucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweEZGRkZGRiwgMC4yKTtcbiAgICAgICAgdmFyIE4gPSB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gUG9pbnRfMS5Qb2ludC5kaXN0YW5jZShub2RlLnBvc2l0aW9uLCB0aGlzLmNlbnRlclBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKSAvIDEwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyh0aGlzLmNlbnRlclBvc2l0aW9uLngsIHRoaXMuY2VudGVyUG9zaXRpb24ueSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGVMaW5rZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIGRlbHRhKTtcbiAgICAgICAgdmFyIE4gPSB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihub2RlLnBvc2l0aW9uLnkgLSB0aGlzLmNlbnRlclBvc2l0aW9uLnksIG5vZGUucG9zaXRpb24ueCAtIHRoaXMuY2VudGVyUG9zaXRpb24ueCk7XG4gICAgICAgICAgICB2YXIgZGlzdCA9IFBvaW50XzEuUG9pbnQuZGlzdGFuY2Uobm9kZS5wb3NpdGlvbiwgdGhpcy5jZW50ZXJQb3NpdGlvbik7XG4gICAgICAgICAgICB2YXIgZnggPSAtTWF0aC5jb3MoYW5nbGUpICogMTAwMDAwIC8gZGlzdDtcbiAgICAgICAgICAgIHZhciBmeSA9IC1NYXRoLnNpbihhbmdsZSkgKiAxMDAwMDAgLyBkaXN0O1xuICAgICAgICAgICAgbm9kZS5zZXRGb3JjZShcInRvY2VudGVyXCIsIHsgeDogZngsIHk6IGZ5IH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgayA9IGkgKyAxOyBrIDwgTjsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG90aGVyTm9kZSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuW2tdO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0MiA9IFBvaW50XzEuUG9pbnQuZGlzdGFuY2Uobm9kZS5wb3NpdGlvbiwgb3RoZXJOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdDIgPiAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGVhckZvcmNlKFwibm9kZV9cIiArIG90aGVyTm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyTm9kZS5jbGVhckZvcmNlKFwibm9kZV9cIiArIG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBNYXRoLmF0YW4yKG5vZGUucG9zaXRpb24ueSAtIG90aGVyTm9kZS5wb3NpdGlvbi55LCBub2RlLnBvc2l0aW9uLnggLSBvdGhlck5vZGUucG9zaXRpb24ueCk7XG4gICAgICAgICAgICAgICAgdmFyIGZ4MiA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGZ5MiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3QyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ4MiA9IE1hdGguY29zKGEpICogMTAwMDAgLyBkaXN0MjtcbiAgICAgICAgICAgICAgICAgICAgZnkyID0gTWF0aC5zaW4oYSkgKiAxMDAwMCAvIGRpc3QyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnNldEZvcmNlKFwibm9kZV9cIiArIG90aGVyTm9kZS5pZCwgbmV3IFBJWEkuUG9pbnQoLWZ4MiwgLWZ5MikpO1xuICAgICAgICAgICAgICAgIG90aGVyTm9kZS5zZXRGb3JjZShcIm5vZGVfXCIgKyBub2RlLmlkLCBuZXcgUElYSS5Qb2ludChmeDIsIGZ5MikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZUxpbmtlcjtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuTm9kZUxpbmtlciA9IE5vZGVMaW5rZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzO1xudmFyIERpc3BsYXlPYmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEaXNwbGF5T2JqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpc3BsYXlPYmplY3Qoc3RhZ2UsIGFwcGVuZEdyYXBoaWNzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIGFwcGVuZEdyYXBoaWNzID0gdHlwZW9mIChhcHBlbmRHcmFwaGljcykgPT09IFwidW5kZWZpbmVkXCIgPyB0cnVlIDogYXBwZW5kR3JhcGhpY3M7XG4gICAgICAgIF90aGlzLmlkID0gRGlzcGxheU9iamVjdC5JRCsrO1xuICAgICAgICBfdGhpcy5zdGFnZSA9IHN0YWdlO1xuICAgICAgICBfdGhpcy5ncmFwaGljcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgX3RoaXMudmVsb2NpdHkgPSBuZXcgUElYSS5Qb2ludCgwLCAwKTtcbiAgICAgICAgX3RoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmZyaWN0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmZvcmNlcyA9IHt9O1xuICAgICAgICBfdGhpcy5tYXNzID0gMTtcbiAgICAgICAgaWYgKGFwcGVuZEdyYXBoaWNzKSB7XG4gICAgICAgICAgICBfdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xuICAgICAgICAgICAgX3RoaXMuYWRkQ2hpbGQoX3RoaXMuZ3JhcGhpY3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUuc2V0Rm9yY2UgPSBmdW5jdGlvbiAobmFtZSwgdmVjdG9yKSB7XG4gICAgICAgIHRoaXMuZm9yY2VzW25hbWVdID0ge1xuICAgICAgICAgICAgeDogdmVjdG9yLngsXG4gICAgICAgICAgICB5OiB2ZWN0b3IueSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLmNsZWFyRm9yY2UgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5mb3JjZXNbbmFtZV07XG4gICAgfTtcbiAgICBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5zZXRGcmljdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uID0gbmV3IFBJWEkuUG9pbnQodmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJpY3Rpb24uc2V0KHZhbHVlLngsIHZhbHVlLnkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5zZXRGb3JjZShcImZyaWN0aW9uXCIsIG5ldyBQSVhJLlBvaW50KC10aGlzLmZyaWN0aW9uLnggKiB0aGlzLnZlbG9jaXR5LngsIC10aGlzLmZyaWN0aW9uLnkgKiB0aGlzLnZlbG9jaXR5LnkpKTtcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0KDAsIDApO1xuICAgICAgICBmb3IgKHZhciBmb3JjZU5hbWUgaW4gdGhpcy5mb3JjZXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JjZXMuaGFzT3duUHJvcGVydHkoZm9yY2VOYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueCArPSB0aGlzLmZvcmNlc1tmb3JjZU5hbWVdLng7XG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi55ICs9IHRoaXMuZm9yY2VzW2ZvcmNlTmFtZV0ueTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi54IC89IHRoaXMubWFzcztcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueSAvPSB0aGlzLm1hc3M7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBkZWx0YSAqIHRoaXMuYWNjZWxlcmF0aW9uLng7XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBkZWx0YSAqIHRoaXMuYWNjZWxlcmF0aW9uLnk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGRlbHRhICogdGhpcy52ZWxvY2l0eS55O1xuICAgIH07XG4gICAgRGlzcGxheU9iamVjdC5JRCA9IDE7XG4gICAgcmV0dXJuIERpc3BsYXlPYmplY3Q7XG59KFBJWEkuQ29udGFpbmVyKSk7XG5leHBvcnRzLkRpc3BsYXlPYmplY3QgPSBEaXNwbGF5T2JqZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgRGlzcGxheU9iamVjdENvbnRhaW5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BsYXlPYmplY3RDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGxheU9iamVjdENvbnRhaW5lcihzdGFnZSkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UsIGZhbHNlKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLCBkZWx0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoY2hpbGQudXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERpc3BsYXlPYmplY3RDb250YWluZXI7XG59KERpc3BsYXlPYmplY3RfMS5EaXNwbGF5T2JqZWN0KSk7XG5leHBvcnRzLkRpc3BsYXlPYmplY3RDb250YWluZXIgPSBEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUG9pbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvaW50KCkge1xuICAgIH1cbiAgICBQb2ludC5kaXN0YW5jZSA9IGZ1bmN0aW9uIChwb2ludDEsIHBvaW50Mikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50MS54IC0gcG9pbnQyLngsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KHBvaW50MS55IC0gcG9pbnQyLnksIDIpKTtcbiAgICB9O1xuICAgIHJldHVybiBQb2ludDtcbn0oKSk7XG5leHBvcnRzLlBvaW50ID0gUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQW5pbWF0ZWRCYWNrZ3JvdW5kXzEgPSByZXF1aXJlKFwiLi4vYXVkaW8vQW5pbWF0ZWRCYWNrZ3JvdW5kXCIpO1xudmFyIEF2ZXJhZ2VDaXJjbGVfMSA9IHJlcXVpcmUoXCIuLi9hdWRpby9BdmVyYWdlQ2lyY2xlXCIpO1xudmFyIE5vZGVDb250YWluZXJfMSA9IHJlcXVpcmUoXCIuLi9hdWRpby9Ob2RlQ29udGFpbmVyXCIpO1xudmFyIERpc3BsYXlPYmplY3RDb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG52YXIgU3RhZ2UgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdGFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdGFnZShjYW52YXNJRCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBudWxsKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jYW52YXNDb250YWluZXJJRCA9IGNhbnZhc0lEO1xuICAgICAgICBfdGhpcy5jYW52YXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJRCk7XG4gICAgICAgIF90aGlzLmxhc3REZWx0YSA9IDA7XG4gICAgICAgIF90aGlzLnJlbmRlcmVyID0gUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIF90aGlzLmNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfdGhpcy5yZW5kZXJlci52aWV3KTtcbiAgICAgICAgX3RoaXMucmVuZGVyZXIucmVuZGVyKF90aGlzKTtcbiAgICAgICAgX3RoaXMubW91c2UgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IFBJWEkuUG9pbnQoMCwgMCksXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy5tb3VzZS5wb3NpdGlvbi5zZXQoZS5kYXRhLmdsb2JhbC54LCBlLmRhdGEuZ2xvYmFsLnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMubGFzdFVwZGF0ZURlbHRhID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdGFnZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZUNvbnRhaW5lciA9IG5ldyBOb2RlQ29udGFpbmVyXzEuTm9kZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgbm9kZUNvbnRhaW5lci5wb3B1bGF0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKG5vZGVDb250YWluZXIpO1xuICAgICAgICB2YXIgYXZnQ2lyY2xlID0gbmV3IEF2ZXJhZ2VDaXJjbGVfMS5BdmVyYWdlQ2lyY2xlKHRoaXMsIHRoaXMuZ2V0V2lkdGgoKSAvIDIsIDYgKiB0aGlzLmdldEhlaWdodCgpIC8gMTApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGF2Z0NpcmNsZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRBdChuZXcgQW5pbWF0ZWRCYWNrZ3JvdW5kXzEuQW5pbWF0ZWRCYWNrZ3JvdW5kKHRoaXMpLCAwKTtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9O1xuICAgIFN0YWdlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICB9O1xuICAgIFN0YWdlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHRoaXMubGFzdERlbHRhID0gdCAtIHRoaXMubGFzdFVwZGF0ZURlbHRhO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVEZWx0YSA9IHQ7XG4gICAgICAgIGlmICh0aGlzLmxhc3REZWx0YSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdERlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIHRoaXMubGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIFN0YWdlLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIHJldHVybiBTdGFnZTtcbn0oRGlzcGxheU9iamVjdENvbnRhaW5lcl8xLkRpc3BsYXlPYmplY3RDb250YWluZXIpKTtcbmV4cG9ydHMuU3RhZ2UgPSBTdGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBdWRpb0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1ZGlvSGFuZGxlcigpIHtcbiAgICB9XG4gICAgQXVkaW9IYW5kbGVyLmluaXQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyAoQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG4gICAgICAgIHRoaXMuZ2FpbiA9IEF1ZGlvSGFuZGxlci5jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgdGhpcy5nYWluLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5zb25nID0gbmV3IEF1ZGlvKHNyYyk7XG4gICAgICAgIHRoaXMuc29uZy5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBzb25nU291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSh0aGlzLnNvbmcpO1xuICAgICAgICBzb25nU291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IHRoaXMuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcbiAgICAgICAgdGhpcy5hbmFseXNlci5mZnRTaXplID0gQXVkaW9IYW5kbGVyLkZGVF9TSVpFO1xuICAgICAgICB0aGlzLndhdmVmb3JtID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm0gPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmdldEZsb2F0VGltZURvbWFpbkRhdGEodGhpcy53YXZlZm9ybSk7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlU3RhdHMoKTsgfSwgQXVkaW9IYW5kbGVyLlNUQVRTX1VQREFURV9JTlRFUlZBTCk7XG4gICAgfTtcbiAgICBBdWRpb0hhbmRsZXIudXBkYXRlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkZWx0YSA9IChEYXRlLm5vdygpIC0gdGhpcy5sYXN0VXBkYXRlRGVsdGEpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5hbmFseXNlci5nZXRGbG9hdFRpbWVEb21haW5EYXRhKHRoaXMud2F2ZWZvcm0pO1xuICAgICAgICB0aGlzLmF2ZXJhZ2UgPSB0aGlzLndhdmVmb3JtLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldiArIE1hdGguYWJzKGN1cnIpOyB9LCAwKSAvIHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgICAgIHRoaXMubWluaW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBNYXRoLm1pbihhLCBiKTsgfSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBNYXRoLm1heChhLCBiKTsgfSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UgKz0gKHRoaXMuYXZlcmFnZSAtIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UpICogMC41ICogZGVsdGE7XG4gICAgICAgIHRoaXMubGluZWFyQXZlcmFnZSArPSBkZWx0YSAqICh0aGlzLmF2ZXJhZ2UgPiB0aGlzLmxpbmVhckF2ZXJhZ2UgPyAxIDogLTEpO1xuICAgICAgICB0aGlzLndhdmVmb3JtLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmZpcnN0T3JkZXJXYXZlZm9ybVtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmZpcnN0T3JkZXJXYXZlZm9ybVtpbmRleF0gKz0gKHZhbHVlIC0gX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSkgKiAxLjEgKiBkZWx0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKTtcbiAgICB9O1xuICAgIEF1ZGlvSGFuZGxlci5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgdGhpcy5zb25nLnBsYXkoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXVkaW9IYW5kbGVyLkZGVF9TSVpFID0gMjU2O1xuICAgIEF1ZGlvSGFuZGxlci5TVEFUU19VUERBVEVfSU5URVJWQUwgPSAxMDAwIC8gNDA7XG4gICAgQXVkaW9IYW5kbGVyLmF2ZXJhZ2UgPSAwO1xuICAgIEF1ZGlvSGFuZGxlci5maXJzdE9yZGVyQXZlcmFnZSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLmxpbmVhckF2ZXJhZ2UgPSAwO1xuICAgIEF1ZGlvSGFuZGxlci5taW5pbXVtID0gMDtcbiAgICBBdWRpb0hhbmRsZXIubWF4aW11bSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLmxhc3RVcGRhdGVEZWx0YSA9IDA7XG4gICAgcmV0dXJuIEF1ZGlvSGFuZGxlcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBBdWRpb0hhbmRsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9hbmltYXRpb24vZW5naW5lL1N0YWdlXCIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=