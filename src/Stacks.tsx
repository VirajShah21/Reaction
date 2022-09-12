import React, { PropsWithChildren } from 'react';
import { BaseStackProps, StackProps } from './model/stack-props';
import { generateStackProps } from './util/stack-prop-generator';

function Stack(props: PropsWithChildren<BaseStackProps>) {
    return <div {...generateStackProps(props)}>{props.children}</div>;
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
