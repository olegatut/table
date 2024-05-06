import { type ColumnName } from '../Row/Column';

type VisibleColumnNames = Record<ColumnName, boolean>

interface SetVisibilityColumnNames {
    (visibilityColumnNames: VisibleColumnNames): void;
}

export {
    type ColumnName,
    type VisibleColumnNames,
    type SetVisibilityColumnNames,
}