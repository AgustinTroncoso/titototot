<script>
import BarChart2 from "../components/BarChart2.vue";
import StockPie from "../components/StockPie.vue";
export default {
  name: "App",
  components: { BarChart2, StockPie },
};
</script>
<script setup>

const props = defineProps([
  'todayBorrowedBooks',
  'passedBorrows',
  'a'
  
]);

</script>


<template>
  
  <div class="dashBoardContainer">
    <div class="libraryStockContainer">
      
      <div class="title">Total Stock</div>
      <div class="pieGraphic">
        <StockPie />
        <!--grafico circular que tiene una parte con el stock que hay y otra con los que estan prestados-->
      </div>
      <div class="stockNumbersContainer">
        <span>Borrowed Books:{{a}}% </span>
        <span> In Stock Books:X%</span>
      </div>
    </div>
    <div class="calendar">
      <div class="title">Calendar</div>
      <div class="calendarContainer">
        <!-- <VCalendar />-->
        <VDatePicker v-model="date" />
      </div>
    </div>

    <div class="thisWeekBorowed">
      <div class="title">This Week Borrowed</div>
      <div class="linesGraphic">
        <BarChart2 />
        <!-- grafico de barras con los 7 dias de la semana-->
      </div>
    </div>

    <div class="todayBorrowed">
      <div class="title">Today Borrowed Books: {{ props.todayBorrowedBooks }}</div>
    </div>
    
    <div class="passedBorrowsContainer">
      <div class="title">Today Passed Books: {{ props.passedBorrows }}</div>
    </div>
  </div>
</template>

<style scoped>
.passedBorrowsContainer{
  background-color: #835cd3;
  border-radius: 10px;
  padding: 15px;
}
.libraryStockContainer{
  background-color: white;
  border-radius: 15px;
  color:black;
}
.dashBoardContainer {
  background-color: #483078;
  padding: 20px;
  border-radius: 15px;
}
.libraryStock {
  background-color: #835cd3;
  border-radius: 10px;
  padding: 15px;
}
.calendar {
  background-color: #835cd3;
  border-radius: 10px;
  padding: 15px;
}
.thisWeekBorowed {
  background-color: #835cd3;
  border-radius: 10px;
  padding: 15px;
}
.todayBorrowed {
  background-color: #835cd3;
  border-radius: 10px;
  padding: 15px;
}
.linesGraphic {
  background-color: white;
  border-radius: 8px;
}
</style>
