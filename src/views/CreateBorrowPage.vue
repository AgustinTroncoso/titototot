<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import moduleName from "../components/styles/template.css";
import axios from "axios";

const customerToBorrow = ref("");
const rutCustomerToBorrow = ref("");
const borrowedBook = ref("");
const borrowDate = ref("");
const returnDate = ref("");


const handleSubmit = async () => {
  try {
    const formData = {
      customerToBorrow: customerToBorrow.value,
      rutCustomerToBorrow: rutCustomerToBorrow.value,
      borrowedBook: borrowedBook.value,
      borrowDate: borrowDate.value,
      returnDate: returnDate.value
      // Puedes agregar otras propiedades aquí
    };

    console.log(formData);

    const response = await axios.post("http://localhost:8080/corazondelatorback/addborrow", formData);
    
    console.log(response.data);
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};





</script>

<template>
  <div>
    <NavBar />
    <div class="PageContainer">
      <div class="TitleTextContainer">
        <span>Create Borrow</span>
      </div>
      <div class="formContainer">
        <form class="form" @submit.prevent="handleSubmit">
          <div class="column">
            <div class="inputContainer">
              <!-- <label for="customer">Customer:</label> con este aparece al lado-->
              <p>Customer:</p>
              <input
              v-model="customerToBorrow"
                class="inputText"
                type="text"
                name="customer"
                placeholder="Alejandro Arevalo"
              />
            </div>
            <div class="inputContainer">
              <p>Customer Rut:</p>
              <input
              v-model="rutCustomerToBorrow"
                class="inputText"
                type="text"
                name="customerRut"
                placeholder="19914277-1"
              />
            </div>
            <div class="inputContainer">
              <p>Borrowed Book:</p>
              <input
              v-model="borrowedBook"
                class="inputText"
                type="text"
                name="customer"
                placeholder="2"
              />
            </div>
          </div>
          <div class="column">
            <div class="inputContainer">
              <!-- <label for="customer">Customer:</label> con este aparece al lado-->
            <p>Borrow Date:</p>
              <input
             v-model="borrowDate"
                class="inputText"
                type="date"
                name="borrowDate"
              />
            </div>
            <div class="inputContainer">
              <p>Return Date:</p>
              <input
            v-model="returnDate"
                class="inputText"
                type="date"
                name="returnDate"
              />       
            </div>
            <button type="submit" class="createButton">Create Borrow</button>
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
.inputText {
  color: white;
  border-radius: 15px;
  background-color: #835cd3;
  border: none;
  height: 50px;
  width: 380px;
}
.createButton {
  border: none;
  background-color: #00ff1a;
  border-radius: 15px;
  width: 180px;
  height: 51px;
  margin-top: 67px;
    margin-left: 50%;
}
.formContainer {
  background-color: #483078;
  border-radius: 15px;
  margin-top: 25px;
  padding: 20px;
  display: flex;
}
.inputContainer {
    margin-top: 20px;
  text-align: left;
}

</style>
