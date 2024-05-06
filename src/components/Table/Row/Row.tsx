import React from 'react';

import { DataResponse } from '../../../types';
import { Column } from './Column';
import { useSortedColumns } from '../useSortedColumns';

import './Row.css';

interface Props {
    className?: string;
    alternation: 'even' | 'odd';
    loading: boolean;
    data: DataResponse;
}

const Row: React.FC<Props> = ({ className, alternation, loading, data }) => {
    const { sortedColumns } = useSortedColumns();

    return (
        <tr className={`row ${className}`}>
            {sortedColumns
                .map((config) => (
                    <Column
                        key={config.name}
                        alternation={alternation}
                        loading={loading}
                        columnConfig={config}
                        data={data}
                    />
                ))
            }
        </tr>
    );
}

export { Row, type Props };