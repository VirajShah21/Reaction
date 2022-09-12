import React from 'react';
import { BaseStackProps, StackProps } from './model/stacks';
import { getClassName } from './util/stack-classes';

function Stack({
    direction,
    justify,
    align,
    justifySelf,
    alignSelf,
    scroll,
    wrap,
    className,
    grow,
    style,
    height,
    width,
    id,
    onMouseOver,
    onMouseOut,
    onMouseDown,
    onMouseUp,
    onClick,
    children,
    onDrag,
    onMouseMove,
    hidden,
    draggable,
}: BaseStackProps) {
    return (
        <div
            style={{
                flexGrow: grow,
                height: style?.height ?? height ?? undefined,
                width: style?.width ?? width ?? undefined,
                ...style,
            }}
            className={getClassName({
                direction,
                scroll,
                wrap,
                className,
                justify,
                align,
                justifySelf,
                alignSelf,
            })}
            id={id}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
            onDrag={onDrag}
            onMouseMove={onMouseMove}
            hidden={hidden}
            draggable={draggable}>
            {children}
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
