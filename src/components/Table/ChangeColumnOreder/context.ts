import React from 'react';
import { ParamsColumnNames, SetParamsColumnNames } from './types';

interface ContextParams {
    paramsColumnNames: ParamsColumnNames;
    setParamsColumnNames: SetParamsColumnNames;
}

const ChangeColumnOrderContext = React.createContext<ContextParams>({
    paramsColumnNames: {
        user_name: {
            position: 'static',
            translateX: 0,
        },
        user_id: {
            position: 'static',
            translateX: 0,
        },
        job_title: {
            position: 'static',
            translateX: 0,
        },
        job_description: {
            position: 'static',
            translateX: 0,
        },
        job_type: {
            position: 'static',
            translateX: 0,
        },
        job_area: {
            position: 'static',
            translateX: 0,
        },
        budget_jan: {
            position: 'static',
            translateX: 0,
        },
        budget_feb: {
            position: 'static',
            translateX: 0,
        },
        budget_mar: {
            position: 'static',
            translateX: 0,
        },
        budget_apr: {
            position: 'static',
            translateX: 0,
        },
        budget_may: {
            position: 'static',
            translateX: 0,
        },
        budget_jun: {
            position: 'static',
            translateX: 0,
        },
        budget_jul: {
            position: 'static',
            translateX: 0,
        },
        budget_aug: {
            position: 'static',
            translateX: 0,
        },
        budget_sep: {
            position: 'static',
            translateX: 0,
        },
        budget_oct: {
            position: 'static',
            translateX: 0,
        },
        budget_nov: {
            position: 'static',
            translateX: 0,
        },
        budget_dec: {
            position: 'static',
            translateX: 0,
        },
        budget_sum: {
            position: 'static',
            translateX: 0,
        },
        budget_first_quarter: {
            position: 'static',
            translateX: 0,
        },
        budget_second_quarter: {
            position: 'static',
            translateX: 0,
        },
        budget_third_quarter: {
            position: 'static',
            translateX: 0,
        },
        budget_fourth_quarter: {
            position: 'static',
            translateX: 0,
        },
    },
    setParamsColumnNames: () => {},
});

export { ChangeColumnOrderContext };
