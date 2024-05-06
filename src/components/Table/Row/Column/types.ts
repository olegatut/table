import { type DataResponse } from '../../../../types';

interface CommonColumnProps {
    columnConfig: ColumnConfig;
    data: DataResponse;
    onChange: (data: DataResponse) => void
}

interface ColumnConfig {
    title: string;
    name: ColumnName;
    type: ColumnType;
    value: (data: DataResponse) => string;
    setValue: (params: {
        value: any,
        data: DataResponse,
        set: (data: DataResponse) => void
    }) => void;
    isChanged: (params: {
        beforeData: DataResponse;
        afterData: DataResponse;
    }) => boolean;
}

type ColumnName =
    'user_name' |
    'user_id' |
    'job_title' |
    'job_description' |
    'job_type' |
    'job_area' |
    'budget_jan' |
    'budget_feb' |
    'budget_mar' |
    'budget_apr' |
    'budget_may' |
    'budget_jun' |
    'budget_jul' |
    'budget_aug' |
    'budget_sep' |
    'budget_oct' |
    'budget_nov' |
    'budget_dec' |
    'budget_first_quarter' |
    'budget_second_quarter' |
    'budget_third_quarter' |
    'budget_fourth_quarter' |
    'budget_sum' ;

type ColumnType = 'text' | 'selector';

type MonthName = 
    'jan' |
    'feb' |
    'mar' |
    'apr' |
    'may' |
    'jun' |
    'jul' |
    'aug' |
    'sep' |
    'oct' |
    'nov' |
    'dec' ;

export {
    type ColumnConfig,
    type ColumnName,
    type ColumnType,
    type CommonColumnProps,
    type MonthName,
};