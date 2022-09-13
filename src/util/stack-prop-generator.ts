import { Alignment, BaseStackProps, StackClassOptions } from '../model/stack-props';
import styles from 'src/Stacks.module.css';

function capitalize(s: string): string {
    return s[0].toUpperCase() + s.slice(1);
}

function justificationClassName(a?: Alignment) {
    return a ? styles[`JustifyContent${capitalize(a)}`] : '';
}

function alignmentClassName(a?: Alignment) {
    return a ? styles[`AlignItems${capitalize(a)}`] : '';
}

function justifySelfClassName(a?: Alignment) {
    return a ? styles[`JustifySelf${capitalize(a)}`] : '';
}

function alignSelfClassName(a?: Alignment) {
    return a ? styles[`AlignSelf${capitalize(a)}`] : '';
}

function wrapClassName(wrap?: boolean | 'reverse') {
    if (wrap) {
        if (wrap === 'reverse') {
            return styles.WrapReverse;
        }
        return styles.Wrap;
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
        styles.Stack,
        direction === 'h' ? styles.HStack : styles.VStack,
        justificationClassName(justify),
        alignmentClassName(align),
        justifySelfClassName(justifySelf),
        alignSelfClassName(alignSelf),
        scroll ? styles[`Scroll${capitalize(scroll)}`] : '',
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
