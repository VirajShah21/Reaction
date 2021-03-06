import React from 'react';

type Alignment = 'around' | 'between' | 'evenly' | 'start' | 'center' | 'end' | 'stretch';

interface BaseStackProps extends StackProps {
    direction: 'h' | 'v';
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
    scroll?: 'horizontal' | 'vertical' | 'both';
    wrap?: boolean | 'reverse';

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

function justificationClassName(a?: Alignment) {
    return a ? `justify-content-${a}` : '';
}

function alignmentClassName(a?: Alignment) {
    return a ? `align-items-${a}` : '';
}

function justifySelfClassName(a?: Alignment) {
    return a ? `justify-self-${a}` : '';
}

function alignSelfClassName(a?: Alignment) {
    return a ? `align-self-${a}` : '';
}

function wrapClassName(wrap?: boolean | 'reverse') {
    if (wrap) {
        if (wrap === 'reverse') {
            return 'wrap-reverse';
        }
        return 'wrap';
    }
    return '';
}

function Stack(props: BaseStackProps) {
    function getClassName() {
        return [
            'stack',
            `${props.direction}stack`,
            justificationClassName(props.justify),
            alignmentClassName(props.align),
            justifySelfClassName(props.justifySelf),
            alignSelfClassName(props.alignSelf),
            props.scroll ? `scroll-${props.scroll}` : '',
            wrapClassName(props.wrap),
            props.className,
        ]
            .filter(className => className !== '' && className !== undefined && className !== null)
            .join(' ');
    }

    return (
        <div
            style={{
                flexGrow: props.grow,
                height: props.style?.height ?? props.height ?? undefined,
                width: props.style?.width ?? props.width ?? undefined,
                ...props.style,
            }}
            className={getClassName()}
            id={props.id}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onClick={props.onClick}
            onDrag={props.onDrag}
            onMouseMove={props.onMouseMove}
            hidden={props.hidden}
            draggable={props.draggable}>
            {props.children}
        </div>
    );
}

export function HStack(props: StackProps) {
    return Stack({
        ...props,
        direction: 'h',
    });
}

export function VStack(props: StackProps) {
    return Stack({ ...props, direction: 'v' });
}

export function Spacer() {
    return <div style={{ flexGrow: 1 }} />;
}
