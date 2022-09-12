import React from 'react';
import { BaseStackProps, StackProps } from './model/stack-props';
import {
    alignmentClassName,
    alignSelfClassName,
    justificationClassName,
    justifySelfClassName,
    wrapClassName,
} from './util/stack-classes';

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
