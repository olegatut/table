import { useCallback, CSSProperties } from 'react';
import { ColumnName } from '../../Row/Column';
import { useColumnWidth, OnMouseDownHandler } from '../../../../hooks';
import { useFixedColumn, Fixed } from '../../FixedColumns';
import { useColumnLeft } from '../../useColumnLeft';
import { useChangeColumnOrder, MouseDownHandler } from '../../ChangeColumnOreder';

interface UseColumnHead {
    (params: Params): Return;
}

interface Params {
    columnName: ColumnName;
}

interface Return {
    width: number;
    left: number | string;
    right: number | string;
    fixed: Fixed;
    isActive: boolean;
    onMouseDown: OnMouseDownHandler;
    mouseDownHandler: MouseDownHandler;
    onLeftPinHandler: PinHandler;
    onRightPinHandler: PinHandler;
}

interface PinHandler {
    (): void
}

const useColumnHead: UseColumnHead = ({ columnName }) => {
    const { width, isActive, onMouseDown } = useColumnWidth({ columnName });
    const { fixed, setFixed } = useFixedColumn({ columnName });
    const { left, right } = useColumnLeft({ columnName });
    const { mouseDownHandler } = useChangeColumnOrder({ columnName });

    const onLeftPinHandler: PinHandler = useCallback(() => {
        if (fixed === 'left') setFixed(null);
        if (fixed === 'rigth' || fixed === null) setFixed('left');
    }, [fixed, setFixed]);

    const onRightPinHandler: PinHandler = useCallback(() => {
        if (fixed === 'rigth') setFixed(null);
        if (fixed === 'left' || fixed === null) setFixed('rigth');
    }, [fixed, setFixed]);

    return {
        width,
        left,
        right,
        isActive,
        fixed,
        onLeftPinHandler,
        onRightPinHandler,
        onMouseDown,
        mouseDownHandler,
    };
}

export { useColumnHead };
