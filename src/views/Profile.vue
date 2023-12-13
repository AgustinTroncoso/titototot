<script setup>
import NavBar from "../components/NavBar.vue";
import axios from "axios";
import Profilecomp from "../components/ProfileComp.vue";
import moduleName from "../components/styles/template.css";
import { ref, onMounted } from "vue";
const props = defineProps(["user"]);
const users = ref([]);
const userId = 1;

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/corazondelatorback/getUserid/${userId}`);
    if (response.status === 200) {
      users.value = [response.data]; // Coloca el usuario en un array para mantener la estructura de datos
    } else {
      console.error("Error en la solicitud al servidor:", response);
    }
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
});

</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Profile</span>
      </div>
      <div class="createButtonContainer">
        <router-link to="/updateprofile">
          <button class="createButton">Update profile</button>
        </router-link>
      </div>
      <div class="profileCompContainer">
        <Profilecomp v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<style>
.profileCompContainer {
  display: flex;
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