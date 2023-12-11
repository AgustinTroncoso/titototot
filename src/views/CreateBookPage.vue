<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import Input from "../components/Input.vue";
import axios from "axios";

const image = ref(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  image.value = file;
};

//newspaper
const title = ref("");
const brand = ref("");
const publicationDate = ref("");
const edition = ref("");
const editor = ref("");
//const image = ref("");

//encyclopedia
const encyclopediaType = ref("");
const language = ref("");
const author = ref("");

//readingbook
const genre = ref("");
//dictionary
const category = ref("");

//comic

const handleSubmitNewspaper = async () => {
  try {
    const formData = {
      title: title.value,
      brand: brand.value,
      publicationDate: publicationDate.value,
      edition: edition.value,
      editor: editor.value,
      //  image: image.value

      // Puedes agregar otras propiedades aquí
    };

    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addNewspaper",
      formData
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

const handleSubmitEncyclopedia = async () => {
  try {
    const formData = {
      title: title.value,
      encyclopediaType: encyclopediaType.value,
      language: language.value,
      author: author.value,
      publicationDate: publicationDate.value,
      edition: edition.value,
      //  image: image.value

      // Puedes agregar otras propiedades aquí
    };

    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addEncyclopedia",
      formData
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};


const handleSubmitReadingBook = async () => {
  try {
    const formData = {
      author: author.value,
      title: title.value,
      publicationDate: publicationDate.value,
      edition: edition.value,
      genre: genre.value,
      language: language.value,
      //  image: image.value

      // Puedes agregar otras propiedades aquí
    };

    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addReadingbook",
      formData
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

const handleSubmitDictionary = async () => {
  try {
    const formData = {
      author: author.value,
      title: title.value,
      publicationDate: publicationDate.value,
      edition: edition.value,
      editor: editor.value,
      category: category.value,
      language: language.value,
      //  image: image.value

      // Puedes agregar otras propiedades aquí
    };

    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addDictionary",
      formData
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

const handleSubmitComic = async () => {
  try {
    const formData = {
      author: author.value,
      title: title.value,
      publicationDate: publicationDate.value,
      edition: edition.value,
      genre: genre.value,
      //  image: image.value

      // Puedes agregar otras propiedades aquí
    };

    const formComicImage = new FormData();
    formComicImage.append('formData', JSON.stringify(formData));

    // Agregar la lógica para manejar el archivo
    const imageInput = document.querySelector('input[type="file"]');
    const imageFile = imageInput.files[0];
    if (imageFile) {
      formComicImage.append("image", imageFile);
    }

    console.log(formData);

    const response = await axios.post(
      "http://localhost:8080/corazondelatorback/addComic",
      formComicImage,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};
const bookTypes = [
  "Newspaper",
  "Encyclopedia",
  "ReadingBook",
  "Dictionary",
  "Comic",
];
const selectedBookType = ref("Newspaper");
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
          <form class="form" @submit.prevent="handleSubmitNewspaper">
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
                  type="text"
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

              <Input title="Image" inputText="file" placeholderText="aaalga" />
              <button type="submit" class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>
      <div v-if="selectedBookType === 'Encyclopedia'">
        <div class="formContainer">
          <form class="form" @submit.prevent="handleSubmitEncyclopedia">
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

              <Input title="Image" inputText="file" />
              <button type="submit" class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'ReadingBook'">
        <div class="formContainer">
          <form class="form" @submit.prevent="handleSubmitReadingBook">
            <div class="column">
              <!---->
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
              <!---->

              <Input title="Image" inputText="file" />
              <button type="submit" class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Dictionary'">
        <div class="formContainer">
          <form class="form" @submit.prevent="handleSubmitDictionary">
            <div class="column">
              <!---->
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
              <!---->
              <Input title="Image" inputText="file" />
              <button type="submit" class="createButton">Create Book</button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="selectedBookType === 'Comic'">
        <div class="formContainer">
          <form class="form" @submit.prevent="handleSubmitComic">
            <div class="column">
              <!---->
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
              <!---->

              <div class="inputContainer">
                <p>Image:</p>
                <input
                 
                  class="inputText"
                  type="file"
                  name="customerRut"
                  placeholder="19914277-1"
                />
              </div>
             
              <button type="submit" class="createButton">Create Book</button>
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
.inputContainer {
  margin-top: 20px;
  text-align: left;
}
.inputText {
  color: white;
  border-radius: 15px;
  background-color: #835cd3;
  border: none;
  height: 50px;
  width: 380px;
}
</style>
