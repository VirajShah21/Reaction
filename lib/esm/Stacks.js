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
import React from 'react';
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
    return (React.createElement("div", { style: __assign({ alignItems: props.align ? alignmentToCSS(props.align) : undefined, justifyContent: props.justify ? alignmentToCSS(props.justify) : undefined, flexGrow: props.grow }, props.style), className: "stack " + props.direction + "stack " + ((_a = props.className) !== null && _a !== void 0 ? _a : ''), id: props.id, onMouseOver: props.onMouseOver, onMouseOut: props.onMouseOut, onMouseDown: props.onMouseDown, onMouseUp: props.onMouseUp, onClick: props.onClick, onDrag: props.onDrag, onMouseMove: props.onMouseMove, hidden: props.hidden, draggable: props.draggable }, props.children));
}
function HStack(props) {
    return Stack(__assign(__assign({}, props), { direction: 'h' }));
}
function VStack(props) {
    return Stack(__assign(__assign({}, props), { direction: 'v' }));
}
function Spacer() {
    return React.createElement("div", { style: { flexGrow: 1 } });
}
export { HStack, VStack, Spacer };
