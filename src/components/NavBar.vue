<script setup>
import navBarLogo from "../assets/navBarLogo.png";
import userProfileLogo from "../assets/userProfileLogo.png";
defineProps({});
</script>

<template>
  <div class="navBarContainer">
    <div class="navBarLogoContainer">
      <div class="navBarIconLogo">
        <router-link to="/homepage">
          <button class="NavBarButtonLogoRouter">
            <img class="navBarIconLogoRouter" :src="navBarLogo" />
          </button>
        </router-link>
      </div>

      <div class="corazonDelatorText">
        <span>CorazonDelator</span>
      </div>
    </div>

    <div class="navBarButtonContainer">
      <router-link to="/bookpage">
        <button class="navBarText">Book</button>
      </router-link>

      <router-link to="/borrowpage">
        <button class="navBarText">Borrow</button>
      </router-link>
    </div>
    <div class="profileNavBarContainer">
      <div class="userProfileLogo">
        <router-link to="/profile">
          <button class="navbarProfileButton">
            <img :src="userProfileLogo" />
            <div class="navBarProfileTextContainer">
              <span class="navBarProfileText">Carlos Iturra</span>
              <span class="navBarProfileText">Full-Time</span>
            </div>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbarProfileButton {
  background-color: transparent;
  width: 230px;
  display: flex;
  align-items: center;
  font-size: 20px;
  border: none;
  color: white;
  text-decoration: underline;
  text-decoration-color: #483078;
  
}

.NavBarButtonLogoRouter {
  background-color: transparent;
  border: none;
}
.navBarContainer {
  background-color: #301860;
  display: flex;
  justify-content: space-between;
}
.navBarLogoContainer {
  background-color: #483078;
  border-radius: 100px;
  width: 13%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.profileNavBarContainer {
  background-color: #483078;
  border-radius: 100px;
  width: 18%;
  display: flex;
  text-decoration: none;
}
.navBarText {
  font-size: 30px;
  background-color: transparent;
  border: none;
  color: white;
  padding-left: 40px;
}
.navBarButtonContainer {
  display: flex;
  margin-right: 50%;
  justify-content: center;
  align-items: center;
}
.navBarProfileTextContainer {
  /*texto alineado al centro hotizontal y vertical*/
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;

}
</style>
