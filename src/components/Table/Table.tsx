import React, { UIEventHandler } from 'react';

import { Row } from './Row';
import { DataResponse } from '../../types';
import { RowHead } from './RowHead';
import { Provider as ChangeProvider } from './ChangeContext';
import { Provider as ColumnWidthProvider } from './ColumnWidthContext';
import { ColumnsVisibilityFilter, Provider as ColumnsVisibilityFilterProvider } from './ColumnsVisibilityFilter';
import { Provider as FixedColumnsProvider } from './FixedColumns';
import { Provider as ChangeColumnOrderProvider } from './ChangeColumnOreder';

import './Table.css';

interface Props {
    data: DataResponse[];
    onScrolledToButtom?: () => void;
}

const ROW_HEIGHT = 40;
const VISIBLE_ROW_COUNT = 20;

const Table: React.FC<Props> = ({ data, onScrolledToButtom }) => {
    const [ start, setStart ] = React.useState(0);

    const topHeight = (() => {
        return ROW_HEIGHT * start;
    })();

    const bottomHeight = (() => {
        return ROW_HEIGHT * (data.length - (start + VISIBLE_ROW_COUNT));
    })();

    const onScroll: UIEventHandler<HTMLDivElement> = React.useCallback((event) => {
        // @ts-ignore
        const updatedStart = Math.floor(event.target.scrollTop / ROW_HEIGHT) - 20
        setStart(updatedStart < 0 ? 0 : updatedStart);

        // @ts-ignore
        if (onScrolledToButtom && (event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop) < 1) {
            onScrolledToButtom();
        }
    }, [onScrolledToButtom]);

    return (
        <ChangeProvider>
            <ColumnWidthProvider>
                <ColumnsVisibilityFilterProvider>
                    <FixedColumnsProvider>
                        <ChangeColumnOrderProvider>
                            <ColumnsVisibilityFilter/>
                            <div className='root' style={{ height: ROW_HEIGHT * VISIBLE_ROW_COUNT }} onScroll={onScroll}>
                                <div style={{ height: topHeight }}/>
                                <table className='table'>
                                    <RowHead/>
                                    <tbody>
                                        {data.slice(start, start + VISIBLE_ROW_COUNT + 30).map((data, rowIndex) => (
                                            <Row
                                                alternation={(start + rowIndex) % 2 !== 0 ? 'even' : 'odd'}
                                                key={data.uuid}
                                                loading={false}
                                                data={data}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                                <div style={{ height: bottomHeight }} />
                            </div>
                        </ChangeColumnOrderProvider>
                    </FixedColumnsProvider>
                </ColumnsVisibilityFilterProvider>
            </ColumnWidthProvider>
        </ChangeProvider>
    );
}

export { Table };