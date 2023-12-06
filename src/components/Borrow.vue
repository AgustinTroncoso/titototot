<script setup>
import QR from "../assets/QR.png";
import editLogo2 from '../assets/editLogo2.png'

const props = defineProps([
  'name',
  'rut',
  'book',
  'borrowDate',
  'returnDate',
  'authorizedBy',
  'state',
  'passedReturn'
]);

</script>

<template>
  <div class="borrowListed">
    <div class="qrContainer">
      <img :src="QR" />
    </div>
    <div class="borrowInformationContainer">
      <div class="column">
        <p class="informationText">Customer: {{ props.name }}</p>
        <p class="informationText">Rut: {{props.rut }}</p>
        <p class="informationText">Book: {{ props.book }}</p>
      </div>
      <div class="column">
        <p class="informationText">Borrow&nbsp;Date:&nbsp;{{props.borrowDate }}</p>
        <p class="informationText">Return Date: {{ props.returnDate }}</p>
        <p class="informationText">Authorized&nbsp;By:&nbsp;{{props.authorizedBy}}</p>
      </div>
      <div class="column">
        <p class="informationText">State: {{props.state }}</p>
        <p class="informationText">Passed Return: {{ props.passedReturn }}</p>
        <button class="deleteButton">Delete Button</button>
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
