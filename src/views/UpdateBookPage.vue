<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
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


<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Update Book</span>
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
              <div class="inputContainer">
                <p>Title:</p>
                <input
                  v-model="title"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Brand:</p>
                <input
                  v-model="brand"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Publication Date:</p>
                <input
                  v-model="publicationDate"
                  class="inputText"
                  type="date"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Edition:</p>
                <input
                  v-model="edition"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Editor:</p>
                <input
                  v-model="editor"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Image:</p>
                <input
                  v-model="image"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="selectedBookType === 'Encyclopedia'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <div class="inputContainer">
                <p>Title:</p>
                <input
                  v-model="title"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Encyclopedia Type:</p>
                <input
                  v-model="encyclopediaType"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Language:</p>
                <input
                  v-model="language"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Author:</p>
                <input
                  v-model="author"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Publication Date:</p>
                <input
                  v-model="publicationDate"
                  class="inputText"
                  type="date"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Edition:</p>
                <input
                  v-model="edition"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Image:</p>
                <input
                  v-model="image"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'ReadingBook'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <div class="inputContainer">
                <p>Author:</p>
                <input
                  v-model="author"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Title:</p>
                <input
                  v-model="title"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Publication Date:</p>
                <input
                  v-model="publicationDate"
                  class="inputText"
                  type="date"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Edition:</p>
                <input
                  v-model="edition"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Genre:</p>
                <input
                  v-model="genre"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Language:</p>
                <input
                  v-model="language"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Image:</p>
                <input
                  v-model="image"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Dictionary'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <div class="inputContainer">
                <p>Author:</p>
                <input
                  v-model="author"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Title:</p>
                <input
                  v-model="title"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Publication Date:</p>
                <input
                  v-model="publicationDate"
                  class="inputText"
                  type="date"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Edition:</p>
                <input
                  v-model="edition"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Editor:</p>
                <input
                  v-model="editor"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Category:</p>
                <input
                  v-model="category"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Language:</p>
                <input
                  v-model="language"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Image:</p>
                <input
                  v-model="image"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <button class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Comic'">
        <div class="formContainer">
          <form class="form">
            <div class="column">
              <div class="inputContainer">
                <p>Author:</p>
                <input
                  v-model="author"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Title:</p>
                <input
                  v-model="title"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Publication Date:</p>
                <input
                  v-model="publicationDate"
                  class="inputText"
                  type="date"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Edition:</p>
                <input
                  v-model="edition"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <div class="inputContainer">
                <p>Genre:</p>
                <input
                  v-model="genre"
                  class="inputText"
                  type="text"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
              <button class="createButton">Update Book</button>
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
.inputText {
  color: white;
  border-radius: 15px;
  background-color: #835cd3;
  border: none;
  height: 50px;
  width: 380px;
}
.inputContainer {
  margin-top: 20px;
  text-align: left;
}
</style>