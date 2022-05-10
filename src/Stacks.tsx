import React from "react";

type Alignment =
    | "around"
    | "between"
    | "evenly"
    | "start"
    | "center"
    | "end"
    | "stretch";

interface BaseStackProps extends StackProps {
    direction: "h" | "v";
}

interface StackProps {
    // * Stack props
    children?: React.ReactNode | React.ReactNode[];
    justify?: Alignment;
    align?: Alignment;
    justifySelf?: Alignment;
    alignSelf?: Alignment;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    grow?: number;
    height?: string;
    width?: string;

    // * JSX Props
    draggable?: boolean;
    hidden?: boolean;

    // * JSX Event Props
    onMouseLeave?: React.MouseEventHandler;
    onMouseMove?: React.MouseEventHandler;
    onMouseOver?: React.MouseEventHandler;
    onMouseOut?: React.MouseEventHandler;
    onMouseDown?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onClick?: React.MouseEventHandler;
    onDrag?: React.MouseEventHandler;
}

function Stack(props: BaseStackProps) {
    function alignmentToCSS(a: Alignment) {
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

    return (
        <div
            style={{
                alignItems: props.align
                    ? alignmentToCSS(props.align)
                    : undefined,
                justifyContent: props.justify
                    ? alignmentToCSS(props.justify)
                    : undefined,
                alignSelf: props.alignSelf
                    ? alignmentToCSS(props.alignSelf)
                    : undefined,
                justifySelf: props.justifySelf
                    ? alignmentToCSS(props.justifySelf)
                    : undefined,
                flexGrow: props.grow,
                height: props.style?.height ?? props.height ?? undefined,
                width: props.style?.width ?? props.width ?? undefined,
                ...props.style,
            }}
            className={`stack ${props.direction}stack ${props.className ?? ""}`}
            id={props.id}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onClick={props.onClick}
            onDrag={props.onDrag}
            onMouseMove={props.onMouseMove}
            hidden={props.hidden}
            draggable={props.draggable}
        >
            {props.children}
        </div>
    );
}

function HStack(props: StackProps) {
    return Stack({
        ...props,
        direction: "h",
    });
}

function VStack(props: StackProps) {
    return Stack({ ...props, direction: "v" });
}

function Spacer() {
    return <div style={{ flexGrow: 1 }} />;
}

export { HStack, VStack, Spacer };
