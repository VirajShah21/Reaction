import React from 'react';
import './Stacks.css';
declare type Alignment = 'around' | 'between' | 'evenly' | 'start' | 'center' | 'end' | 'stretch';
interface StackProps {
    children?: React.ReactNode | React.ReactNode[];
    justify?: Alignment;
    align?: Alignment;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    grow?: number;
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
