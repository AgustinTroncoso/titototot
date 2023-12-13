<script setup>
import { onMounted } from 'vue';
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Borrow from "../components/Borrow.vue";
import borrows from "../assets/borrows.json";
import axios from 'axios';
import { ref } from "vue";

const borrowsData = ref([]);
defineProps(["borrows"]);

onMounted(async () => {
  try {
    // Obtén los datos de borrows desde el backend
    const borrowsResponse = await axios.get('http://localhost:8080/corazondelatorback/getborrow');
    borrowsData.value = borrowsData.value.concat(borrowsResponse.data);

  } catch (error) {
    console.error('Error al obtener los borrows:', error);
  }
});

</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Borrows</span>
      </div>
      <div class="createButtonContainer">
        <router-link to="/createborrowpage">
          <button class="createButton">Create algo</button>
        </router-link>
      </div>
      <Borrow class="borrow"
      v-for="borrow in borrowsData" :key="borrow.id" :borrow="borrow"
      />
    </div>
  </div>
</template>
<style>
.borrow{
  margin-top: 15px;
}
.createButtonContainer {
  position: relative;
  left: 40%;
  bottom: 50px;
}
.createButton {
  border: none;
  background-color: #00ff1a;
  border-radius: 15px;
  width: 180px;
  height: 51px;
}
</style>
