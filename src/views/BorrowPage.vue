<script setup>
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Borrow from "../components/Borrow.vue";
import borrows from "../assets/borrows.json";
defineProps(["borrows"]);
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
        v-for="borrow in borrows"
        :key="borrow.id"
        :name="borrow.name"
        :rut="borrow.rut"
        :book="borrow.book"
        :borrowDate="borrow.borrowDate"
        :returnDate="borrow.returnDate"
        :authorizedBy="borrow.authorizedBy"
        :state="borrow.state"
        :passedReturn="borrow.passedReturn"
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
