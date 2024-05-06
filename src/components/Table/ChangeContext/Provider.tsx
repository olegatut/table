import React from 'react';

import { ChangeRowMap } from './types';
import { ChangeContext } from './context';

interface Props {
    children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
    const [changes, setChanges] = React.useState<ChangeRowMap>({});

    return (
        <ChangeContext.Provider value={{ changes, setChanges }} >
            {children}
        </ChangeContext.Provider>
    );
}

export { Provider };