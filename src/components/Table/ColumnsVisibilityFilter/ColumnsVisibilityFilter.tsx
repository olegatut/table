import React from 'react';

import { ColumnName, config } from '../Row/Column';
import { useColumnsVisibilityFilter } from './useColumnsVisibilityFilter';

const ColumnsVisibilityFilter: React.FC = () => {
    const { visibilityColumnNames, setColumnNameVisibility } = useColumnsVisibilityFilter();

    const createChangeHandler: (columnName: ColumnName) => React.ChangeEventHandler<HTMLInputElement> = React.useCallback((columnName) => () => {
        setColumnNameVisibility({
            columnName,
            visibility: !visibilityColumnNames[columnName],
        });
    }, [visibilityColumnNames, setColumnNameVisibility]);

    return (
        <fieldset>
            <legend>Выберите колонки которые нужно отобразить</legend>
            {config.map(({ name, title }) => (
                <span>
                    <input type="checkbox" id={name} name={name} checked={visibilityColumnNames[name]} onChange={createChangeHandler(name)} />
                    <label htmlFor={name} >{ title }</label>
                </span>
            ))}
        </fieldset>
    );
};

export { ColumnsVisibilityFilter };