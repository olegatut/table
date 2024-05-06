import React from 'react';

import { ColumnWidthContext } from './context';
import { type ColumnName } from './types';

interface UseColumnWidthContext {
    (params: Params): Return
}

interface Params {
    columnName: ColumnName;
}

interface Return {
    width: number;
    isActive: boolean;
    setActive: SetActive;
    setWidth: SetWidth;
}

interface SetActive {
    (isActive: boolean): void
}

interface SetWidth {
    (width: number): void;
}

const useColumnWidthContext: UseColumnWidthContext = ({ columnName }) => {
    const { columnWidth, activeColumnName, setActiveColumnName, setColumnWidth } = React.useContext(ColumnWidthContext);

    const setActive: SetActive = React.useCallback((isAcitive) => {
        setActiveColumnName({
            ...activeColumnName,
            [columnName]: isAcitive,
        });
    }, [columnName, activeColumnName, setActiveColumnName]);

    const setWidth: SetWidth = React.useCallback((width) => {
        setColumnWidth({
            ...columnWidth,
            [columnName]: width,
        });
    }, [columnName, columnWidth, setColumnWidth]);
    
    return {
        width: columnWidth[columnName],
        isActive: activeColumnName[columnName],
        setActive,
        setWidth,
    }
}

export { useColumnWidthContext };
