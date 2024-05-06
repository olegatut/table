import { useCallback, useContext } from 'react';
import { ColumnName, Params } from './types';
import { ChangeColumnOrderContext } from './context';

interface UseChangeColumnOrder {
    (params: UseChangeColumnOrderParams): Return;
}

interface UseChangeColumnOrderParams {
    columnName: ColumnName;
}

interface Return {
    params: Params;
    mouseDownHandler: MouseDownHandler
}

type MouseDownHandler = React.MouseEventHandler<HTMLElement>;

const useChangeColumnOrder: UseChangeColumnOrder = ({ columnName }) => {
    const { paramsColumnNames, setParamsColumnNames } = useContext(ChangeColumnOrderContext);

    const mouseDownHandler: MouseDownHandler = useCallback((event) => {
        const columnElement: HTMLElement = event.target as HTMLElement;
        const between = event.pageX - columnElement.getBoundingClientRect().left;

        const onMouseMove = (event: MouseEvent) => {
            columnElement.style.left = event.pageX - between + 'px';
        }

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }, []);

    return {
        params: paramsColumnNames[columnName],
        mouseDownHandler,
    };
}

export {
    useChangeColumnOrder,
    type MouseDownHandler,
};
