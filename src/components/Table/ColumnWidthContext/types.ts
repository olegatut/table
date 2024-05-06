import { type ColumnName } from '../Row/Column';

type ColumnWidth = Record<ColumnName, number>;
type ActiveColumnName = Record<ColumnName, boolean>;

interface SetColumnWidth {
    (columnWidth: ColumnWidth): void;
}

interface SetActiveColumnName {
    (acitveColumnName: ActiveColumnName): void;
}

export {
    type ColumnWidth,
    type ColumnName,
    type ActiveColumnName,
    type SetColumnWidth,
    type SetActiveColumnName,
};
