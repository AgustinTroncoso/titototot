<script setup>
// JS
defineProps(["title", "inputText", "placeholderText, vModel"]);
</script>
<script>
export default {
  props: {
    title: String,
    inputTextClass: String,
    placeholderText: String,
    vModel: String
  },
};
</script>


<template>
  <div class="inputContainer">
    <!-- <label for="customer">Customer:</label> con este aparece al lado-->
    <p>{{ title }}:</p>
    <input
    :v-model="vModel"
      class="inputText"
      :type="inputText"
      :name="customer"
      :placeholder="placeholderText"
     
    />
  </div>
</template>

<style scoped>
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
