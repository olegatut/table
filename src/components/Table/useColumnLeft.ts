import { useContext } from 'react';
import { findIndex } from 'lodash';

import { config, ColumnName } from './Row/Column';
import { ColumnWidthContext } from './ColumnWidthContext';
import { FixedColumnContext } from './FixedColumns';

interface UseColumnLeft {
    (params: Params): Return;
}

interface Params {
    columnName: ColumnName;
}

interface Return {
    left: number | string;
    right: number | string;
}

const useColumnLeft: UseColumnLeft = ({ columnName }) => {
    const { columnWidth } = useContext(ColumnWidthContext);
    const { fixedColumnNames } = useContext(FixedColumnContext);

    const left = (() => {
        if (fixedColumnNames[columnName] !== 'left') {
            return 'auto';
        }

        const leftColumns = config.filter(({ name }) => fixedColumnNames[name] === 'left');
        const columnNameIndex = findIndex(leftColumns, {name: columnName});

        return leftColumns.slice(0, columnNameIndex).reduce((prev, { name }) => prev + columnWidth[name], 0);
    })();

    const right = (() => {
        if (fixedColumnNames[columnName] !== 'rigth') {
            return 'auto';
        }

        const rightColumns = config.filter(({ name }) => fixedColumnNames[name] === 'rigth').reverse();
        const columnNameIndex = findIndex(rightColumns, {name: columnName});

        return rightColumns.slice(0, columnNameIndex).reduce((prev, { name }) => prev + columnWidth[name], 0);
    })();

    return {
        left,
        right,
    };
}

export { useColumnLeft };