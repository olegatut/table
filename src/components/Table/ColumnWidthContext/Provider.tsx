import React from 'react';
import { ColumnWidthContext } from './context';

interface Props {
    children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
    const [activeColumnName, setActiveColumnName] = React.useState({
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
    });
    const [columnWidth, setColumnWidth] = React.useState({
        user_name: 300,
        user_id: 400,
        job_title: 60,
        job_description: 80,
        job_type: 40,
        job_area: 40,
        budget_jan: 40,
        budget_feb: 40,
        budget_mar: 40,
        budget_apr: 40,
        budget_may: 40,
        budget_jun: 40,
        budget_jul: 40,
        budget_aug: 40,
        budget_sep: 40,
        budget_oct: 40,
        budget_nov: 40,
        budget_dec: 40,
        budget_sum: 40,
        budget_first_quarter: 40,
        budget_second_quarter: 40,
        budget_third_quarter: 40,
        budget_fourth_quarter: 40,
    });

    return (
        <ColumnWidthContext.Provider value={{
            columnWidth,
            activeColumnName,
            setColumnWidth,
            setActiveColumnName,
        }}>
            {children}
        </ColumnWidthContext.Provider>
    );
}

export { Provider };