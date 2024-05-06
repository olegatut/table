import React from 'react';

import { ColumnName } from '../../Row/Column';
import { useColumnHead } from './useColumnHead';

import './ColumnHead.css';

interface Props {
    columnName: ColumnName;
    title: string;
}

const ColumnHead: React.FC<Props> = ({ columnName, title }) => {
    const { width, position, translateX, left, right, fixed, isActive, onLeftPinHandler, onRightPinHandler, onMouseDown, mouseDownHandler } = useColumnHead({ columnName });

    return (
        <th
            className={`column_head ${isActive ? 'column_head_active' : ''} ${columnName} ${fixed ? 'column_head_fixed' : ''}`}
            style={{
                width,
                left,
                right,
                position,
                transform: `translateX(${translateX}px)`,
            }}
            onMouseDown={mouseDownHandler}
        >
            <div className={'column_head_left_pin'} onClick={onLeftPinHandler}>«</div>
            {title}
            <div className={'column_head_rigth_pin'} onClick={onRightPinHandler}>»</div>
            <div
                className='column_head__slider'
                onMouseDown={onMouseDown}
            />
        </th>
    );
}

export { ColumnHead };
