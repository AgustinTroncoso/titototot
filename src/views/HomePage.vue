<script setup>
import NavBar from '../components/NavBar.vue'
import moduleName from '../components/styles/template.css' //import moduleName from '../components/styles/template.css?inline'
import Dashboard from '../components/Dashboard.vue'
defineProps ({
    
    })
</script>

<template>
   <div>
    <NavBar/>
    <div class="PageContainer">
        <div class="TitleTextContainer">
            <span>Dashboard</span>
        </div>
       <div class="dashBoardContainer">
        <Dashboard :todayBorrowedBooks="1" :passedBorrows="2" :a="7"/> <!--cambia el 1 a los libros que se prestaron en el dia.-->
       </div> 
    </div>
   </div>
</template>