import React from 'react';

import { type ColumnConfig, type ColumnType, type CommonColumnProps } from './types';
import { type DataResponse } from '../../../../types';

import { ColumnSelector } from './ColumnSelector';
import { ColumnText } from './ColumnText';

import { useChangeContext } from '../../ChangeContext';
import { useFixedColumn } from '../../FixedColumns';
import { useColumnWidth } from '../../../../hooks';
import { useColumnLeft } from '../../useColumnLeft';

import './Column.css';

interface Props {
    className?: string;
    alternation: 'even' | 'odd';
    loading: boolean;
    columnConfig: ColumnConfig;
    data: DataResponse;
}

const columnTypeMap: Record<ColumnType, React.FC<CommonColumnProps>> = {
    'selector': ColumnSelector,
    'text': ColumnText,
};

const Column: React.FC<Props> = ({ className, alternation, loading, columnConfig, data }) => {
    const { changes, addChange } = useChangeContext({ rowId: data.uuid, columnName: columnConfig.name });
    const { fixed } = useFixedColumn({ columnName: columnConfig.name });
    const { isActive: isChangingCulumnWidth, width } = useColumnWidth({ columnName: columnConfig.name });
    const { left, right } = useColumnLeft({ columnName: columnConfig.name });

    const ComponentRender = columnTypeMap[columnConfig.type];

    return (
        <th
            className={`column_${alternation} ${isChangingCulumnWidth ? 'column_changing_width' : ''} column ${fixed ? 'column_fixed' : ''} ${columnConfig.name} ${className} ${columnConfig.isChanged({ beforeData: data, afterData: changes[0] }) ? 'column_changed': '' }`}
            style={{ width, left, right }}
        >
            {loading
                ? 'loading...'
                : <ComponentRender columnConfig={columnConfig} data={changes.length ? changes[0] : data} onChange={(data) => addChange({ updatedData: data })}/>
            }
        </th>
    );
}

export { Column, type Props };