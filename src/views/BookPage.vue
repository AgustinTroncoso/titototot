<script setup>
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Book from '../components/Book.vue'
import books from '../assets/books.json'
defineProps(["books"]);
</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Books</span>
      </div>
      <div class="createButtonContainer">
        <router-link to="/createbookpage">
          <button class="createButton">Create Book</button>
        </router-link>
      </div>
      <Book v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>
<style>
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
