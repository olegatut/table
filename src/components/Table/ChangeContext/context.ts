import React from 'react';
import { type ChangeRowMap, type SetChanges } from './types';

interface ContextParams {
    changes: ChangeRowMap;
    setChanges: SetChanges;
}

const ChangeContext = React.createContext<ContextParams>({
    changes: {},
    setChanges: () => {},
});

export { ChangeContext };
