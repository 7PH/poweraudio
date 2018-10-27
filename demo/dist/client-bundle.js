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
                case 0:
                    setInterval(function () {
                        var fps = (1 / stage.lastDelta);
                        var el = document.getElementById('fps');
                        if (el === null)
                            return;
                        el.innerHTML = Math.floor(fps).toString();
                    }, 1000);
                    return [4, restartSong()];
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
                    AudioHandler_1.default.init("/music");
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
    function AverageCircle(stage) {
        var _this = _super.call(this, stage) || this;
        _this.lineWidth = 1;
        _this.eyesClosed = false;
        _this.baseRadius = Math.min(stage.getWidth(), stage.getHeight()) / 12;
        _this.radius = _this.baseRadius;
        _this.filter = new PIXI.filters.BlurFilter();
        _this.filters = [_this.filter];
        return _this;
    }
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
        this.eyesClosed = Math.floor(10 * Date.now() / 1000) % 30 == 0;
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
    AverageCircle.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        this.lineWidth = 1 + AudioHandler_1.default.linearAverage * 8;
        this.filter.blur = 0.2 + 8 * Math.exp(-16 * AudioHandler_1.default.linearAverage);
        this.radius = this.baseRadius + 100 * AudioHandler_1.default.linearAverage;
        this.redraw();
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
        var avgCircle = new AverageCircle_1.AverageCircle(this);
        avgCircle.position.x = this.getWidth() / 2;
        avgCircle.position.y = 6 * this.getHeight() / 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BbmltYXRlZEJhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9BdmVyYWdlQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vYXVkaW8vTm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2F1ZGlvL05vZGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9hdWRpby9Ob2RlTGlua2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24vZW5naW5lL0Rpc3BsYXlPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi9lbmdpbmUvRGlzcGxheU9iamVjdENvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uL2VuZ2luZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXVkaW8vQXVkaW9IYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNB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WUFBWSxHQUFXLEdBQUcsQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO1FBQzFDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFHLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hHLElBQU0sU0FBUyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUM3RCxJQUFNLENBQUMsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDN0UsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEtBQUUsQ0FBQyxLQUFDLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRyxDQUFDLEVBQUU7WUFDN0MsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUd4QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBSTVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVB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QUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDOztnQkFFdkMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDakcsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBTVksaUJBQUksR0FBakI7Ozs7NEJBRUksV0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTs7d0JBQXRCLFNBQXNCLENBQUM7d0JBRXZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUV0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7O0tBQ3RCO0lBM0hlLHFCQUFRLEdBQVcsR0FBRyxDQUFDO0lBRXZCLGtDQUFxQixHQUFXLElBQUksR0FBRyxFQUFFLENBQUM7SUF1Qm5ELG9CQUFPLEdBQVcsQ0FBQyxDQUFDO0lBS3BCLDhCQUFpQixHQUFXLENBQUMsQ0FBQztJQUs5QiwwQkFBYSxHQUFXLENBQUMsQ0FBQztJQUsxQixvQkFBTyxHQUFXLENBQUMsQ0FBQztJQUtwQixvQkFBTyxHQUFXLENBQUMsQ0FBQztJQU9aLDRCQUFlLEdBQVcsQ0FBQyxDQUFDO0lBd0UvQyxtQkFBQztDQUFBO2tCQTlIb0IsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmpDLGlHQUF3QyIsImZpbGUiOiJjbGllbnQtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZW1vL2NsaWVudC50c1wiKTtcbiIsImltcG9ydCB7U3RhZ2V9IGZyb20gXCIuLi9zcmNcIjtcbmltcG9ydCBBdWRpb0hhbmRsZXIgZnJvbSBcIi4uL3NyYy9hdWRpby9BdWRpb0hhbmRsZXJcIjtcblxubGV0IHN0YWdlOiBTdGFnZTtcblxuLyoqXG4gKiBUbyBydW4gb25seSBvbmNlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICAvLyBmcHMgY291bnRlclxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgZnBzID0gKDEgLyBzdGFnZS5sYXN0RGVsdGEpO1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnBzJyk7XG4gICAgICAgIGlmIChlbCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihmcHMpLnRvU3RyaW5nKCk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBzdGFydCBzb25nXG4gICAgYXdhaXQgcmVzdGFydFNvbmcoKTtcblxuICAgIC8vIGFuaW1hdGlvblxuICAgIHN0YWdlID0gbmV3IFN0YWdlKCdwb3dlcmF1ZGlvJyk7XG4gICAgc3RhZ2Uuc3RhcnQoKTtcbn1cblxuLyoqXG4gKlxuICovXG5hc3luYyBmdW5jdGlvbiByZXN0YXJ0U29uZygpIHtcblxuICAgIGlmICh0eXBlb2YgQXVkaW9IYW5kbGVyLnNvbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEF1ZGlvSGFuZGxlci5zb25nLnBhdXNlKCk7XG4gICAgICAgIEF1ZGlvSGFuZGxlci5zb25nLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG5cbiAgICBBdWRpb0hhbmRsZXIuaW5pdChcIi9tdXNpY1wiKTtcbiAgICBhd2FpdCBBdWRpb0hhbmRsZXIucGxheSgpO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4gaW5pdCgpO1xuIiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0fSBmcm9tIFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBBdWRpb0hhbmRsZXIgZnJvbSBcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiO1xuaW1wb3J0IHtTdGFnZX0gZnJvbSBcIi4uL2VuZ2luZS9TdGFnZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlZEJhY2tncm91bmQgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yIChzdGFnZTogU3RhZ2UpIHtcbiAgICAgICAgc3VwZXIoc3RhZ2UpO1xuXG4gICAgICAgIHRoaXMuc2V0RnJpY3Rpb24oMSk7XG4gICAgfVxuXG4gICAgcmVkcmF3KCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmFwaGljcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gY2hvc2UgY29sb3JcbiAgICAgICAgbGV0IHJhdGlvOiBudW1iZXIgPSBNYXRoLm1pbig1MCwgMjU2ICogQXVkaW9IYW5kbGVyLmZpcnN0T3JkZXJBdmVyYWdlKSAvIDUwO1xuICAgICAgICBsZXQgdmFsdWU6IG51bWJlciA9IHJhdGlvICogMHgxMSB8IDA7XG4gICAgICAgIGxldCBncmF5c2NhbGU6IG51bWJlciA9IHBhcnNlSW50KCcweCcgKyAoKHZhbHVlIDw8IDE2KSB8ICh2YWx1ZSA8PCA4KSB8IHZhbHVlKS50b1N0cmluZygxNiksIDE2KTtcblxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKGdyYXlzY2FsZSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgdGhpcy5zdGFnZS5nZXRXaWR0aCgpLCB0aGlzLnN0YWdlLmdldEhlaWdodCgpKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0fSBmcm9tIFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBBdWRpb0hhbmRsZXIgZnJvbSBcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiO1xuaW1wb3J0IHtTdGFnZX0gZnJvbSBcIi4uL2VuZ2luZS9TdGFnZVwiO1xuaW1wb3J0IEJsdXJGaWx0ZXIgPSBQSVhJLmZpbHRlcnMuQmx1ckZpbHRlcjtcblxuZXhwb3J0IGNsYXNzIEF2ZXJhZ2VDaXJjbGUgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0IHtcblxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDE7XG5cbiAgICBwdWJsaWMgYmFzZVJhZGl1czogbnVtYmVyO1xuXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuXG4gICAgcHVibGljIGV5ZXNDbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyByZWFkb25seSBmaWx0ZXI6IEJsdXJGaWx0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGFnZTogU3RhZ2UpIHtcbiAgICAgICAgc3VwZXIoc3RhZ2UpO1xuXG4gICAgICAgIHRoaXMuYmFzZVJhZGl1cyA9IE1hdGgubWluKHN0YWdlLmdldFdpZHRoKCksIHN0YWdlLmdldEhlaWdodCgpKSAvIDEyO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuYmFzZVJhZGl1cztcblxuICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBQSVhJLmZpbHRlcnMuQmx1ckZpbHRlcigpO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5maWx0ZXJdO1xuICAgIH1cblxuICAgIHJlZHJhdygpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JhcGhpY3MgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcblxuICAgICAgICAvLyBkcmF3IHdhdmVmb3JtXG4gICAgICAgIGNvbnN0IHdhdmU6IEZsb2F0MzJBcnJheSA9IEF1ZGlvSGFuZGxlci5maXJzdE9yZGVyV2F2ZWZvcm07XG4gICAgICAgIGNvbnN0IHdhdmVBdmVyYWdlOiBudW1iZXIgPSB3YXZlLnJlZHVjZSgoYWNjLCB2KSA9PiBhY2MgKyB2LCAwKSAvIHdhdmUubGVuZ3RoO1xuICAgICAgICBjb25zdCBtYXhBbXBsaXR1ZGU6IG51bWJlciA9IDEwMDsgLy8gaW4gcGl4ZWxzXG4gICAgICAgIGxldCBwb2ludHM6IHt4OiBudW1iZXIsIHk6IG51bWJlcn1bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwLCBhbmdsZTogbnVtYmVyID0gTWF0aC5QSSAvIDI7IGkgPCB3YXZlLmxlbmd0aDsgKysgaSwgYW5nbGUgKz0gTWF0aC5QSSAvIHdhdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBhbXBsaXR1ZGU6IG51bWJlciA9IE1hdGgubWF4KDAsIHdhdmVbaV0gLSB3YXZlQXZlcmFnZSk7XG4gICAgICAgICAgICBjb25zdCB4OiBudW1iZXIgPSBNYXRoLmNvcyhhbmdsZSkgKiAodGhpcy5yYWRpdXMgKyBtYXhBbXBsaXR1ZGUgKiBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgY29uc3QgeTogbnVtYmVyID0gTWF0aC5zaW4oYW5nbGUpICogKHRoaXMucmFkaXVzICsgbWF4QW1wbGl0dWRlICogYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHt4LCB5fSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG46IG51bWJlciA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IG4gLSAxOyBpID49IDA7IC0tIGkpXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7eDogLSBwb2ludHNbaV0ueCwgeTogcG9pbnRzW2ldLnl9KVxuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbCgweEZGRkZGRiwgMC4yKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7ICsrIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNrXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuYmVnaW5GaWxsKDB4MTExMTExLCAxKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUodGhpcy5saW5lV2lkdGgsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XG5cbiAgICAgICAgLy8gY2lyY2xlXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMubGluZVdpZHRoLCAweEZGRkZGRik7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLnJhZGl1cyk7XG5cbiAgICAgICAgLy8gZXllc1xuICAgICAgICAvLyAxIGJsaW5rIG9mIDEwMG1zIGV2ZXJ5IDNzXG4gICAgICAgIHRoaXMuZXllc0Nsb3NlZCA9IE1hdGguZmxvb3IoMTAgKiBEYXRlLm5vdygpIC8gMTAwMCkgJSAzMCA9PSAwO1xuICAgICAgICBsZXQgZXllc1NpemU6IG51bWJlcjtcbiAgICAgICAgaWYgKHRoaXMuZXllc0Nsb3NlZCkge1xuICAgICAgICAgICAgZXllc1NpemUgPSB0aGlzLnJhZGl1cyAqIDAuMDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBleWVzIG9wZW5cbiAgICAgICAgICAgIGV5ZXNTaXplID0gdGhpcy5yYWRpdXMgKiAwLjE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV5ZXNZOiBudW1iZXIgPSAtdGhpcy5yYWRpdXMgKiAwLjM7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4RkZGRkZGKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5iZWdpbkZpbGwoMHhGRkZGRkYsIDEpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdSZWN0KC0gZXllc1NpemUgKiAwLjUsIGV5ZXNZIC0gZXllc1NpemUgKiAwLjUsIGV5ZXNTaXplLCBleWVzU2l6ZSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd1JlY3QodGhpcy5yYWRpdXMgKiAwLjMgLSBleWVzU2l6ZSAqIDAuNSwgZXllc1kgLSBleWVzU2l6ZSAqIDAuNSwgZXllc1NpemUsIGV5ZXNTaXplKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcikge1xuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xuXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gMSArIEF1ZGlvSGFuZGxlci5saW5lYXJBdmVyYWdlICogODtcbiAgICAgICAgdGhpcy5maWx0ZXIuYmx1ciA9IDAuMiArIDggKiBNYXRoLmV4cCgtIDE2ICogQXVkaW9IYW5kbGVyLmxpbmVhckF2ZXJhZ2UpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuYmFzZVJhZGl1cyArIDEwMCAqIEF1ZGlvSGFuZGxlci5saW5lYXJBdmVyYWdlO1xuXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0fSBmcm9tIFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RcIjtcbmltcG9ydCBBdWRpb0hhbmRsZXIgZnJvbSBcIi4uLy4uL2F1ZGlvL0F1ZGlvSGFuZGxlclwiO1xuaW1wb3J0IHtTdGFnZX0gZnJvbSBcIi4uL2VuZ2luZS9TdGFnZVwiO1xuaW1wb3J0IEJsdXJGaWx0ZXIgPSBQSVhJLmZpbHRlcnMuQmx1ckZpbHRlcjtcblxuXG5leHBvcnQgY2xhc3MgTm9kZSBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuXG4gICAgcHVibGljIGNvbG9yOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAyICsgTWF0aC5yYW5kb20oKSAqIDQ7XG5cbiAgICBjb25zdHJ1Y3RvciAoc3RhZ2U6IFN0YWdlKSB7XG4gICAgICAgIHN1cGVyKHN0YWdlKTtcblxuICAgICAgICB0aGlzLmNvbG9yID0gMHhGRkZGRkYgKiAoTWF0aC5yYW5kb20oKSouNSArIC41KTtcbiAgICAgICAgdGhpcy5zZXRGcmljdGlvbigxKTtcbiAgICB9XG5cbiAgICByZWRyYXcoKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyYXBoaWNzID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBjaG9zZSBjb2xvclxuICAgICAgICBsZXQgYXZnOiBudW1iZXIgPSAwLjUgKyBNYXRoLm1pbig4LCA2NCAqIEF1ZGlvSGFuZGxlci5hdmVyYWdlKSAvIDE2O1xuICAgICAgICBsZXQgdmFsdWU6IG51bWJlciA9IGF2ZyAqIDB4RkYgfCAwO1xuICAgICAgICBsZXQgZ3JheXNjYWxlOiBudW1iZXIgPSBwYXJzZUludCgnMHgnICsgKCh2YWx1ZSA8PCAxNikgfCAodmFsdWUgPDwgOCkgfCB2YWx1ZSkudG9TdHJpbmcoMTYpLCAxNik7XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luRmlsbChBdWRpb0hhbmRsZXIuYXZlcmFnZSA+IDAuMTUgPyB0aGlzLmNvbG9yIDogZ3JheXNjYWxlKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5lbmRGaWxsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcblxuICAgICAgICAvLyBnZXQgY29lZiBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgbXVzaWMgYW1wbGl0dWRlXG4gICAgICAgIGNvbnN0IGNvZWY6IG51bWJlciA9IE1hdGgubWF4KDAuMSwgQXVkaW9IYW5kbGVyLmF2ZXJhZ2UgKiA4KTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IGRlbHRhICogdGhpcy52ZWxvY2l0eS54ICogKGNvZWYgLSAxKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGRlbHRhICogdGhpcy52ZWxvY2l0eS55ICogKGNvZWYgLSAxKTtcblxuICAgICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gdGhpcy5zdGFnZS5nZXRXaWR0aCgpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLnggPiB0aGlzLnN0YWdlLmdldFdpZHRoKCkpIHRoaXMueCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMueSA+IHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkpIHRoaXMueSA9IDA7XG5cbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBmcm9tIFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIjtcbmltcG9ydCB7U3RhZ2V9IGZyb20gXCIuLi9lbmdpbmUvU3RhZ2VcIjtcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IHtOb2RlTGlua2VyfSBmcm9tIFwiLi9Ob2RlTGlua2VyXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVDb250YWluZXIgZXh0ZW5kcyBEaXNwbGF5T2JqZWN0Q29udGFpbmVyIHtcblxuICAgIHB1YmxpYyBub2RlczogRGlzcGxheU9iamVjdENvbnRhaW5lcjtcblxuICAgIGNvbnN0cnVjdG9yIChzdGFnZTogU3RhZ2UpIHtcbiAgICAgICAgc3VwZXIoc3RhZ2UpO1xuXG4gICAgICAgIHRoaXMubm9kZXMgPSBuZXcgRGlzcGxheU9iamVjdENvbnRhaW5lcih0aGlzLnN0YWdlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm5vZGVzKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZEF0KG5ldyBOb2RlTGlua2VyKHRoaXMuc3RhZ2UsIHRoaXMubm9kZXMpLCAwKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHBvcHVsYXRlKCkge1xuICAgICAgICBmb3IgKGxldCB4ID0gMTA7IHggPCB0aGlzLnN0YWdlLmdldFdpZHRoKCk7IHggKz0gMjAwKVxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDEwOyB5IDwgdGhpcy5zdGFnZS5nZXRIZWlnaHQoKTsgeSArPSAyMDApXG4gICAgICAgICAgICAgICAgdGhpcy5hZGROb2RlKHggKyAxMiAqIE1hdGgucmFuZG9tKCksIHkgKyAxMiAqIE1hdGgucmFuZG9tKCksIDAsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHhcbiAgICAgKiBAcGFyYW0geVxuICAgICAqIEBwYXJhbSB2eFxuICAgICAqIEBwYXJhbSB2eVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGROb2RlKHg6IG51bWJlciwgeTogbnVtYmVyLCB2eDogbnVtYmVyLCB2eTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh0aGlzLnN0YWdlKTtcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5zZXQoeCwgeSk7XG4gICAgICAgIG5vZGUudmVsb2NpdHkuc2V0KHZ4LCB2eSk7XG4gICAgICAgIHRoaXMubm9kZXMuYWRkQ2hpbGQobm9kZSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge0Rpc3BsYXlPYmplY3R9IGZyb20gXCIuLi9lbmdpbmUvRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2VuZ2luZS9Qb2ludFwiO1xuaW1wb3J0IHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBmcm9tIFwiLi4vZW5naW5lL0Rpc3BsYXlPYmplY3RDb250YWluZXJcIjtcbmltcG9ydCB7U3RhZ2V9IGZyb20gXCIuLi9lbmdpbmUvU3RhZ2VcIjtcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBOb2RlTGlua2VyIGV4dGVuZHMgRGlzcGxheU9iamVjdCB7XG5cbiAgICBwcml2YXRlIHRhcmdldDogRGlzcGxheU9iamVjdENvbnRhaW5lcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2VudGVyUG9zaXRpb246IFBJWEkuUG9pbnQ7XG5cbiAgICBjb25zdHJ1Y3RvciAoc3RhZ2U6IFN0YWdlLCBub2RlczogRGlzcGxheU9iamVjdENvbnRhaW5lcikge1xuICAgICAgICBzdXBlcihzdGFnZSk7XG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBub2RlcztcblxuICAgICAgICB0aGlzLmNlbnRlclBvc2l0aW9uID0gbmV3IFBJWEkuUG9pbnQoXG4gICAgICAgICAgICB0aGlzLnN0YWdlLmdldFdpZHRoKCkgLyAyLFxuICAgICAgICAgICAgNiAqIHRoaXMuc3RhZ2UuZ2V0SGVpZ2h0KCkgLyAxMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVkcmF3KCkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmFwaGljcyA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweEZGRkZGRiwgMC4yKTtcblxuICAgICAgICBjb25zdCBOOiBudW1iZXIgPSB0aGlzLnRhcmdldC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKysgaSkge1xuXG4gICAgICAgICAgICBjb25zdCBub2RlOiBOb2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5baV0gYXMgTm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlOiBudW1iZXIgPSBQb2ludC5kaXN0YW5jZShub2RlLnBvc2l0aW9uLCB0aGlzLmNlbnRlclBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRoaXMuc3RhZ2UuZ2V0V2lkdGgoKSAvIDEwKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBub2RlIGlzIGNsb3NlIHRvIHRoZSBjZW50ZXJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHRoaXMuY2VudGVyUG9zaXRpb24ueCwgdGhpcy5jZW50ZXJQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE8obl4yKVxuICAgICAqIEBUT0RPIHRoaXMgY2FuIGJlIG9wdGltaXplZCBidXQgaXQgZG9lcyBzZWVtIHRvIHJ1biBjb3JyZWN0bHkgb24gbW9zdCBkZXZpY2VzXG4gICAgICogQHBhcmFtIGRlbHRhXG4gICAgICovXG4gICAgdXBkYXRlIChkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XG5cbiAgICAgICAgY29uc3QgTjogbnVtYmVyID0gdGhpcy50YXJnZXQuY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIC8vIGZvcmVhY2ggbm9kZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuW2ldIGFzIE5vZGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlOiBudW1iZXIgPSBNYXRoLmF0YW4yKG5vZGUucG9zaXRpb24ueSAtIHRoaXMuY2VudGVyUG9zaXRpb24ueSwgbm9kZS5wb3NpdGlvbi54IC0gdGhpcy5jZW50ZXJQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBQb2ludC5kaXN0YW5jZShub2RlLnBvc2l0aW9uLCB0aGlzLmNlbnRlclBvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZ4OiBudW1iZXIgPSAtIE1hdGguY29zKGFuZ2xlKSAqIDEwMDAwMCAvIGRpc3Q7XG4gICAgICAgICAgICBjb25zdCBmeTogbnVtYmVyID0gLSBNYXRoLnNpbihhbmdsZSkgKiAxMDAwMDAgLyBkaXN0O1xuICAgICAgICAgICAgbm9kZS5zZXRGb3JjZSgndG9jZW50ZXInLCB7eDogZngsIHk6IGZ5fSk7XG5cbiAgICAgICAgICAgIC8vIGZvcmVhY2ggb3RoZXIgbm9kZVxuICAgICAgICAgICAgZm9yIChsZXQgayA9IGkgKyAxOyBrIDwgTjsgaysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJOb2RlOiBOb2RlID0gdGhpcy50YXJnZXQuY2hpbGRyZW5ba10gYXMgTm9kZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBQb2ludC5kaXN0YW5jZShcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlLnBvc2l0aW9uXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xlYXJGb3JjZSgnbm9kZV8nICsgb3RoZXJOb2RlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJOb2RlLmNsZWFyRm9yY2UoJ25vZGVfJyArIG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhOiBudW1iZXIgPSBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uLnkgLSBvdGhlck5vZGUucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbi54IC0gb3RoZXJOb2RlLnBvc2l0aW9uLnhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCBmeCA9IDAsIGZ5ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ4ID0gTWF0aC5jb3MoYSkgKiAxMDAwMCAvIGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGZ5ID0gTWF0aC5zaW4oYSkgKiAxMDAwMCAvIGRpc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRGb3JjZSgnbm9kZV8nICsgb3RoZXJOb2RlLmlkLCBuZXcgUElYSS5Qb2ludCgtIGZ4LCAtIGZ5KSk7XG4gICAgICAgICAgICAgICAgb3RoZXJOb2RlLnNldEZvcmNlKCdub2RlXycgKyBub2RlLmlkLCBuZXcgUElYSS5Qb2ludChmeCwgZnkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdyYXBoaWNzID0gUElYSS5HcmFwaGljcztcbmltcG9ydCB7U3RhZ2V9IGZyb20gXCIuL1N0YWdlXCI7XG5cblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3QgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBJRDogbnVtYmVyID0gMTtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBzdGFnZTogU3RhZ2U7XG4gICAgcHVibGljIGdyYXBoaWNzPzogR3JhcGhpY3M7XG4gICAgcHVibGljIHZlbG9jaXR5OiBQSVhJLlBvaW50O1xuICAgIHB1YmxpYyBhY2NlbGVyYXRpb246IFBJWEkuUG9pbnQ7XG4gICAgcHVibGljIGZyaWN0aW9uOiBQSVhJLlBvaW50O1xuICAgIHB1YmxpYyBmb3JjZXM6IHtbZm9yY2VJZDogc3RyaW5nXToge3g6IG51bWJlciwgeTogbnVtYmVyfX07XG4gICAgcHVibGljIG1hc3M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yIChzdGFnZTogU3RhZ2UsIGFwcGVuZEdyYXBoaWNzPzogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyBwYXJhbXNcbiAgICAgICAgYXBwZW5kR3JhcGhpY3MgPSB0eXBlb2YoYXBwZW5kR3JhcGhpY3MpID09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGFwcGVuZEdyYXBoaWNzO1xuXG4gICAgICAgIHRoaXMuaWQgPSBEaXNwbGF5T2JqZWN0LklEICsrO1xuXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBzdGFnZTtcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBQSVhJLlBvaW50KDAsIDApO1xuICAgICAgICB0aGlzLmZyaWN0aW9uID0gbmV3IFBJWEkuUG9pbnQoMCwgMCk7XG4gICAgICAgIHRoaXMuZm9yY2VzID0ge307XG4gICAgICAgIHRoaXMubWFzcyA9IDE7XG5cbiAgICAgICAgLy8gdGhpcy5ncmFwaGljc1xuICAgICAgICBpZiAoYXBwZW5kR3JhcGhpY3MpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGb3JjZSAobmFtZTogc3RyaW5nLCB2ZWN0b3I6IFBJWEkuUG9pbnQgfCB7eDogbnVtYmVyICwgeTogbnVtYmVyfSkge1xuICAgICAgICB0aGlzLmZvcmNlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIHg6IHZlY3Rvci54LFxuICAgICAgICAgICAgeTogdmVjdG9yLnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjbGVhckZvcmNlIChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZm9yY2VzW25hbWVdO1xuICAgIH1cblxuICAgIHNldEZyaWN0aW9uICh2YWx1ZTogbnVtYmVyIHwgUElYSS5Qb2ludCB8IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHRoaXMuZnJpY3Rpb24gPSBuZXcgUElYSS5Qb2ludCh2YWx1ZSwgdmFsdWUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uLnNldCh2YWx1ZS54LCB2YWx1ZS55KTtcbiAgICB9XG5cbiAgICAvKiogVXBkYXRlcyB0aGUgRGlzcGxheU9iamVjdCBwb3NpdGlvbiwgdmVsb2NpdHkgJiBhY2NlbGVyYXRpb24gKi9cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcikge1xuICAgICAgICAvLyBmcmljdGlvblxuICAgICAgICB0aGlzLnNldEZvcmNlKCdmcmljdGlvbicsIG5ldyBQSVhJLlBvaW50KFxuICAgICAgICAgICAgLSB0aGlzLmZyaWN0aW9uLnggKiB0aGlzLnZlbG9jaXR5LngsXG4gICAgICAgICAgICAtIHRoaXMuZnJpY3Rpb24ueSAqIHRoaXMudmVsb2NpdHkueVxuICAgICAgICApKTtcblxuICAgICAgICAvLyBhY2NlbGVyYXRpb25cbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24uc2V0KDAsIDApO1xuICAgICAgICBmb3IgKGNvbnN0IGZvcmNlTmFtZSBpbiB0aGlzLmZvcmNlcykge1xuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueCArPSB0aGlzLmZvcmNlc1tmb3JjZU5hbWVdLng7XG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi55ICs9IHRoaXMuZm9yY2VzW2ZvcmNlTmFtZV0ueTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbi54IC89IHRoaXMubWFzcztcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24ueSAvPSB0aGlzLm1hc3M7XG5cbiAgICAgICAgLy8gdmVsb2NpdHlcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IGRlbHRhICogdGhpcy5hY2NlbGVyYXRpb24ueDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGRlbHRhICogdGhpcy5hY2NlbGVyYXRpb24ueTtcblxuICAgICAgICAvLyBwb3NpdGlvblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZGVsdGEgKiB0aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkZWx0YSAqIHRoaXMudmVsb2NpdHkueTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7RGlzcGxheU9iamVjdH0gZnJvbSBcIi4vRGlzcGxheU9iamVjdFwiO1xuaW1wb3J0IHtTdGFnZX0gZnJvbSBcIi4vU3RhZ2VcIjtcblxuXG5leHBvcnQgY2xhc3MgRGlzcGxheU9iamVjdENvbnRhaW5lciBleHRlbmRzIERpc3BsYXlPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3IgKHN0YWdlOiBTdGFnZSkge1xuICAgICAgICBzdXBlcihzdGFnZSwgZmFsc2UpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlIChkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZDogRGlzcGxheU9iamVjdCA9IHRoaXMuY2hpbGRyZW5baV0gYXMgRGlzcGxheU9iamVjdDtcblxuICAgICAgICAgICAgaWYgKGNoaWxkLnVwZGF0ZSlcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG5cbiAgICBzdGF0aWMgZGlzdGFuY2UgKFxuICAgICAgICBwb2ludDE6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0gfCBQSVhJLlBvaW50LFxuICAgICAgICBwb2ludDI6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0gfCBQSVhJLlBvaW50XG4gICAgKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhwb2ludDEueCAtIHBvaW50Mi54LCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyhwb2ludDEueSAtIHBvaW50Mi55LCAyKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7RGlzcGxheU9iamVjdENvbnRhaW5lcn0gZnJvbSBcIi4vRGlzcGxheU9iamVjdENvbnRhaW5lclwiO1xuaW1wb3J0IHtOb2RlQ29udGFpbmVyfSBmcm9tIFwiLi4vYXVkaW8vTm9kZUNvbnRhaW5lclwiO1xuaW1wb3J0IHtEaXNwbGF5T2JqZWN0fSBmcm9tIFwiLi9EaXNwbGF5T2JqZWN0XCI7XG5pbXBvcnQge0F2ZXJhZ2VDaXJjbGV9IGZyb20gXCIuLi9hdWRpby9BdmVyYWdlQ2lyY2xlXCI7XG5pbXBvcnQge0FuaW1hdGVkQmFja2dyb3VuZH0gZnJvbSBcIi4uL2F1ZGlvL0FuaW1hdGVkQmFja2dyb3VuZFwiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFnZSBleHRlbmRzIERpc3BsYXlPYmplY3RDb250YWluZXIge1xuXG4gICAgcHVibGljIGNhbnZhc0NvbnRhaW5lcklEOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY2FudmFzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHB1YmxpYyBsYXN0RGVsdGE6IG51bWJlcjtcblxuICAgIHB1YmxpYyByZW5kZXJlcjogUElYSS5XZWJHTFJlbmRlcmVyIHwgUElYSS5DYW52YXNSZW5kZXJlcjtcblxuICAgIHB1YmxpYyBsYXN0VXBkYXRlRGVsdGE6IG51bWJlcjtcblxuICAgIHB1YmxpYyByZWFkb25seSBtb3VzZTogeyBwb3NpdGlvbjogUElYSS5Qb2ludCB9O1xuXG4gICAgY29uc3RydWN0b3IgKGNhbnZhc0lEOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyB3ZSB3YW50IHRoZSBzdGFnZSB0eXBlZCBhcyAnU3RhZ2UnXG4gICAgICAgIC8vICBldmVuIGlmIGl0IGlzIG51bGwgb24gdGhlIFN0YWdlIGl0c2VsZi5cbiAgICAgICAgc3VwZXIobnVsbCBhcyBhbnkgYXMgU3RhZ2UpO1xuXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGFpbmVySUQgPSBjYW52YXNJRDtcbiAgICAgICAgdGhpcy5jYW52YXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJRCkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMubGFzdERlbHRhID0gMDtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXIoXG4gICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhbnZhc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLnZpZXcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzKTtcblxuICAgICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBQSVhJLlBvaW50KDAsIDApXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW91c2UucG9zaXRpb24uc2V0KFxuICAgICAgICAgICAgICAgIGUuZGF0YS5nbG9iYWwueCxcbiAgICAgICAgICAgICAgICBlLmRhdGEuZ2xvYmFsLnlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGFydCgpIHtcblxuICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZEF0KDApO1xuXG4gICAgICAgIGNvbnN0IG5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBuZXcgTm9kZUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgbm9kZUNvbnRhaW5lci5wb3B1bGF0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKG5vZGVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGF2ZXJhZ2UgY2lyY2xlXG4gICAgICAgIGNvbnN0IGF2Z0NpcmNsZTogRGlzcGxheU9iamVjdCA9IG5ldyBBdmVyYWdlQ2lyY2xlKHRoaXMpO1xuICAgICAgICBhdmdDaXJjbGUucG9zaXRpb24ueCA9IHRoaXMuZ2V0V2lkdGgoKSAvIDI7XG4gICAgICAgIGF2Z0NpcmNsZS5wb3NpdGlvbi55ID0gNiAqIHRoaXMuZ2V0SGVpZ2h0KCkgLyAxMDtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChhdmdDaXJjbGUpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGRBdChuZXcgQW5pbWF0ZWRCYWNrZ3JvdW5kKHRoaXMpLCAwKTtcblxuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH1cblxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCkgLyAxMDAwO1xuICAgICAgICB0aGlzLmxhc3REZWx0YSA9IHQgLSB0aGlzLmxhc3RVcGRhdGVEZWx0YTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlRGVsdGEgPSB0O1xuICAgICAgICBpZiAodGhpcy5sYXN0RGVsdGEgPiAxKSB0aGlzLmxhc3REZWx0YSA9IDA7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aGlzLmxhc3REZWx0YSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9IYW5kbGVyIHtcblxuICAgIHN0YXRpYyByZWFkb25seSBGRlRfU0laRTogbnVtYmVyID0gMjU2O1xuXG4gICAgc3RhdGljIHJlYWRvbmx5IFNUQVRTX1VQREFURV9JTlRFUlZBTDogbnVtYmVyID0gMTAwMCAvIDQwO1xuXG4gICAgc3RhdGljIGNvbnRleHQ6IEF1ZGlvQ29udGV4dDtcblxuICAgIHN0YXRpYyBhbmFseXNlcjogQW5hbHlzZXJOb2RlO1xuXG4gICAgc3RhdGljIGdhaW46IEdhaW5Ob2RlO1xuXG4gICAgc3RhdGljIHNvbmc6IEhUTUxBdWRpb0VsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IHdhdmVmb3JtXG4gICAgICovXG4gICAgc3RhdGljIHdhdmVmb3JtOiBGbG9hdDMyQXJyYXk7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnBvbGF0ZWQgd2F2ZWZvcm1cbiAgICAgKi9cbiAgICBzdGF0aWMgZmlyc3RPcmRlcldhdmVmb3JtOiBGbG9hdDMyQXJyYXk7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGF2ZXJhZ2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYXZlcmFnZTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEZsYXR0ZW5lZCBhdmVyYWdlICgxc3Qgb3JkZXIpXG4gICAgICovXG4gICAgc3RhdGljIGZpcnN0T3JkZXJBdmVyYWdlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogRmxhdHRlbmVkIGF2ZXJhZ2UgKGxpbmVhcilcbiAgICAgKi9cbiAgICBzdGF0aWMgbGluZWFyQXZlcmFnZTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWluaW11bSBhbXBsaXR1ZGUgb24gdGhlIEZGVFxuICAgICAqL1xuICAgIHN0YXRpYyBtaW5pbXVtOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtaW5pbXVtIGFtcGxpdHVkZSBvbiB0aGUgRkZUXG4gICAgICovXG4gICAgc3RhdGljIG1heGltdW06IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBpc1BsYXlpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsYXN0VXBkYXRlRGVsdGE6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlU3RhdHNJbnRlcnZhbDogYW55O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjXG4gICAgICovXG4gICAgc3RhdGljIGluaXQoc3JjOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBjb250ZXh0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyAoQXVkaW9Db250ZXh0IHx8ICg8YW55PndpbmRvdylbJ3dlYmtpdEF1ZGlvQ29udGV4dCddKSgpO1xuXG4gICAgICAgIC8vIGdhaW5cbiAgICAgICAgdGhpcy5nYWluID0gQXVkaW9IYW5kbGVyLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgICAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIC8vIHNvbmdcbiAgICAgICAgdGhpcy5zb25nID0gbmV3IEF1ZGlvKHNyYyk7XG4gICAgICAgIHRoaXMuc29uZy5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNvdXJjZVxuICAgICAgICBjb25zdCBzb25nU291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSh0aGlzLnNvbmcpO1xuICAgICAgICBzb25nU291cmNlLmNvbm5lY3QodGhpcy5nYWluKTtcblxuICAgICAgICAvLyBzZXR1cCBhbmFseXNlclxuICAgICAgICB0aGlzLmFuYWx5c2VyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgIHRoaXMuZ2Fpbi5jb25uZWN0KHRoaXMuYW5hbHlzZXIpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSBBdWRpb0hhbmRsZXIuRkZUX1NJWkU7XG4gICAgICAgIHRoaXMud2F2ZWZvcm0gPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgICAgICB0aGlzLmZpcnN0T3JkZXJXYXZlZm9ybSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0RmxvYXRUaW1lRG9tYWluRGF0YSh0aGlzLndhdmVmb3JtKTtcblxuICAgICAgICB0aGlzLmxhc3RVcGRhdGVEZWx0YSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlU3RhdHMoKSwgQXVkaW9IYW5kbGVyLlNUQVRTX1VQREFURV9JTlRFUlZBTCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQFRPRE8gb3B0aW1pemUuIGZ1bmN0aW9uYWwgamF2YXNjcmlwdCBnaXZlcyBiYWQgcGVyZm9ybWFuY2VzXG4gICAgICovXG4gICAgc3RhdGljIHVwZGF0ZVN0YXRzKCkge1xuXG4gICAgICAgIGNvbnN0IGRlbHRhOiBudW1iZXIgPSAoRGF0ZS5ub3coKSAtIHRoaXMubGFzdFVwZGF0ZURlbHRhKSAvIDEwMDA7XG5cbiAgICAgICAgdGhpcy5hbmFseXNlci5nZXRGbG9hdFRpbWVEb21haW5EYXRhKHRoaXMud2F2ZWZvcm0pO1xuICAgICAgICB0aGlzLmF2ZXJhZ2UgPSB0aGlzLndhdmVmb3JtLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIE1hdGguYWJzKGN1cnIpLCAwKSAvIHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgICAgIHRoaXMubWluaW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1pbihhLCBiKSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IHRoaXMud2F2ZWZvcm0ucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1heChhLCBiKSwgdGhpcy53YXZlZm9ybVswXSk7XG4gICAgICAgIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UgKz0gKHRoaXMuYXZlcmFnZSAtIHRoaXMuZmlyc3RPcmRlckF2ZXJhZ2UpICogMC41ICogZGVsdGE7XG4gICAgICAgIHRoaXMubGluZWFyQXZlcmFnZSArPSBkZWx0YSAqICh0aGlzLmF2ZXJhZ2UgPiB0aGlzLmxpbmVhckF2ZXJhZ2UgPyAxIDogLTEpO1xuICAgICAgICB0aGlzLndhdmVmb3JtLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5maXJzdE9yZGVyV2F2ZWZvcm1baW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RPcmRlcldhdmVmb3JtW2luZGV4XSArPSAodmFsdWUgLSB0aGlzLmZpcnN0T3JkZXJXYXZlZm9ybVtpbmRleF0pICogMS4xICogZGVsdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZURlbHRhID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBwbGF5KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuc29uZy5wbGF5KCk7XG5cbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbi9lbmdpbmUvU3RhZ2UnXG4iXSwic291cmNlUm9vdCI6IiJ9