<script setup>
const props = defineProps(["user"]);

</script>

<template>
  <div class="profileImageContainer">
    <img class="profileImage" :src="user.image" alt="User Image" />
  </div>
  <div class="column">
    <p class="informationText">Name:&nbsp;{{ user.name }}</p>
    <p class="informationText">Username:&nbsp;{{ user.user }}</p>
    <p class="informationText">Position: {{ user.position }}</p>
    <p class="informationText">Genre: {{ user.genre }}</p>
  </div>
</template>
<style scoped>
.column {
  flex: 1;
  margin-left: 20px;
  text-align: justify;
}
.column:last-child {
  margin-right: 0;
}
.informationText {
  margin-top: 45px;
}

.profileImageContainer {
  background-color: #906090;
  padding: 20px;
  border-radius: 15px;
}
.profileImage {
  width: 300px;
  height: 300px;
}
</style>
