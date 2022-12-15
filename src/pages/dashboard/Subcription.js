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
            position: "top",
        },
        title: {
            // display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Number of subscribers in the last 7 days",
            data: labels.map(() => Math.ceil(Math.random() * 1000)),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

const Subcription = () => {
    return (
        <div>
            {/* <Chart type="line" data={[3, 5, 6, 2, 4, 5]} /> */}
            <Line options={options} data={data} width={1000} height={500} />
        </div>
    );
};

export default Subcription;
