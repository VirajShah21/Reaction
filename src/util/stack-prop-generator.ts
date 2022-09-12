import { Alignment, BaseStackProps, StackClassOptions } from '../model/stack-props';

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

function getClassName({
    direction,
    justify,
    align,
    justifySelf,
    alignSelf,
    scroll,
    wrap,
    className,
}: StackClassOptions) {
    return [
        'stack',
        `${direction}stack`,
        justificationClassName(justify),
        alignmentClassName(align),
        justifySelfClassName(justifySelf),
        alignSelfClassName(alignSelf),
        scroll ? `scroll-${scroll}` : '',
        wrapClassName(wrap),
        className,
    ]
        .filter(className => className !== '' && className !== undefined && className !== null)
        .join(' ');
}

function generateStackProps({
    grow,
    style,
    height,
    width,
    direction,
    scroll,
    wrap,
    className,
    justify,
    align,
    justifySelf,
    alignSelf,
    id,
    onMouseOver,
    onMouseOut,
    onMouseDown,
    onMouseUp,
    onClick,
    onDrag,
    onMouseMove,
    hidden,
    draggable,
}: BaseStackProps) {
    return {
        style: {
            flexGrow: grow,
            height: style?.height ?? height ?? undefined,
            width: style?.width ?? width ?? undefined,
            ...style,
        },
        className: getClassName({
            direction,
            scroll,
            wrap,
            className,
            justify,
            align,
            justifySelf,
            alignSelf,
        }),
        id,
        onMouseOver,
        onMouseOut,
        onMouseDown,
        onMouseUp,
        onClick,
        onDrag,
        onMouseMove,
        hidden,
        draggable,
    };
}

export { generateStackProps };
