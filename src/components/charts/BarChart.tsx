import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

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

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: [300, 200, 500, 400, 300, 200, 500],
            borderColor: "#FFF",
            backgroundColor: "#05CD99",
        },
    ],
};

const BarChart = () => {
    return <Bar options={options} data={data} />;
};

export default BarChart;
