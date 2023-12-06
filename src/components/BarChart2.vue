<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        datasets: [
          {
            label: "Borrowed Books",
            backgroundColor: "#835cd3",
            data: [40, 20, 12, 70, 50],
          },
        ],
      },
    };
  },
};
</script>
