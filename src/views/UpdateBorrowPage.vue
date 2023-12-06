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
        <span>Update Borrow</span>    
    </div>
    

    <div class="formContainer">
          <form class="form">
            <div class="column">
              <Input title="Customer" inputText="InputText" />
              <Input title="Customer Rut" inputText="InputText" />
              <Input title="Borrowed Book" inputText="InputText" />
              <Input title="Borrow Date" inputText="date" />
              <Input title="Return Date" inputText="date" />
              <button class="createButton">Update Borrow</button>
            </div>
          </form>
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