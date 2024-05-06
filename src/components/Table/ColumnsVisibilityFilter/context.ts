import React from 'react';
import { type VisibleColumnNames, type SetVisibilityColumnNames } from './types';

interface ContextParams {
    visibilityColumnNames: VisibleColumnNames;
    setVisibilityColumnNames: SetVisibilityColumnNames;
}

const ColumnsVisibilityFilterContext = React.createContext<ContextParams>({
    visibilityColumnNames: {
        user_name: true,
        user_id: true,
        job_title: true,
        job_description: true,
        job_type: true,
        job_area: true,
        budget_jan: true,
        budget_feb: true,
        budget_mar: true,
        budget_apr: true,
        budget_may: true,
        budget_jun: true,
        budget_jul: true,
        budget_aug: true,
        budget_sep: true,
        budget_oct: true,
        budget_nov: true,
        budget_dec: true,
        budget_sum: true,
        budget_first_quarter: true,
        budget_second_quarter: true,
        budget_third_quarter: true,
        budget_fourth_quarter: true,
    },
    setVisibilityColumnNames: () => {},
});

export { ColumnsVisibilityFilterContext };
