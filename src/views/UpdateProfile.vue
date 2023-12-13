<script setup>
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import axios from "axios";

import { ref } from "vue";
const name = ref("");
const user = ref("");
const genre = ref("");
const position = ref("");
const image = ref("");
const password = ref("");

const userId = ref("");

const props = defineProps(["user"]);
const handleSubmitUser = async () => {
  try {
    const formData = {
      name: name.value,
      user: user.value,
      genre: genre.value,
      position: position.value,
      image: image.value,
      password: password.value,
    };
    console.log("estoy entrando al metodo");
    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addUser",
      formData
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

const handleDeleteUser = async () => {
  if (!userId.value) {
    console.error("ID de usuario no válido");
    return;
  }

  const confirmDelete = window.confirm(
    "¿Seguro que deseas eliminar a este usuario?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await axios.delete(
      `http://localhost:8080/corazondelatorback/deleteUser/${userId.value}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Update Profile</span>
      </div>

      <div class="deleteUserContainer">
        <form @submit.prevent="handleDeleteUser">
          <p class="informationText">Eliminar por ID</p>
          <div class="inputname">
            <input
              type="text"
              class="form-control inputUser"
              placeholder="ID..."
              aria-label="ID"
              aria-describedby="basic-addon1"
              v-model="userId"
            />
          </div>
          <button class="deleteButton">Eliminar Usuario</button>
        </form>
      </div>
      <div class="updataprofilecontainer">
        <form class="userNameInputContainer" @submit.prevent="handleSubmitUser">
          <div class="column">
            <p class="informationText">Name</p>
            <div class="inputname">
              <input
                type="text"
                class="form-control inputUser"
                placeholder="   Name..."
                aria-label="Name"
                aria-describedby="basic-addon1"
                v-model="userid"
              />
            </div>
            <p class="informationText">Username</p>
            <div class="inputusername">
              <input
                type="text"
                class="form-control inputUser"
                placeholder="   Username..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="user"
              />
            </div>
            <p class="informationText">Genre</p>
            <select id="Genre" name="opciones" v-model="genre">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p class="informationText">Position</p>
            <select id="Position" name="opciones" v-model="position">
              <option value="FullTime">FullTime</option>
              <option value="PartTime">PartTime</option>
            </select>
            <p class="informationText">Image</p>
            <input
              v-model="image"
              class="form-control inputUser"
              type="text"
              name="image"
              placeholder="image.url"
            />
            <p class="informationText">Password</p>
            <input
              v-model="password"
              class="form-control inputUser"
              type="text"
              name="Password"
              placeholder="**** "
            />
          </div>

          <button type="submit" class="createButton">Create Profile</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.informationText {
  margin-top: 10px;
}
select {
  background-color: #835cd3;
  border-radius: 15px;
  border: none;
  color: white;
  margin-top: 2px;
  margin-bottom: 2px;
}

.createButton {
  border: none;
  background-color: #00ff1a;
  border-radius: 15px;
  width: 80px;
  text-size-adjust: 1;
  height: 80px;
}
.deleteButton {
  border: none;
  background-color: #00ff1a;
  border-radius: 15px;
  width: 80px;
  text-size-adjust: 1;
  height: 80px;
}
.column {
  flex: 1;
  margin-right: 30px;
  text-align: justify;
}
.userNameInputContainer {
  display: flex;
  width: 700px;
  margin-bottom: 10%;
}
</style>
