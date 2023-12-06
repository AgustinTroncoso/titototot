<template>
  <Pie :data="pieData" />
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "StockPie",
  components: {
    Pie
  },
  data() {
    return {
      pieData: {
        labels: ["Borrowed Books", "In Stock Books"],
        datasets: [
        {
          backgroundColor: ["#483078","#906090",],
          data: [40,70],
        },
      ],
      },
    
    };
  },
};
</script>

<!--asdsajdasdoiashdo-->
