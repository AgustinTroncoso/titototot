<script setup>

// JS
defineProps(['title', 'inputText', 'text']);
</script>
<script>
export default {
    props: {
    title: String,
    inputTextClass: String,
    placeholderText: String,
  }
}
</script>


<template>
<div class="inputContainer">
                <!-- <label for="customer">Customer:</label> con este aparece al lado-->
                <p>{{ title }}:</p>
                <input
                  class="inputText"
                  :type="inputText"
                  :name="customer"
                  :placeholder="'Alejandro Arevalo'"
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