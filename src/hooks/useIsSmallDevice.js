import { useLayoutEffect, useState } from 'react';

export function useIsSmallDevice() {
    const [size, setSize] = useState([0, 0]);
    let isSmallDevice = size[0] < 1100 ? true : false;

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('reize', updateSize);
    }, []);

    return isSmallDevice;
}
