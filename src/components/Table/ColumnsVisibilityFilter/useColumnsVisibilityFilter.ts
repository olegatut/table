import React from 'react';
import { ColumnName, VisibleColumnNames } from './types';
import { ColumnsVisibilityFilterContext } from './context';

interface UseColumnsVisibilityFilter {
    (): Return;
}

interface Return {
    visibilityColumnNames: VisibleColumnNames;
    setColumnNameVisibility: SetColumnNameVisibility;
}

interface SetColumnNameVisibility {
    (params: {columnName: ColumnName; visibility: boolean}): void
}

const useColumnsVisibilityFilter: UseColumnsVisibilityFilter = () => {
    const { visibilityColumnNames, setVisibilityColumnNames } = React.useContext(ColumnsVisibilityFilterContext);

    const setColumnNameVisibility: SetColumnNameVisibility = React.useCallback(({ columnName, visibility }) => {        
        setVisibilityColumnNames({
            ...visibilityColumnNames,
            [columnName]: visibility,
        });
    }, [visibilityColumnNames, setVisibilityColumnNames]);

    return {
        visibilityColumnNames,
        setColumnNameVisibility,
    };
}

export { useColumnsVisibilityFilter };
