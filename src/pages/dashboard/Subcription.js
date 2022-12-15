import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { labelLastSevenDays } from "../../constants/const/dashboard";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
        title: {},
    },
};

export const data = {
    labels: labelLastSevenDays,
    datasets: [
        {
            labels: "",
            data: labelLastSevenDays.map(() => Math.ceil(Math.random() * 100)),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

const Subcription = () => {
    return (
        <div className="text-center">
            <Line data={data} options={options} width={"1000"} height={500} />
            <p className="mt-4 font-bold text-[18px]">
                Number of subscribers in the last 7 days
            </p>
        </div>
    );
};

export default Subcription;
