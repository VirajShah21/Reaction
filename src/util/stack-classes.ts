import { Alignment } from '../model/stack-props';

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

export {
    justificationClassName,
    alignmentClassName,
    justifySelfClassName,
    alignSelfClassName,
    wrapClassName,
};
