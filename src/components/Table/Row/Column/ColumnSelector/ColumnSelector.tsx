import React from 'react';
import { CommonColumnProps } from '../types';

interface Props extends CommonColumnProps {}

const ColumnSelector: React.FC<Props> = ({ columnConfig: { value }, data }) => {
    return (
        <td>{ value(data) }</td>
    );
}

export { ColumnSelector };
