import React from 'react';
import { ColumnNameOrder, SetColumnNameOrder } from './types';

interface ContextParams {
    columnNameOrder: ColumnNameOrder;
    setColumnNameOrder: SetColumnNameOrder;
}

const ChangeColumnOrderContext = React.createContext<ContextParams>({
    columnNameOrder: [
        'user_name',
        'user_id',
        'job_title',
        'job_description',
        'job_type',
        'job_area',
        'budget_jan',
        'budget_feb',
        'budget_apr',
        'budget_may',
        'budget_jun',
        'budget_jul',
        'budget_aug',
        'budget_sep',
        'budget_oct',
        'budget_nov',
        'budget_dec',
        'budget_sum',
        'budget_first_quarter',
        'budget_second_quarter',
        'budget_third_quarter',
        'budget_fourth_quarter',
    ],
    setColumnNameOrder: () => {},
});

export { ChangeColumnOrderContext };
