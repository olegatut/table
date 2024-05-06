import { useCallback, useRef, useEffect, type MouseEventHandler } from 'react';
import { useColumnWidthContext } from '../components/Table/ColumnWidthContext';
import { ColumnName } from '../components/Table/Row/Column';

interface UseColumnWidth {
    (params: UseColumnWidthParams): UseColumnWidthReturn;
}

interface UseColumnWidthParams {
    columnName: ColumnName;
}

interface UseColumnWidthReturn {
    width: number;
    isActive: boolean;
    onMouseDown: OnMouseDownHandler;
}

type OnMouseDownHandler =  MouseEventHandler<HTMLDivElement>;

const useColumnWidth: UseColumnWidth = ({ columnName }) => {
    const prevPageX = useRef(0);

    const { width, isActive, setWidth, setActive } = useColumnWidthContext({ columnName });

    const onMouseDown: OnMouseDownHandler = (event) => {
        // @ts-ignore
        event.target.ondragstart = () => false;
        prevPageX.current = event.pageX;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        setActive(true);

        const onMouseMove: EventListener = (event) => {
            // @ts-ignore
            setWidth(event.pageX - prevPageX.current + width);
            // @ts-ignore
            // prevPageX.current = event.pageX;
        };

        const onMouseUp: EventListener = () => {
            document.body.style.cursor = 'default';
            document.body.style.userSelect = 'auto';
            setActive(false);

            window.document.removeEventListener('mousemove', onMouseMove);
            window.document.removeEventListener('mouseup', onMouseUp);
        };

        window.document.addEventListener('mousemove', onMouseMove);
        window.document.addEventListener('mouseup', onMouseUp);

        return () => {
            window.document.removeEventListener('mousemove', onMouseMove);
            window.document.removeEventListener('mouseup', onMouseUp);
        }
    };

    return {
        width,
        isActive,
        onMouseDown,
    };
}

export { useColumnWidth, type OnMouseDownHandler };