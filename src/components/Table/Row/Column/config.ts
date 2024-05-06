import { type ColumnConfig } from './types';

const config: ColumnConfig[] = [
    {
        title: 'id',
        name: 'user_id',
        type: 'text',
        value: (data) => data.uuid,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Имя пользователя',
        name: 'user_name',
        type: 'text',
        value: (data) => data.username,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Название работы',
        name: 'job_title',
        type: 'text',
        value: (data) => data.job.title,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Описание работы',
        name: 'job_description',
        type: 'text',
        value: (data) => data.job.descriptor,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Тип работы',
        name: 'job_type',
        type: 'text',
        value: (data) => data.job.type,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Область работы',
        name: 'job_area',
        type: 'text',
        value: (data) => data.job.area,
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Бюджет: январь',
        name: 'budget_jan',
        type: 'text',
        value: (data) => data.budget[0].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [0]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[0] && afterData?.budget?.[0]) {
                return beforeData?.budget[0] !== afterData?.budget[0];
            }
            return false
        },
    },
    {
        title: 'Бюджет: февраль',
        name: 'budget_feb',
        type: 'text',
        value: (data) => data.budget[1].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [1]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[1] && afterData?.budget?.[1]) {
                return beforeData?.budget[1] !== afterData?.budget[1];
            }
            return false
        },
    },
    {
        title: 'Бюджет: 1 квартал',
        name: 'budget_first_quarter',
        type: 'text',
        value: (data) => (data.budget[0] + data.budget[1]).toString(),
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Бюджет: апрель',
        name: 'budget_apr',
        type: 'text',
        value: (data) => data.budget[3].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [3]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[3] && afterData?.budget?.[3]) {
                return beforeData?.budget[3] !== afterData?.budget[3];
            }
            return false
        },
    },
    {
        title: 'Бюджет: май',
        name: 'budget_may',
        type: 'text',
        value: (data) => data.budget[4].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [4]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[4] && afterData?.budget?.[4]) {
                return beforeData?.budget[4] !== afterData?.budget[4];
            }
            return false
        },
    },
    {
        title: 'Бюджет: июнь',
        name: 'budget_jun',
        type: 'text',
        value: (data) => data.budget[5].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [5]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[5] && afterData?.budget?.[5]) {
                return beforeData?.budget[5] !== afterData?.budget[5];
            }
            return false
        },
    },
    {
        title: 'Бюджет: 2 квартал',
        name: 'budget_second_quarter',
        type: 'text',
        value: (data) => (data.budget[3] + data.budget[4] + data.budget[5]).toString(),
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Бюджет: июль',
        name: 'budget_jul',
        type: 'text',
        value: (data) => data.budget[6].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [6]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[6] && afterData?.budget?.[6]) {
                return beforeData?.budget[6] !== afterData?.budget[6];
            }
            return false
        },
    },
    {
        title: 'Бюджет: август',
        name: 'budget_aug',
        type: 'text',
        value: (data) => data.budget[7].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [7]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[7] && afterData?.budget?.[7]) {
                return beforeData?.budget[7] !== afterData?.budget[7];
            }
            return false
        },
    },
    {
        title: 'Бюджет: сентябрь',
        name: 'budget_sep',
        type: 'text',
        value: (data) => data.budget[8].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [8]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[8] && afterData?.budget?.[8]) {
                return beforeData?.budget[8] !== afterData?.budget[8];
            }
            return false
        },
    },
    {
        title: 'Бюджет: 3 квартал',
        name: 'budget_third_quarter',
        type: 'text',
        value: (data) => (data.budget[6] + data.budget[7] + data.budget[8]).toString(),
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Бюджет: октябрь',
        name: 'budget_oct',
        type: 'text',
        value: (data) => data.budget[9].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [9]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[9] && afterData?.budget?.[9]) {
                return beforeData?.budget[9] !== afterData?.budget[9];
            }
            return false
        },
    },
    {
        title: 'Бюджет: ноябрь',
        name: 'budget_nov',
        type: 'text',
        value: (data) => data.budget[10].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [10]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[10] && afterData?.budget?.[10]) {
                return beforeData?.budget[10] !== afterData?.budget[10];
            }
            return false
        },
    },
    {
        title: 'Бюджет: декабрь',
        name: 'budget_dec',
        type: 'text',
        value: (data) => data.budget[11].toString(),
        setValue: ({ value, data, set }) => {
            set({
                ...data,
                budget: {
                    ...data.budget,
                    [11]: Number(value),
                },
            });
        },
        isChanged: ({ beforeData, afterData }) => {
            if (beforeData?.budget?.[11] && afterData?.budget?.[11]) {
                return beforeData?.budget[11] !== afterData?.budget[11];
            }
            return false
        },
    },
    {
        title: 'Бюджет: 4 квартал',
        name: 'budget_fourth_quarter',
        type: 'text',
        value: (data) => (data.budget[9] + data.budget[10] + data.budget[11]).toString(),
        setValue: () => {},
        isChanged: () => false,
    },
    {
        title: 'Бюджет: сумма',
        name: 'budget_sum',
        type: 'text',
        value: ({ budget }) => {
            return (
                budget[0] +
                budget[1] +
                budget[3] +
                budget[4] +
                budget[5] +
                budget[6] +
                budget[7] +
                budget[8] +
                budget[9] +
                budget[10] +
                budget[11]
            ).toString();
        },
        setValue: () => {},
        isChanged: () => false,
    },
];

export { config };
