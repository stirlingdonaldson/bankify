"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: "60%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const balances = accounts.map((account) => account.currentBalance);
  const accountNames = accounts.map((account) => account.name);

  const data = {
    labels: accountNames,
    datasets: [
      {
        label: "Banks",
        data: balances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
