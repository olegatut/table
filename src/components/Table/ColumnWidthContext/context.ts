import React from 'react';
import {
    type ColumnWidth,
    type ActiveColumnName,
    type SetColumnWidth,
    type SetActiveColumnName,
    type ColumnName,
} from './types';

interface ContextParams {
    activeColumnName: ActiveColumnName;
    columnWidth: ColumnWidth;
    setColumnWidth: SetColumnWidth;
    setActiveColumnName: SetActiveColumnName,
}

const ColumnWidthContext = React.createContext<ContextParams>({
    activeColumnName: {
        user_name: false,
        user_id: false,
        job_title: false,
        job_description: false,
        job_type: false,
        job_area: false,
        budget_jan: false,
        budget_feb: false,
        budget_mar: false,
        budget_apr: false,
        budget_may: false,
        budget_jun: false,
        budget_jul: false,
        budget_aug: false,
        budget_sep: false,
        budget_oct: false,
        budget_nov: false,
        budget_dec: false,
        budget_sum: false,
        budget_first_quarter: false,
        budget_second_quarter: false,
        budget_third_quarter: false,
        budget_fourth_quarter: false,
    },
    columnWidth: {
        user_name: 0,
        user_id: 0,
        job_title: 0,
        job_description: 0,
        job_type: 0,
        job_area: 0,
        budget_jan: 0,
        budget_feb: 0,
        budget_mar: 0,
        budget_apr: 0,
        budget_may: 0,
        budget_jun: 0,
        budget_jul: 0,
        budget_aug: 0,
        budget_sep: 0,
        budget_oct: 0,
        budget_nov: 0,
        budget_dec: 0,
        budget_sum: 0,
        budget_first_quarter: 0,
        budget_second_quarter: 0,
        budget_third_quarter: 0,
        budget_fourth_quarter: 0, 
    },
    setColumnWidth: () => {},
    setActiveColumnName: () => {},
});

export { ColumnWidthContext };
