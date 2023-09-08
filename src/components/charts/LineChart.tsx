import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                beginAtZero: true,
                stepSize: 100,
                max: 500,
                color: "white",
                font: {
                    size: 12,
                },
            },
        },
        x: {
            ticks: {
                beginAtZero: true,
                stepSize: 100,
                max: 500,
                color: "white",
                font: {
                    size: 12,
                },
            },
        },
    },
};

const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const data = {
    labels,
    datasets: [
        {
            data: [500, 300, 3, 100, 400, 100, 500, 500, 500, 500, 400, 600],
            borderColor: "#01b574",
            backgroundColor: "#01b574",
        },
        {
            data: [300, 2, 1, 100, 0, 200, 300, 200, 300, 400, 200, 200],
            borderColor: "#0075ff",
            backgroundColor: "#0075ff",
        },
    ],
};

const LineChart = () => {
    return <Line options={options} data={data} />;
};

export default LineChart;
