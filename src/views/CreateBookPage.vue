<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Input from "../components/Input.vue";
const bookTypes = [
  "Newspaper",
  "Encyclopedia",
  "ReadingBook",
  "Dictionary",
  "Comic",
];
const selectedBookType = ref("Newspaper");
defineProps({});
</script>
<script>
import Input from "../components/Input.vue";

export default {
  components: {
    Input,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Create Book</span>
      </div>
      <div class="bookSelectorContainer">
        <label for="bookSelector">Select Book Type</label>
        <select v-model="selectedBookType" class="selector" name="bookSelector">
          <option v-for="type in bookTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>

      <div v-if="selectedBookType === 'Newspaper'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Title" inputText="InputText" />
              <Input title="Brand" inputText="InputText" />
              <Input title="Publication Date" inputText="date" />
              <Input title="Edition" inputText="InputText" />
              <Input title="Editor" inputText="InputText" />
              <Input title="Image" inputText="file" />
              
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="selectedBookType === 'Encyclopedia'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Title" inputText="InputText" />
              <Input title="encyclopediaType" inputText="InputText" />
              <Input title="language" inputText="date" />
              <Input title="author" inputText="InputText" />
              <Input title="publicationDate" inputText="InputText" />
              <Input title="Image" inputText="file" />
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'ReadingBook'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Title" inputText="InputText" />
              <Input title="author" inputText="InputText" />
              <Input title="Publication Date" inputText="date" />
              <Input title="Edition" inputText="InputText" />
              <Input title="genre" inputText="InputText" />
              <Input title="language" inputText="InputText" />
              <Input title="Image" inputText="file" />
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Dictionary'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Title" inputText="InputText" />
              <Input title="author" inputText="InputText" />
              <Input title="Publication Date" inputText="date" />
              <Input title="Edition" inputText="InputText" />
              <Input title="Editor" inputText="InputText" />
              <Input title="category" inputText="InputText" />
              <Input title="language" inputText="InputText" />
              <Input title="Image" inputText="file" />
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Comic'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Title" inputText="InputText" />
              <Input title="author" inputText="InputText" />
              <Input title="Publication Date" inputText="date" />
              <Input title="Edition" inputText="InputText" />
              <Input title="genre" inputText="InputText" />
              <Input title="Image" inputText="file" />
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.form {
  display: flex;
}
.column {
  flex: 1;
  margin-right: 20px;
}
.inputText::placeholder {
  color: #d0cfcf;
}

.createButton {
  border: none;
  background-color: #00ff1a;
  border-radius: 15px;
  width: 180px;
  height: 51px;
  margin-left: 50%;
}
.formContainer {
  background-color: #483078;
  border-radius: 15px;
  margin-top: 45px;
  padding: 20px;
  display: flex;
}

.bookSelectorContainer {
  /*position: relative;*/
  background-color: #483078;
  bottom: 350px;
  left: 50%;
  border-radius: 15px;
  width: 50%;
  height: 22%;
}
.selector {
  background-color: #835cd3;
  border-radius: 15px;
  border: none;
  color: white;
  margin-top: 10px;
}
</style>
