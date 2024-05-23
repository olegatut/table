import React from 'react';
import { type ColumnName } from '../Row/Column';

type ColumnNameOrder = ColumnName[];

interface SetColumnNameOrder {
    (columnNameOrder: ColumnNameOrder): void;
}

interface Params {
    position: React.CSSProperties['position'],
    translateX: number,
}

export {
    type Params,
    type ColumnName,
    type ColumnNameOrder,
    type SetColumnNameOrder,
}