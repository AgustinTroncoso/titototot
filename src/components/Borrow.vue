<script setup>
import QR from "../assets/QR.png";
import editLogo2 from '../assets/editLogo2.png'
import axios from 'axios';
import { ref } from "vue";
const props = defineProps(["borrow"]);

const handleDeleteBorrow = async () => {
  if (!props.borrow || !props.borrow.id) {
    console.error("ID de borrow no válido");
    return;
  }
  const confirmDelete = window.confirm(
    "¿Are you sure you want to delete this Borrow?"
  );
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await axios.delete(
      `http://localhost:8080/corazondelatorback/deleteBorrow/${props.borrow.id}`
    );
    console.log(response.data); // Muestra el mensaje de eliminación (por ejemplo, "Comic eliminado")
    // Puedes actualizar la lista de libros después de la eliminación si es necesario
  } catch (error) {
    console.error(error);
  }
};

/*const props = defineProps([
  'name',
  'rut',
  'book',
  'borrowDate',
  'returnDate',
  'authorizedBy',
  'state',
  'passedReturn'
]);*/

</script>

<template>
  <div class="borrowListed">
    <div class="qrContainer">
      <img :src="QR" />
    </div>
    <div class="borrowInformationContainer">
      <div class="column">
        <p class="informationText">Customer: {{ borrow.customerToBorrow }}</p>
        <p class="informationText">Rut: {{borrow.rutCustomerToBorrow }}</p>
        <p class="informationText">Book ID: {{ borrow.borrowedBook }}</p>
      </div>
      <div class="column">
        <p class="informationText">Borrow&nbsp;Date:&nbsp;{{borrow.borrowDate }}</p>
        <p class="informationText">Return Date: {{ borrow.returnDate }}</p>
        <p class="informationText">Authorized&nbsp;By:&nbsp;{{borrow.authorizedBy}}</p>
      </div>
      <div class="column">
        <p class="informationText">State: {{borrow.passReturnDate }}</p>
        <p class="informationText">Passed Return: {{ borrow.state }}</p>
        <button class="deleteButton" @click="handleDeleteBorrow">Delete Button</button>
        <button class="editButton"> <img class="editLogo" :src="editLogo2"/></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editButton{
    border-radius: 10px;
    background-color: #FAFF00;
    margin-left: 10px;
    padding: 4px;
    border: none;
}
.deleteButton{
    background-color: #E30D0D;
    color: white;
    border-radius: 15px;
    border:none;
    margin-top: 15px;
    padding: 10px;
}
.borrowInformationContainer {
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
.borrowListed {
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
.informationText{
    margin-top: 45px;
}
.informationText:first-child{
    margin-top: 15px;
}
</style>
