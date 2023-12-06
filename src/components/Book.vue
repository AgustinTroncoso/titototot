<script setup>
import QR from "../assets/QR.png";
import editLogo2 from "../assets/editLogo2.png";

const props = defineProps(["book"]);
</script>

<template>
  <div class="bookListed">
    <div class="bookInformationContainer">
      <template v-if="book.type === 'Newspaper'">
        <div class="bookImageContainer">
          <img class="bookImage" :src="book.image" />
        </div>
        <div class="column">
          <p class="informationText">Title:&nbsp;{{ book.title }}</p>
          <p class="informationText">Brand:&nbsp;{{ book.brand }}</p>
          <p class="informationText">
            Publication Date: {{ book.publicationDate }}
          </p>
          <p class="informationText">Edition: {{ book.edition }}</p>
        </div>
        <div class="column">
          <p class="informationText">Editor: {{ book.editor }}</p>
          <p class="informationText">Stock: {{ book.stock }}</p>
          <p class="informationText">Borrow Stock: {{ book.borrowStock }}</p>
        </div>
        <div class="column">
          <button class="deleteButton">Delete Button</button>
          <button class="editButton">
            <img class="editLogo" :src="editLogo2" />
          </button>
        </div>
      </template>
      <template v-if="book.type === 'Encyclopedia'">
        <div class="bookImageContainer">
          <img class="bookImage" :src="book.image" />
        </div>
        <div class="column">
          <p class="informationText">Title: {{ book.title }}</p>
          <p class="informationText">Edition: {{ book.edition }}</p>
          <p class="informationText">
            Encyclopedia Type: {{ book.encyclopediaType }}
          </p>
        </div>
        <div class="column">
          <p class="informationText">Language: {{ book.language }}</p>
          <p class="informationText">Author: {{ book.author }}</p>
          <p class="informationText">
            Publication Date: {{ book.publicationDate }}
          </p>
        </div>
        <div class="column">
          <p class="informationText">Stock: {{ book.stock }}</p>
          <p class="informationText">Borrow Stock: {{ book.borrowStock }}</p>
          <button class="deleteButton">Delete Button</button>
          <button class="editButton">
            <img class="editLogo" :src="editLogo2" />
          </button>
        </div>
      </template>
      <template v-if="book.type === 'ReadingBook'">
        <div class="bookImageContainer">
          <img class="bookImage" :src="book.image" />
        </div>
        <div class="column">
          <p class="informationText">Title: {{ book.title }}</p>
          <p class="informationText">Author: {{ book.author }}</p>
          <p class="informationText">
            Publication Date: {{ book.publicationDate }}
          </p>
        </div>
        <div class="column">
          <p class="informationText">Genre: {{ book.genre }}</p>
          <p class="informationText">Language: {{ book.language }}</p>
          <p class="informationText">Stock: {{ book.stock }}</p>
          <p class="informationText">Borrow Stock: {{ book.borrowStock }}</p>
        </div>
        <div class="column">
          <button class="deleteButton">Delete Button</button>
          <button class="editButton">
            <img class="editLogo" :src="editLogo2" />
          </button>
        </div>
      </template>
      <template v-if="book.type === 'Dictionary'">
        <div class="bookImageContainer">
          <img class="bookImage" :src="book.image" />
        </div>
        <div class="column">
          <p class="informationText">Title: {{ book.title }}</p>
          <p class="informationText">Author: {{ book.author }}</p>
          <p class="informationText">
            Publication Date: {{ book.publicationDate }}
          </p>
        </div>
        <div class="column">
          <p class="informationText">Edition: {{ book.edition }}</p>
          <p class="informationText">Editor: {{ book.editor }}</p>
          <p class="informationText">Category: {{ book.category }}</p>
          <p class="informationText">Language: {{ book.language }}</p>
        </div>
        <div class="column">
          <p class="informationText">Stock: {{ book.stock }}</p>
          <p class="informationText">Borrow Stock: {{ book.borrowStock }}</p>
          <button class="deleteButton">Delete Button</button>
          <button class="editButton">
            <img class="editLogo" :src="editLogo2" />
          </button>
        </div>
      </template>
      <template v-if="book.type === 'Comic'">
        <div class="bookImageContainer">
          <img class="bookImage" :src="book.image" />
        </div>
        <div class="column">
          <p class="informationText">Title: {{ book.title }}</p>
          <p class="informationText">Author: {{ book.author }}</p>
          <p class="informationText">
            Publication Date: {{ book.publicationDate }}
          </p>
        </div>
        <div class="column">
          <p class="informationText">Edition: {{ book.edition }}</p>
          <p class="informationText">Genre: {{ book.genre }}</p>
          <p class="informationText">Stock: {{ book.stock }}</p>
          <p class="informationText">Borrow Stock: {{ book.borrowStock }}</p>
        </div>
        <div class="column">
          <button class="deleteButton">Delete Button</button>
          <button class="editButton">
            <img class="editLogo" :src="editLogo2" />
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.editButton {
  border-radius: 10px;
  background-color: #faff00;
  margin-left: 10px;
  padding: 4px;
  border: none;
}
.deleteButton {
  background-color: #e30d0d;
  color: white;
  border-radius: 15px;
  border: none;
  margin-top: 15px;
  padding: 10px;
}
.bookInformationContainer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 18px;
}
.qrContainer {
  background-color: #906090;
  padding: 20px;
  border-radius: 15px;
}
.bookListed {
  background-color: #483078;
  border-radius: 15px;
  padding: 20px;
  display: flex;
}
.column {
  flex: 1;
  margin-right: 20px;
}
.column:last-child {
  margin-right: 0; /* Elimina el margen derecho de la última columna */
}
.informationText {
  margin-top: 45px;
}
.informationText:first-child {
  margin-top: 15px;
}
.bookImageContainer {
  background-color: #906090;
  padding: 20px;
  border-radius: 15px;
}
.bookImage {
  width: 200px;
  height: 300px;
}
</style>
