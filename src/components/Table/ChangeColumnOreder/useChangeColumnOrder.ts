import { useCallback, useContext } from 'react';
import { arrayMoveImmutable } from 'array-move';
import { keyBy } from 'lodash';

import { ColumnName, ColumnNameOrder } from './types';
import { ChangeColumnOrderContext } from './context';
import { config } from '../Row/Column';

interface UseChangeColumnOrder {
    (params: UseChangeColumnOrderParams): Return;
}

interface UseChangeColumnOrderParams {
    columnName: ColumnName;
}

interface Return {
    columnNameOrder: ColumnNameOrder;
    mouseDownHandler: MouseDownHandler;
}

type MouseDownHandler = React.MouseEventHandler<HTMLElement>;

const useChangeColumnOrder: UseChangeColumnOrder = ({ columnName }) => {
    const { columnNameOrder, setColumnNameOrder } = useContext(ChangeColumnOrderContext);

    const columnWidths: Record<ColumnName, number> = {
        user_name: 0,
        user_id: 0,
        job_title: 0,
        job_description: 0,
        job_type: 0,
        job_area: 0,
        budget_jan: 0,
        budget_feb: 0,
        budget_apr: 0,
        budget_may: 0,
        budget_jun: 0,
        budget_jul: 0,
        budget_aug: 0,
        budget_sep: 0,
        budget_oct: 0,
        budget_nov: 0,
        budget_dec: 0,
        budget_sum: 0,
        budget_first_quarter: 0,
        budget_second_quarter: 0,
        budget_third_quarter: 0,
        budget_fourth_quarter: 0,
    };

    const mouseDownHandler: MouseDownHandler = useCallback((event) => {
        const columnElements = document.querySelectorAll('.column_head');

        columnElements.forEach((columnElement) => {
            (columnElement as HTMLElement).style.transform = `translateX(0px)`;
            (columnElement as HTMLElement).style.userSelect = `none`;
            columnWidths[(columnElement as HTMLElement).dataset.columnname as ColumnName] = (columnElement as HTMLElement).offsetWidth;
        });

        const columnElement: HTMLElement = event.target as HTMLElement;
        const between = event.pageX - columnElement.getBoundingClientRect().left;
        columnElement.style.position = 'absolute';
        columnElement.style.zIndex = '1';

        const columnRanges = keyBy(columnNameOrder.reduce<{name: ColumnName; range: { from: number; to: number }}[]>((prevColumRanges, name, index) => {
            const prevRangeTo = prevColumRanges[index - 1]?.range?.to ?? 0;
            return ([
                ...prevColumRanges,
                {
                    name,
                    range: {
                        from: prevRangeTo,
                        to: prevRangeTo + columnWidths[columnName],
                    },
                },
            ]);
        }, []), 'name');

        const afterColumns = columnNameOrder.filter((name) => {
            if (name === columnName) return false;
            if (columnRanges[name].range.from >= columnRanges[columnName].range.to) return true;
        });

        const beforeColumns = columnNameOrder.filter((name) => {
            if (name === columnName) return false;
            if (columnRanges[name].range.to <= columnRanges[columnName].range.from) return true;
        });

        const onMouseMove = (event: MouseEvent) => {
            const cursor = event.pageX - between;
            columnElement.style.left = `${cursor}px`;

            afterColumns.forEach((name) => {
                const columnElement = document.querySelector<HTMLElement>(`[data-columnname="${name}`);
                columnElement?.style.transform && (columnElement.style.transform = event.pageX > columnRanges[name].range.from ? `translateX(-${columnWidths[columnName]}px)` : `translateX(0px)`);
            });

            beforeColumns.forEach((name) => {
                const columnElement = document.querySelector<HTMLElement>(`[data-columnname="${name}`);
                columnElement?.style.transform && (columnElement.style.transform = event.pageX < columnRanges[name].range.to ? `translateX(${columnWidths[columnName]}px)` : `translateX(0px)`);
            });
        }

        const onMouseUp = (event: MouseEvent) => {
            const targetColumnName = columnNameOrder.find((name) => event.pageX >= columnRanges[name].range.from && event.pageX <= columnRanges[name].range.to);

            if (targetColumnName) {
                const columnElements = document.querySelectorAll('.column_head');
                columnElements.forEach((columnElement) => {
                    (columnElement as HTMLElement).style.transform = `none`;
                    (columnElement as HTMLElement).style.position = `static`;
                    (columnElement as HTMLElement).style.left = `auto`;
                });


                const columnNameIndex = columnNameOrder.indexOf(columnName);
                const targetColumnNameIndex = columnNameOrder.indexOf(targetColumnName);

                setColumnNameOrder(arrayMoveImmutable(columnNameOrder, columnNameIndex, targetColumnNameIndex));
            }

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }, [columnName, columnNameOrder, setColumnNameOrder]);

    return {
        columnNameOrder,
        mouseDownHandler,
    };
}

export {
    useChangeColumnOrder,
    type MouseDownHandler,
};
