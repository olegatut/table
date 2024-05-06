import React from 'react';

import { ColumnHead } from './ColumnHead';
import { useSortedColumns } from '../useSortedColumns';

import './RowHead.css';

const RowHead: React.FC = () => {
    const { sortedColumns } = useSortedColumns();

    return (
        <thead className='head'>
            <tr className='head_row'>
                {sortedColumns
                    .map(({ name: columnName, title }) => (
                        <ColumnHead
                            key={columnName}
                            columnName={columnName}
                            title={title}   
                        />
                    ))
                }
            </tr>
        </thead>
    );
};

export { RowHead };