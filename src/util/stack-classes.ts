import { Alignment, StackClassOptions } from '../model/stacks';

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

export {
    justificationClassName,
    alignmentClassName,
    justifySelfClassName,
    alignSelfClassName,
    wrapClassName,
    getClassName,
};
