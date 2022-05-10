import React from "react";
declare type Alignment = "around" | "between" | "evenly" | "start" | "center" | "end" | "stretch";
interface StackProps {
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
    draggable?: boolean;
    hidden?: boolean;
    onMouseLeave?: React.MouseEventHandler;
    onMouseMove?: React.MouseEventHandler;
    onMouseOver?: React.MouseEventHandler;
    onMouseOut?: React.MouseEventHandler;
    onMouseDown?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    onClick?: React.MouseEventHandler;
    onDrag?: React.MouseEventHandler;
}
declare function HStack(props: StackProps): JSX.Element;
declare function VStack(props: StackProps): JSX.Element;
declare function Spacer(): JSX.Element;
export { HStack, VStack, Spacer };
