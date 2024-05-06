import React from 'react';

import { type ColumnName } from '../Row/Column';
import { DataResponse } from '../../../types';
import { ChangeContext } from './context';

interface UseChangeContext {
    (params: Params): Return
}

interface Params {
    rowId: string,
    columnName: ColumnName;
}

interface Return {
    changes: DataResponse[];
    addChange: AddChange;
}

interface AddChange {
    (params: AddChangeParams): void;
}

interface AddChangeParams {
    updatedData: DataResponse;
}

const useChangeContext: UseChangeContext = ({ rowId }) => {
    const { changes: contextChanges, setChanges: setContextChanges } = React.useContext(ChangeContext);

    const addChange: AddChange = React.useCallback(({ updatedData }) => {
        setContextChanges({
            ...contextChanges,
            [rowId]: [
                updatedData,
                ...contextChanges[rowId] ?? [],
            ],
        });
    }, [contextChanges, rowId, setContextChanges]);

    const changes = React.useMemo(() => contextChanges[rowId] ?? [], [contextChanges, rowId]);

    return {
        changes,
        addChange,
    };
};

export { useChangeContext };
