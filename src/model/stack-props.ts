type Alignment = 'around' | 'between' | 'evenly' | 'start' | 'center' | 'end' | 'stretch';

interface BaseStackProps extends StackProps {
    direction: 'h' | 'v';
}

interface StackProps {
    // * Stack props
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

interface StackClassOptions {
    direction: 'h' | 'v';
    justify?: Alignment;
    align?: Alignment;
    justifySelf?: Alignment;
    alignSelf?: Alignment;
    scroll?: 'horizontal' | 'vertical' | 'both';
    wrap?: boolean | 'reverse';
    className?: string;
}

export type { Alignment, BaseStackProps, StackProps, StackClassOptions };
