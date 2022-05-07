"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = exports.VStack = exports.HStack = void 0;
var react_1 = __importDefault(require("react"));
function Stack(props) {
    var _a;
    function alignmentToCSS(a) {
        switch (a) {
            case 'around':
                return 'space-around';
            case 'between':
                return 'space-between';
            case 'evenly':
                return 'space-evenly';
            case 'start':
                return 'flex-start';
            case 'center':
                return 'center';
            case 'end':
                return 'flex-end';
            case 'stretch':
                return 'stretch';
            default:
                return 'center';
        }
    }
    return (react_1.default.createElement("div", { style: __assign({ alignItems: props.align ? alignmentToCSS(props.align) : undefined, justifyContent: props.justify ? alignmentToCSS(props.justify) : undefined, flexGrow: props.grow }, props.style), className: "stack " + props.direction + "stack " + ((_a = props.className) !== null && _a !== void 0 ? _a : ''), id: props.id, onMouseOver: props.onMouseOver, onMouseOut: props.onMouseOut, onMouseDown: props.onMouseDown, onMouseUp: props.onMouseUp, onClick: props.onClick, onDrag: props.onDrag, onMouseMove: props.onMouseMove, hidden: props.hidden, draggable: props.draggable }, props.children));
}
function HStack(props) {
    return Stack(__assign(__assign({}, props), { direction: 'h' }));
}
exports.HStack = HStack;
function VStack(props) {
    return Stack(__assign(__assign({}, props), { direction: 'v' }));
}
exports.VStack = VStack;
function Spacer() {
    return react_1.default.createElement("div", { style: { flexGrow: 1 } });
}
exports.Spacer = Spacer;
