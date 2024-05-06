import React from 'react';
import { type ColumnName } from '../Row/Column';

type ParamsColumnNames = Record<ColumnName, Params>

interface SetParamsColumnNames {
    (visibilityColumnNames: ParamsColumnNames): void;
}

interface Params {
    position: React.CSSProperties['position'],
    translateX: number,
}

export {
    type Params,
    type ColumnName,
    type ParamsColumnNames,
    type SetParamsColumnNames,
}