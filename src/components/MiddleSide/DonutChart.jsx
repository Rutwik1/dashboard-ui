import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
        // labels: ["Blue", "Green", "Red"],
        datasets: [
            {
                data: [38, 2, 38, 2, 2, 18, 2, 2],
                backgroundColor: ["#205eda", "transparent", "#55cb8a", "transparent", "transparent", "#fa7367", "transparent", "transparent"],
                borderWidth: 0,
                cutout: "80%",
                rotation: -90
            },
        ],
    };


    return <Doughnut data={data} />;
}

export default DonutChart;
