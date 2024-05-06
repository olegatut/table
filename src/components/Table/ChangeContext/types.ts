import { DataResponse } from '../../../types';

type ChangeRowMap = Record<string, DataResponse[]>

interface SetChanges {
    (state: ChangeRowMap): void;
}

export {
    type ChangeRowMap,
    type SetChanges,
}