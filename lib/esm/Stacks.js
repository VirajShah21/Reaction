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
import React from "react";
function Stack(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    function alignmentToCSS(a) {
        switch (a) {
            case "around":
                return "space-around";
            case "between":
                return "space-between";
            case "evenly":
                return "space-evenly";
            case "start":
                return "flex-start";
            case "center":
                return "center";
            case "end":
                return "flex-end";
            case "stretch":
                return "stretch";
            default:
                return "center";
        }
    }
    return (React.createElement("div", { style: __assign({ alignItems: props.align
                ? alignmentToCSS(props.align)
                : undefined, justifyContent: props.justify
                ? alignmentToCSS(props.justify)
                : undefined, alignSelf: props.alignSelf
                ? alignmentToCSS(props.alignSelf)
                : undefined, justifySelf: props.justifySelf
                ? alignmentToCSS(props.justifySelf)
                : undefined, flexGrow: props.grow, height: (_c = (_b = (_a = props.style) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : props.height) !== null && _c !== void 0 ? _c : undefined, width: (_f = (_e = (_d = props.style) === null || _d === void 0 ? void 0 : _d.width) !== null && _e !== void 0 ? _e : props.width) !== null && _f !== void 0 ? _f : undefined }, props.style), className: "stack " + props.direction + "stack " + ((_g = props.className) !== null && _g !== void 0 ? _g : ""), id: props.id, onMouseOver: props.onMouseOver, onMouseOut: props.onMouseOut, onMouseDown: props.onMouseDown, onMouseUp: props.onMouseUp, onClick: props.onClick, onDrag: props.onDrag, onMouseMove: props.onMouseMove, hidden: props.hidden, draggable: props.draggable }, props.children));
}
function HStack(props) {
    return Stack(__assign(__assign({}, props), { direction: "h" }));
}
function VStack(props) {
    return Stack(__assign(__assign({}, props), { direction: "v" }));
}
function Spacer() {
    return React.createElement("div", { style: { flexGrow: 1 } });
}
export { HStack, VStack, Spacer };
