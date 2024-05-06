import React from 'react';
import { type CommonColumnProps } from '../types';

interface Props extends CommonColumnProps {}

const ColumnText: React.FC<Props> = ({ columnConfig, data, onChange: onContextChange }) => {
    const [value, setValue] = React.useState(columnConfig.value(data));

    React.useEffect(() => {
        setValue(columnConfig.value(data));
    }, [columnConfig.value(data)]);

    const onChange: React.FocusEventHandler<HTMLInputElement> = React.useCallback((event) => {
        setValue(event.target.value);
    }, [value, setValue]);

    const onBlur = React.useCallback(() => {
        columnConfig.setValue({ value, data, set: onContextChange });
    }, [value]);

    return (
        <td>
            <input type="text" value={value} onBlur={onBlur} onChange={onChange}/>
        </td>
    );
}

export { ColumnText };