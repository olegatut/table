import React from 'react';
import { ColumnsVisibilityFilterContext } from './context';

interface Props {
    children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
    const [visibilityColumnNames, setVisibilityColumnNames] = React.useState({
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
    });

    return (
        <ColumnsVisibilityFilterContext.Provider value={{ visibilityColumnNames, setVisibilityColumnNames }}>
            {children}
        </ColumnsVisibilityFilterContext.Provider>
    );
}

export { Provider };