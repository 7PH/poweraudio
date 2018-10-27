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
        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 == 0;
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
                var dist_1 = Point_1.Point.distance(node.position, otherNode.position);
                if (dist_1 > 300) {
                    node.clearForce("node_" + otherNode.id);
                    otherNode.clearForce("node_" + node.id);
                    continue;
                }
                var a = Math.atan2(node.position.y - otherNode.position.y, node.position.x - otherNode.position.x);
                var fx_1 = 0, fy_1 = 0;
                if (dist_1 != 0) {
                    fx_1 = Math.cos(a) * 10000 / dist_1;
                    fy_1 = Math.sin(a) * 10000 / dist_1;
                }
                node.setForce("node_" + otherNode.id, new PIXI.Point(-fx_1, -fy_1));
                otherNode.setForce("node_" + node.id, new PIXI.Point(fx_1, fy_1));
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
        appendGraphics = typeof (appendGraphics) == "undefined" ? true : appendGraphics;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BbmltYXRlZEJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BdmVyYWdlQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vYXVkaW8vTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2F1ZGlvL05vZGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9Ob2RlTGlua2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZW5naW5lL0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lbmdpbmUvRGlzcGxheU9iamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW8vQXVkaW9IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCw0QkFBNEIsRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLDhCQUE4QixFQUFFO0FBQ25HLDZEQUE2RCx1QkFBdUIsRUFBRTtBQUN0Riw2REFBNkQsdUJBQXVCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFNBQVMsbUJBQU8sQ0FBQyxpRUFBMEIiLCJmaWxlIjoiY2xpZW50LWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGVtby9jbGllbnQudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc3JjXzEgPSByZXF1aXJlKFwiLi4vc3JjXCIpO1xudmFyIEF1ZGlvSGFuZGxlcl8xID0gcmVxdWlyZShcIi4uL3NyYy9hdWRpby9BdWRpb0hhbmRsZXJcIik7XG52YXIgc3RhZ2U7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCByZXN0YXJ0U29uZygpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UgPSBuZXcgc3JjXzEuU3RhZ2UoJ3Bvd2VyYXVkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZXN0YXJ0U29uZygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5zb25nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5zb25nLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LnNvbmcuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuaW5pdChcIi9tdXNpYz9cIiArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQucGxheSgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5pdCgpOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEF1ZGlvSGFuZGxlcl8xID0gcmVxdWlyZShcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiKTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgQW5pbWF0ZWRCYWNrZ3JvdW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQW5pbWF0ZWRCYWNrZ3JvdW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGVkQmFja2dyb3VuZChzdGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2V0RnJpY3Rpb24oMSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5pbWF0ZWRCYWNrZ3JvdW5kLnByb3RvdHlwZS5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmFwaGljcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByYXRpbyA9IE1hdGgubWluKDUwLCAyNTYgKiBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmZpcnN0T3JkZXJBdmVyYWdlKSAvIDUwO1xuICAgICAgICB2YXIgdmFsdWUgPSByYXRpbyAqIDB4MTEgfCAwO1xuICAgICAgICB2YXIgZ3JheXNjYWxlID0gcGFyc2VJbnQoXCIweFwiICsgKCh2YWx1ZSA8PCAxNikgfCAodmFsdWUgPDwgOCkgfCB2YWx1ZSkudG9TdHJpbmcoMTYpLCAxNik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoZ3JheXNjYWxlKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3UmVjdCgwLCAwLCB0aGlzLnN0YWdlLmdldFdpZHRoKCksIHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmVuZEZpbGwoKTtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlZEJhY2tncm91bmQ7XG59KERpc3BsYXlPYmplY3RfMS5EaXNwbGF5T2JqZWN0KSk7XG5leHBvcnRzLkFuaW1hdGVkQmFja2dyb3VuZCA9IEFuaW1hdGVkQmFja2dyb3VuZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBdWRpb0hhbmRsZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9hdWRpby9BdWRpb0hhbmRsZXJcIik7XG52YXIgRGlzcGxheU9iamVjdF8xID0gcmVxdWlyZShcIi4uL2VuZ2luZS9EaXNwbGF5T2JqZWN0XCIpO1xudmFyIEF2ZXJhZ2VDaXJjbGUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBdmVyYWdlQ2lyY2xlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEF2ZXJhZ2VDaXJjbGUoc3RhZ2UsIGNlbnRlclgsIGNlbnRlclkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICBfdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgX3RoaXMubGluZVdpZHRoID0gMTtcbiAgICAgICAgX3RoaXMuZXllc0Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy50YXJnZXRQb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICBfdGhpcy5sYXN0VXBkYXRlUG9zaXRpb24gPSAwO1xuICAgICAgICBfdGhpcy5iYXNlUmFkaXVzID0gTWF0aC5taW4oc3RhZ2UuZ2V0V2lkdGgoKSwgc3RhZ2UuZ2V0SGVpZ2h0KCkpIC8gMTI7XG4gICAgICAgIF90aGlzLnJhZGl1cyA9IF90aGlzLmJhc2VSYWRpdXM7XG4gICAgICAgIF90aGlzLmZpbHRlciA9IG5ldyBQSVhJLmZpbHRlcnMuQmx1ckZpbHRlcigpO1xuICAgICAgICBfdGhpcy5maWx0ZXJzID0gW190aGlzLmZpbHRlcl07XG4gICAgICAgIF90aGlzLnNldEZyaWN0aW9uKDEpO1xuICAgICAgICBfdGhpcy5wb3NpdGlvbi54ID0gY2VudGVyWDtcbiAgICAgICAgX3RoaXMucG9zaXRpb24ueSA9IGNlbnRlclk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQXZlcmFnZUNpcmNsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xuICAgICAgICB0aGlzLmV5ZXNDbG9zZWQgPSBNYXRoLmZsb29yKDEwICogRGF0ZS5ub3coKSAvIDEwMDApICUgMzAgPT0gMDtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAxICsgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5saW5lYXJBdmVyYWdlICogODtcbiAgICAgICAgdGhpcy5maWx0ZXIuYmx1ciA9IDAuMiArIDggKiBNYXRoLmV4cCgtMTYgKiBBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmxpbmVhckF2ZXJhZ2UpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuYmFzZVJhZGl1cyArIDEwMCAqIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQubGluZWFyQXZlcmFnZTtcbiAgICAgICAgdGhpcy5zZXRGb3JjZShcIm1haW5cIiwge1xuICAgICAgICAgICAgeDogdGhpcy50YXJnZXRQb3NpdGlvbi54IC0gdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogdGhpcy50YXJnZXRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKERhdGUubm93KCkgPiA0MDAgKyB0aGlzLmxhc3RVcGRhdGVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VXBkYXRlUG9zaXRpb24gPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcbiAgICBBdmVyYWdlQ2lyY2xlLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICB2YXIgcmFkaXVzID0gdGhpcy5iYXNlUmFkaXVzICogLjU7XG4gICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzO1xuICAgICAgICB2YXIgeSA9IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cztcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi54ID0gdGhpcy5jZW50ZXJYICsgeDtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbi55ID0gdGhpcy5jZW50ZXJZICsgeTtcbiAgICB9O1xuICAgIEF2ZXJhZ2VDaXJjbGUucHJvdG90eXBlLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB2YXIgd2F2ZSA9IEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuZmlyc3RPcmRlcldhdmVmb3JtO1xuICAgICAgICB2YXIgd2F2ZUF2ZXJhZ2UgPSB3YXZlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2KSB7IHJldHVybiBhY2MgKyB2OyB9LCAwKSAvIHdhdmUubGVuZ3RoO1xuICAgICAgICB2YXIgbWF4QW1wbGl0dWRlID0gMTAwO1xuICAgICAgICB2YXIgcG9pbnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhbmdsZSA9IE1hdGguUEkgLyAyOyBpIDwgd2F2ZS5sZW5ndGg7ICsraSwgYW5nbGUgKz0gTWF0aC5QSSAvIHdhdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgYW1wbGl0dWRlID0gTWF0aC5tYXgoMCwgd2F2ZVtpXSAtIHdhdmVBdmVyYWdlKTtcbiAgICAgICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHZhciB5ID0gTWF0aC5zaW4oYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogLXBvaW50c1tpXS54LCB5OiBwb2ludHNbaV0ueSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweEZGRkZGRiwgMC4yKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4MTExMTExLCAxKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCAweEZGRkZGRik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHZhciBleWVzU2l6ZTtcbiAgICAgICAgaWYgKHRoaXMuZXllc0Nsb3NlZCkge1xuICAgICAgICAgICAgZXllc1NpemUgPSB0aGlzLnJhZGl1cyAqIDAuMDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBleWVzU2l6ZSA9IHRoaXMucmFkaXVzICogMC4xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBleWVzWSA9IC10aGlzLnJhZGl1cyAqIDAuMztcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHhGRkZGRkYpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweEZGRkZGRiwgMSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoLWV5ZXNTaXplICogMC41LCBleWVzWSAtIGV5ZXNTaXplICogMC41LCBleWVzU2l6ZSwgZXllc1NpemUpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KHRoaXMucmFkaXVzICogMC4zIC0gZXllc1NpemUgKiAwLjUsIGV5ZXNZIC0gZXllc1NpemUgKiAwLjUsIGV5ZXNTaXplLCBleWVzU2l6ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQXZlcmFnZUNpcmNsZTtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuQXZlcmFnZUNpcmNsZSA9IEF2ZXJhZ2VDaXJjbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQXVkaW9IYW5kbGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vYXVkaW8vQXVkaW9IYW5kbGVyXCIpO1xudmFyIERpc3BsYXlPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdFwiKTtcbnZhciBOb2RlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm9kZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb2RlKHN0YWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHN0YWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yYWRpdXMgPSAyICsgTWF0aC5yYW5kb20oKSAqIDQ7XG4gICAgICAgIF90aGlzLmNvbG9yID0gMHhGRkZGRkYgKiAoTWF0aC5yYW5kb20oKSAqIC41ICsgLjUpO1xuICAgICAgICBfdGhpcy5zZXRGcmljdGlvbigxKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBOb2RlLnByb3RvdHlwZS5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmFwaGljcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdmcgPSAwLjUgKyBNYXRoLm1pbig4LCA2NCAqIEF1ZGlvSGFuZGxlcl8xLmRlZmF1bHQuYXZlcmFnZSkgLyAxNjtcbiAgICAgICAgdmFyIHZhbHVlID0gYXZnICogMHhGRiB8IDA7XG4gICAgICAgIHZhciBncmF5c2NhbGUgPSBwYXJzZUludChcIjB4XCIgKyAoKHZhbHVlIDw8IDE2KSB8ICh2YWx1ZSA8PCA4KSB8IHZhbHVlKS50b1N0cmluZygxNiksIDE2KTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChBdWRpb0hhbmRsZXJfMS5kZWZhdWx0LmF2ZXJhZ2UgPiAwLjE1ID8gdGhpcy5jb2xvciA6IGdyYXlzY2FsZSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZW5kRmlsbCgpO1xuICAgIH07XG4gICAgTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xuICAgICAgICB2YXIgY29lZiA9IE1hdGgubWF4KDAuMSwgQXVkaW9IYW5kbGVyXzEuZGVmYXVsdC5hdmVyYWdlICogOCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueCAqIChjb2VmIC0gMSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueSAqIChjb2VmIC0gMSk7XG4gICAgICAgIGlmICh0aGlzLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnN0YWdlLmdldFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy54ID4gdGhpcy5zdGFnZS5nZXRXaWR0aCgpKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnN0YWdlLmdldEhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA+IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlO1xufShEaXNwbGF5T2JqZWN0XzEuRGlzcGxheU9iamVjdCkpO1xuZXhwb3J0cy5Ob2RlID0gTm9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIik7XG52YXIgTm9kZV8xID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcbnZhciBOb2RlTGlua2VyXzEgPSByZXF1aXJlKFwiLi9Ob2RlTGlua2VyXCIpO1xudmFyIE5vZGVDb250YWluZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb2RlQ29udGFpbmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vZGVDb250YWluZXIoc3RhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5vZGVzID0gbmV3IERpc3BsYXlPYmplY3RDb250YWluZXJfMS5EaXNwbGF5T2JqZWN0Q29udGFpbmVyKF90aGlzLnN0YWdlKTtcbiAgICAgICAgX3RoaXMuYWRkQ2hpbGQoX3RoaXMubm9kZXMpO1xuICAgICAgICBfdGhpcy5hZGRDaGlsZEF0KG5ldyBOb2RlTGlua2VyXzEuTm9kZUxpbmtlcihfdGhpcy5zdGFnZSwgX3RoaXMubm9kZXMpLCAwKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBOb2RlQ29udGFpbmVyLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgeCA9IDEwOyB4IDwgdGhpcy5zdGFnZS5nZXRXaWR0aCgpOyB4ICs9IDIwMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDEwOyB5IDwgdGhpcy5zdGFnZS5nZXRIZWlnaHQoKTsgeSArPSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vZGUoeCArIDEyICogTWF0aC5yYW5kb20oKSwgeSArIDEyICogTWF0aC5yYW5kb20oKSwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGVDb250YWluZXIucHJvdG90eXBlLmFkZE5vZGUgPSBmdW5jdGlvbiAoeCwgeSwgdngsIHZ5KSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGVfMS5Ob2RlKHRoaXMuc3RhZ2UpO1xuICAgICAgICBub2RlLnBvc2l0aW9uLnNldCh4LCB5KTtcbiAgICAgICAgbm9kZS52ZWxvY2l0eS5zZXQodngsIHZ5KTtcbiAgICAgICAgdGhpcy5ub2Rlcy5hZGRDaGlsZChub2RlKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlQ29udGFpbmVyO1xufShEaXNwbGF5T2JqZWN0Q29udGFpbmVyXzEuRGlzcGxheU9iamVjdENvbnRhaW5lcikpO1xuZXhwb3J0cy5Ob2RlQ29udGFpbmVyID0gTm9kZUNvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEaXNwbGF5T2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIik7XG52YXIgUG9pbnRfMSA9IHJlcXVpcmUoXCIuLi9lbmdpbmUvUG9pbnRcIik7XG52YXIgTm9kZUxpbmtlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vZGVMaW5rZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm9kZUxpbmtlcihzdGFnZSwgbm9kZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgc3RhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRhcmdldCA9IG5vZGVzO1xuICAgICAgICBfdGhpcy5jZW50ZXJQb3NpdGlvbiA9IG5ldyBQSVhJLlBvaW50KF90aGlzLnN0YWdlLmdldFdpZHRoKCkgLyAyLCA2ICogX3RoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkgLyAxMCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTm9kZUxpbmtlci5wcm90b3R5cGUucmVkcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JhcGhpY3MgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4RkZGRkZGLCAwLjIpO1xuICAgICAgICB2YXIgTiA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBQb2ludF8xLlBvaW50LmRpc3RhbmNlKG5vZGUucG9zaXRpb24sIHRoaXMuY2VudGVyUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy5zdGFnZS5nZXRXaWR0aCgpIC8gMTApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY2VudGVyUG9zaXRpb24ueCwgdGhpcy5jZW50ZXJQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9kZUxpbmtlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgZGVsdGEpO1xuICAgICAgICB2YXIgTiA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKG5vZGUucG9zaXRpb24ueSAtIHRoaXMuY2VudGVyUG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi54IC0gdGhpcy5jZW50ZXJQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIHZhciBkaXN0ID0gUG9pbnRfMS5Qb2ludC5kaXN0YW5jZShub2RlLnBvc2l0aW9uLCB0aGlzLmNlbnRlclBvc2l0aW9uKTtcbiAgICAgICAgICAgIHZhciBmeCA9IC1NYXRoLmNvcyhhbmdsZSkgKiAxMDAwMDAgLyBkaXN0O1xuICAgICAgICAgICAgdmFyIGZ5ID0gLU1hdGguc2luKGFuZ2xlKSAqIDEwMDAwMCAvIGRpc3Q7XG4gICAgICAgICAgICBub2RlLnNldEZvcmNlKFwidG9jZW50ZXJcIiwgeyB4OiBmeCwgeTogZnkgfSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrID0gaSArIDE7IGsgPCBOOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJOb2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5ba107XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RfMSA9IFBvaW50XzEuUG9pbnQuZGlzdGFuY2Uobm9kZS5wb3NpdGlvbiwgb3RoZXJOb2RlLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdF8xID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xlYXJGb3JjZShcIm5vZGVfXCIgKyBvdGhlck5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICBvdGhlck5vZGUuY2xlYXJGb3JjZShcIm5vZGVfXCIgKyBub2RlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhID0gTWF0aC5hdGFuMihub2RlLnBvc2l0aW9uLnkgLSBvdGhlck5vZGUucG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi54IC0gb3RoZXJOb2RlLnBvc2l0aW9uLngpO1xuICAgICAgICAgICAgICAgIHZhciBmeF8xID0gMCwgZnlfMSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RfMSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ4XzEgPSBNYXRoLmNvcyhhKSAqIDEwMDAwIC8gZGlzdF8xO1xuICAgICAgICAgICAgICAgICAgICBmeV8xID0gTWF0aC5zaW4oYSkgKiAxMDAwMCAvIGRpc3RfMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRGb3JjZShcIm5vZGVfXCIgKyBvdGhlck5vZGUuaWQsIG5ldyBQSVhJLlBvaW50KC1meF8xLCAtZnlfMSkpO1xuICAgICAgICAgICAgICAgIG90aGVyTm9kZS5zZXRGb3JjZShcIm5vZGVfXCIgKyBub2RlLmlkLCBuZXcgUElYSS5Qb2ludChmeF8xLCBmeV8xKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9O1xuICAgIHJldHVybiBOb2RlTGlua2VyO1xufShEaXNwbGF5T2JqZWN0XzEuRGlzcGxheU9iamVjdCkpO1xuZXhwb3J0cy5Ob2RlTGlua2VyID0gTm9kZUxpbmtlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3M7XG52YXIgRGlzcGxheU9iamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BsYXlPYmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGxheU9iamVjdChzdGFnZSwgYXBwZW5kR3JhcGhpY3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgYXBwZW5kR3JhcGhpY3MgPSB0eXBlb2YgKGFwcGVuZEdyYXBoaWNzKSA9PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IGFwcGVuZEdyYXBoaWNzO1xuICAgICAgICBfdGhpcy5pZCA9IERpc3BsYXlPYmplY3QuSUQrKztcbiAgICAgICAgX3RoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgICAgICAgX3RoaXMuZ3JhcGhpY3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIF90aGlzLnZlbG9jaXR5ID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIF90aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICBfdGhpcy5mcmljdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICBfdGhpcy5mb3JjZXMgPSB7fTtcbiAgICAgICAgX3RoaXMubWFzcyA9IDE7XG4gICAgICAgIGlmIChhcHBlbmRHcmFwaGljcykge1xuICAgICAgICAgICAgX3RoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgICAgIF90aGlzLmFkZENoaWxkKF90aGlzLmdyYXBoaWNzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLnNldEZvcmNlID0gZnVuY3Rpb24gKG5hbWUsIHZlY3Rvcikge1xuICAgICAgICB0aGlzLmZvcmNlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIHg6IHZlY3Rvci54LFxuICAgICAgICAgICAgeTogdmVjdG9yLnksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5jbGVhckZvcmNlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZm9yY2VzW25hbWVdO1xuICAgIH07XG4gICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUuc2V0RnJpY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5mcmljdGlvbiA9IG5ldyBQSVhJLlBvaW50KHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uLnNldCh2YWx1ZS54LCB2YWx1ZS55KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9yY2UoXCJmcmljdGlvblwiLCBuZXcgUElYSS5Qb2ludCgtdGhpcy5mcmljdGlvbi54ICogdGhpcy52ZWxvY2l0eS54LCAtdGhpcy5mcmljdGlvbi55ICogdGhpcy52ZWxvY2l0eS55KSk7XG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnNldCgwLCAwKTtcbiAgICAgICAgZm9yICh2YXIgZm9yY2VOYW1lIGluIHRoaXMuZm9yY2VzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi54ICs9IHRoaXMuZm9yY2VzW2ZvcmNlTmFtZV0ueDtcbiAgICAgICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnkgKz0gdGhpcy5mb3JjZXNbZm9yY2VOYW1lXS55O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uLnggLz0gdGhpcy5tYXNzO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi55IC89IHRoaXMubWFzcztcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IGRlbHRhICogdGhpcy5hY2NlbGVyYXRpb24ueDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGRlbHRhICogdGhpcy5hY2NlbGVyYXRpb24ueTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IGRlbHRhICogdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gZGVsdGEgKiB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgfTtcbiAgICBEaXNwbGF5T2JqZWN0LklEID0gMTtcbiAgICByZXR1cm4gRGlzcGxheU9iamVjdDtcbn0oUElYSS5Db250YWluZXIpKTtcbmV4cG9ydHMuRGlzcGxheU9iamVjdCA9IERpc3BsYXlPYmplY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRGlzcGxheU9iamVjdF8xID0gcmVxdWlyZShcIi4vRGlzcGxheU9iamVjdFwiKTtcbnZhciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGlzcGxheU9iamVjdENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEaXNwbGF5T2JqZWN0Q29udGFpbmVyKHN0YWdlKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzdGFnZSwgZmFsc2UpIHx8IHRoaXM7XG4gICAgfVxuICAgIERpc3BsYXlPYmplY3RDb250YWluZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIGRlbHRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGo7ICsraSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjaGlsZC51cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcGxheU9iamVjdENvbnRhaW5lcjtcbn0oRGlzcGxheU9iamVjdF8xLkRpc3BsYXlPYmplY3QpKTtcbmV4cG9ydHMuRGlzcGxheU9iamVjdENvbnRhaW5lciA9IERpc3BsYXlPYmplY3RDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQb2ludCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9pbnQoKSB7XG4gICAgfVxuICAgIFBvaW50LmRpc3RhbmNlID0gZnVuY3Rpb24gKHBvaW50MSwgcG9pbnQyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocG9pbnQxLnggLSBwb2ludDIueCwgMikgK1xuICAgICAgICAgICAgTWF0aC5wb3cocG9pbnQxLnkgLSBwb2ludDIueSwgMikpO1xuICAgIH07XG4gICAgcmV0dXJuIFBvaW50O1xufSgpKTtcbmV4cG9ydHMuUG9pbnQgPSBQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBbmltYXRlZEJhY2tncm91bmRfMSA9IHJlcXVpcmUoXCIuLi9hdWRpby9BbmltYXRlZEJhY2tncm91bmRcIik7XG52YXIgQXZlcmFnZUNpcmNsZV8xID0gcmVxdWlyZShcIi4uL2F1ZGlvL0F2ZXJhZ2VDaXJjbGVcIik7XG52YXIgTm9kZUNvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4uL2F1ZGlvL05vZGVDb250YWluZXJcIik7XG52YXIgRGlzcGxheU9iamVjdENvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4vRGlzcGxheU9iamVjdENvbnRhaW5lclwiKTtcbnZhciBTdGFnZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN0YWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0YWdlKGNhbnZhc0lEKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG51bGwpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNhbnZhc0NvbnRhaW5lcklEID0gY2FudmFzSUQ7XG4gICAgICAgIF90aGlzLmNhbnZhc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lEKTtcbiAgICAgICAgX3RoaXMubGFzdERlbHRhID0gMDtcbiAgICAgICAgX3RoaXMucmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgX3RoaXMuY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKF90aGlzLnJlbmRlcmVyLnZpZXcpO1xuICAgICAgICBfdGhpcy5yZW5kZXJlci5yZW5kZXIoX3RoaXMpO1xuICAgICAgICBfdGhpcy5tb3VzZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgUElYSS5Qb2ludCgwLCAwKSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLm1vdXNlLnBvc2l0aW9uLnNldChlLmRhdGEuZ2xvYmFsLngsIGUuZGF0YS5nbG9iYWwueSk7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN0YWdlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub2RlQ29udGFpbmVyID0gbmV3IE5vZGVDb250YWluZXJfMS5Ob2RlQ29udGFpbmVyKHRoaXMpO1xuICAgICAgICBub2RlQ29udGFpbmVyLnBvcHVsYXRlKCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQobm9kZUNvbnRhaW5lcik7XG4gICAgICAgIHZhciBhdmdDaXJjbGUgPSBuZXcgQXZlcmFnZUNpcmNsZV8xLkF2ZXJhZ2VDaXJjbGUodGhpcywgdGhpcy5nZXRXaWR0aCgpIC8gMiwgNiAqIHRoaXMuZ2V0SGVpZ2h0KCkgLyAxMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYXZnQ2lyY2xlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZEF0KG5ldyBBbmltYXRlZEJhY2tncm91bmRfMS5BbmltYXRlZEJhY2tncm91bmQodGhpcyksIDApO1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgfTtcbiAgICBTdGFnZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgdGhpcy5sYXN0RGVsdGEgPSB0IC0gdGhpcy5sYXN0VXBkYXRlRGVsdGE7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gdDtcbiAgICAgICAgaWYgKHRoaXMubGFzdERlbHRhID4gMSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RGVsdGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgdGhpcy5sYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgU3RhZ2UucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgcmV0dXJuIFN0YWdlO1xufShEaXNwbGF5T2JqZWN0Q29udGFpbmVyXzEuRGlzcGxheU9iamVjdENvbnRhaW5lcikpO1xuZXhwb3J0cy5TdGFnZSA9IFN0YWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEF1ZGlvSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXVkaW9IYW5kbGVyKCkge1xuICAgIH1cbiAgICBBdWRpb0hhbmRsZXIuaW5pdCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IChBdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICAgICAgdGhpcy5nYWluID0gQXVkaW9IYW5kbGVyLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnNvbmcgPSBuZXcgQXVkaW8oc3JjKTtcbiAgICAgICAgdGhpcy5zb25nLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNvbmdTb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKHRoaXMuc29uZyk7XG4gICAgICAgIHNvbmdTb3VyY2UuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgICAgICB0aGlzLmFuYWx5c2VyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgIHRoaXMuZ2Fpbi5jb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSBBdWRpb0hhbmRsZXIuRkZUX1NJWkU7XG4gICAgICAgIHRoaXMud2F2ZWZvcm0gPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB0aGlzLmZpcnN0T3JkZXJXYXZlZm9ybSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0RmxvYXRUaW1lRG9tYWluRGF0YSh0aGlzLndhdmVmb3JtKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVTdGF0cygpOyB9LCBBdWRpb0hhbmRsZXIuU1RBVFNfVVBEQVRFX0lOVEVSVkFMKTtcbiAgICB9O1xuICAgIEF1ZGlvSGFuZGxlci51cGRhdGVTdGF0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRlbHRhID0gKERhdGUubm93KCkgLSB0aGlzLmxhc3RVcGRhdGVEZWx0YSkgLyAxMDAwO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmdldEZsb2F0VGltZURvbWFpbkRhdGEodGhpcy53YXZlZm9ybSk7XG4gICAgICAgIHRoaXMuYXZlcmFnZSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyKSB7IHJldHVybiBwcmV2ICsgTWF0aC5hYnMoY3Vycik7IH0sIDApIC8gdGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICAgICAgdGhpcy5taW5pbXVtID0gdGhpcy53YXZlZm9ybS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE1hdGgubWluKGEsIGIpOyB9LCB0aGlzLndhdmVmb3JtWzBdKTtcbiAgICAgICAgdGhpcy5tYXhpbXVtID0gdGhpcy53YXZlZm9ybS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE1hdGgubWF4KGEsIGIpOyB9LCB0aGlzLndhdmVmb3JtWzBdKTtcbiAgICAgICAgdGhpcy5maXJzdE9yZGVyQXZlcmFnZSArPSAodGhpcy5hdmVyYWdlIC0gdGhpcy5maXJzdE9yZGVyQXZlcmFnZSkgKiAwLjUgKiBkZWx0YTtcbiAgICAgICAgdGhpcy5saW5lYXJBdmVyYWdlICs9IGRlbHRhICogKHRoaXMuYXZlcmFnZSA+IHRoaXMubGluZWFyQXZlcmFnZSA/IDEgOiAtMSk7XG4gICAgICAgIHRoaXMud2F2ZWZvcm0uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiBfdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm1baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSArPSAodmFsdWUgLSBfdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm1baW5kZXhdKSAqIDEuMSAqIGRlbHRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSBEYXRlLm5vdygpO1xuICAgIH07XG4gICAgQXVkaW9IYW5kbGVyLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0LCB0aGlzLnNvbmcucGxheSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdWRpb0hhbmRsZXIuRkZUX1NJWkUgPSAyNTY7XG4gICAgQXVkaW9IYW5kbGVyLlNUQVRTX1VQREFURV9JTlRFUlZBTCA9IDEwMDAgLyA0MDtcbiAgICBBdWRpb0hhbmRsZXIuYXZlcmFnZSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLmZpcnN0T3JkZXJBdmVyYWdlID0gMDtcbiAgICBBdWRpb0hhbmRsZXIubGluZWFyQXZlcmFnZSA9IDA7XG4gICAgQXVkaW9IYW5kbGVyLm1pbmltdW0gPSAwO1xuICAgIEF1ZGlvSGFuZGxlci5tYXhpbXVtID0gMDtcbiAgICBBdWRpb0hhbmRsZXIubGFzdFVwZGF0ZURlbHRhID0gMDtcbiAgICByZXR1cm4gQXVkaW9IYW5kbGVyO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1ZGlvSGFuZGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2FuaW1hdGlvbi9lbmdpbmUvU3RhZ2VcIikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==