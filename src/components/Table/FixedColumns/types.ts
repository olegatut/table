import { ColumnName } from '../Row/Column';

type Fixed = 'left' | 'rigth' | null;

type FixedColumnNames = Record<ColumnName, Fixed>

interface SetFixedColumnNames {
    (fixedColumnNames: FixedColumnNames): void
}

export {
    type ColumnName,
    type Fixed,
    type FixedColumnNames,
    type SetFixedColumnNames,
}