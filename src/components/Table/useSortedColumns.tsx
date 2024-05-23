import { useContext } from 'react';
import { keyBy } from 'lodash';
import { config, ColumnConfig } from './Row/Column';
import { useColumnsVisibilityFilter } from './ColumnsVisibilityFilter';
import { FixedColumnContext } from './FixedColumns';
import { useGetColumnOrder } from './ChangeColumnOreder';

interface UseSortedColumns {
    (): Return;
}

interface Return {
    sortedColumns: ColumnConfig[];
}

const useSortedColumns: UseSortedColumns = () => {
    const { visibilityColumnNames } = useColumnsVisibilityFilter();
    const { fixedColumnNames } = useContext(FixedColumnContext);
    const { columnNameOrder } = useGetColumnOrder();

    const columnConfigMap = keyBy(config, 'name');
    const visibilityColumns = columnNameOrder.map((columnName) => columnConfigMap[columnName]).filter(({ name }) => visibilityColumnNames[name]);

    const leftVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === 'left');
    const rightVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === 'rigth');
    const centralVisibilityColumns = visibilityColumns.filter(({ name }) => fixedColumnNames[name] === null);

    return {
        sortedColumns: [...leftVisibilityColumns, ...centralVisibilityColumns, ...rightVisibilityColumns],
    };
}

export { useSortedColumns };
