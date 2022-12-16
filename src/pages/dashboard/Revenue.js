import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from "chart.js";
import {
    monthOfCurrentYear,
    currentYear,
} from "../../constants/const/dashboard";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "",
        },
    },
};

export const data = {
    labels: monthOfCurrentYear,
    datasets: [
        {
            labels: "",
            data: monthOfCurrentYear.map(() => Math.ceil(Math.random() * 100)),
            borderColor: "#2f99f8",
            backgroundColor: "#2f99f8",
        },
    ],
};

const Revenue = () => {
    return (
        <div className="text-center">
            <Bar data={data} options={options} width={"1000"} height={500} />
            <p className="mt-4 font-bold text-[18px]">
                Revenue chart for the months of the year {currentYear}
            </p>
        </div>
    );
};

export default Revenue;
