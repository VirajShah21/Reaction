import React from 'react';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ScreenContstraintProps } from './model/screen-adapter';

const context = createContext({
    width: window.innerWidth,
    height: window.innerHeight,
});

function ScreenAdapter({ children }: PropsWithChildren<{}>) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function updateDevice() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', updateDevice);

        return () => window.removeEventListener('resize', updateDevice);
    });

    return <context.Provider value={{ width, height }}>{children}</context.Provider>;
}

function ScreenConstraint({
    minWidth = -Infinity,
    maxWidth = Infinity,
    minHeight = -Infinity,
    maxHeight = Infinity,
    children,
}: PropsWithChildren<ScreenContstraintProps>) {
    const { width, height } = useScreenAdapter();

    if (width >= minWidth && width <= maxWidth && height >= minHeight && height <= maxHeight) {
        return <>{children}</>;
    }

    return null;
}

const useScreenAdapter = () => useContext(context);

export { ScreenAdapter, ScreenConstraint };
