import { useContext } from 'react';
import { config, ColumnName, ColumnConfig } from './Row/Column';
import { useColumnsVisibilityFilter } from './ColumnsVisibilityFilter';
import { FixedColumnContext } from './FixedColumns';

interface UseSortedColumns {
    (): Return;
}

interface Return {
    sortedColumns: ColumnConfig[];
}

const useSortedColumns: UseSortedColumns = () => {
    const { visibilityColumnNames } = useColumnsVisibilityFilter();
    const { fixedColumnNames } = useContext(FixedColumnContext);

    const visibilityColumns = config.filter(({ name }) => visibilityColumnNames[name]);

    const leftVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === 'left');
    const rightVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === 'rigth');
    const centralVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === null);

    return {
        sortedColumns: [...leftVisibilityColumns, ...centralVisibilityColumns, ...rightVisibilityColumns],
    };
}

export { useSortedColumns };
