import dayjs from "dayjs";

export const formatDate = "DD/MM/YYYY";
export const formatMonth = "MM";

export const labelLastSevenDays = [...Array(7)].map((item, index) =>
    dayjs()
        .subtract(-index - 1, "day")
        .format(formatDate)
);

export const monthOfCurrentYear = [...Array(12)].map((item, index) =>
    dayjs().month(index).format(formatMonth)
);

export const currentYear = dayjs().year();
