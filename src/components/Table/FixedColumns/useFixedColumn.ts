import React from 'react';
import { FixedColumnContext } from './context';
import { type Fixed, type ColumnName } from './types';

interface UseColumnContext {
    (params: Params): Return;
}

interface Params {
    columnName: ColumnName;
}

interface Return {
    fixed: Fixed;
    setFixed: SetFixed;
}

interface SetFixed {
    (fixed: Fixed): void;
}

const useFixedColumn: UseColumnContext = ({ columnName }) => {
    const { fixedColumnNames, setFixedColumnNames } = React.useContext(FixedColumnContext);

    const setFixed: SetFixed = React.useCallback((fixed) => {
        setFixedColumnNames({
            ...fixedColumnNames,
            [columnName]: fixed,
        });
    }, [fixedColumnNames, setFixedColumnNames]);

    return {
        fixed: fixedColumnNames[columnName],
        setFixed 
    };
};

export { useFixedColumn, type SetFixed };