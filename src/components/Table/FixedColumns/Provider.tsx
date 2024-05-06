import React from 'react';

import { FixedColumnContext } from './context';
import { FixedColumnNames } from './types';

interface Props {
    children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
    const [fixedColumnNames, setFixedColumnNames] = React.useState<FixedColumnNames>({
        user_name: null,
        user_id: null,
        job_title: null,
        job_description: null,
        job_type: null,
        job_area: null,
        budget_jan: null,
        budget_feb: null,
        budget_mar: null,
        budget_apr: null,
        budget_may: null,
        budget_jun: null,
        budget_jul: null,
        budget_aug: null,
        budget_sep: null,
        budget_oct: null,
        budget_nov: null,
        budget_dec: null,
        budget_sum: null,
        budget_first_quarter: null,
        budget_second_quarter: null,
        budget_third_quarter: null,
        budget_fourth_quarter: null,
    });

    return (
        <FixedColumnContext.Provider value={{ fixedColumnNames, setFixedColumnNames }}>
            { children }
        </FixedColumnContext.Provider>
    );
}

export { Provider };
