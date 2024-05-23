import { useContext } from 'react';

import { ColumnNameOrder } from './types';
import { ChangeColumnOrderContext } from './context';

interface UseGetColumnOrder {
    (): Return;
}

interface Return {
    columnNameOrder: ColumnNameOrder;
}

const useGetColumnOrder: UseGetColumnOrder = () => {
    const { columnNameOrder } = useContext(ChangeColumnOrderContext);

    return {
        columnNameOrder,
    };
}

export {
    useGetColumnOrder,
};
