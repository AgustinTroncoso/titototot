<script setup>
import { onMounted } from 'vue';
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Book from '../components/Book.vue'
import books from '../assets/books.json'
import axios from 'axios';
import { ref } from "vue";

const booksData = ref([]);

onMounted(async () => {
  try {
    // Obtén los datos de cómics desde el backend
    const comicsResponse = await axios.get('http://localhost:8080/corazondelatorback/getComic');
    booksData.value = booksData.value.concat(comicsResponse.data);

    const newspaperResponse = await axios.get('http://localhost:8080/corazondelatorback/getNewspaper');
    booksData.value = booksData.value.concat(newspaperResponse.data);

    const encyclopediaResponse = await axios.get('http://localhost:8080/corazondelatorback/getEncyclopedia');
    booksData.value = booksData.value.concat(encyclopediaResponse.data);

    const readingbookResponse = await axios.get('http://localhost:8080/corazondelatorback/getReadingbook');
    booksData.value = booksData.value.concat(readingbookResponse.data);

    const dictionaryResponse = await axios.get('http://localhost:8080/corazondelatorback/getDictionary');
    booksData.value = booksData.value.concat(dictionaryResponse.data);

  } catch (error) {
    console.error('Error al obtener los libros:', error);
  }
});

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
      <Book v-for="book in booksData" :key="book.id" :book="book" />
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
