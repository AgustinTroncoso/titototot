<script setup>
import "../components/styles/general.css";
import userNameInputLogo from "../assets/userName.png";
import passwordInputLogo from "../assets/passwordInputLogo (2).png";
import NavBar from '../components/NavBar.vue'
</script>

<template>
<NavBar/>
 <div class="signInContainer">
    <div class="signInTextContainer">
      <span class="signInText">Sign In</span>
    </div>
    <form>
      <div class="userNameInputContainer">
        <div class="userInputLogoContainer">
          <img :src="userNameInputLogo" />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control inputUser"
            placeholder="   Username..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="passwordInputContainer">
        <div class="passwordInputLogoContainer">
          <img class="passwordInputLogo" :src="passwordInputLogo" />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control inputUser"
            placeholder="   Password..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="submitLoginButtonContainer">
        <button type="submit" class="btn btn-primary mb-3 loginButton">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<style>
.signInText {
  font-size: 35px;

}

.signInTextContainer {
  text-align: center;
  margin-bottom: 7%;
}
.signInContainer {
  background-color: #301860;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 700px;
  border-radius: 100px;
  margin-top: 3%;
  margin-left: 20%;

}
.userInputLogoContainer {
  background-color: white;
  border-radius: 100%;
  width: 15%;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-right: 2%;
}
.userNameInputContainer {
  display: flex;
  width: 700px;
  margin-bottom: 10%;

}
.inputUser {
  background-color: #483078;
  border-radius: 40px;
}
.passwordInputContainer {
  display: flex;
  width: 700px;
  margin-bottom: 10%;
}
.passwordInputLogoContainer {
  background-color: white;
  border-radius: 100%;
  width: 15%;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-right: 2%;
}
.passwordInputLogo{
  margin-top: 5%;
  width: 70%;
}

.loginButton {
  background-color: #906090;
  width: 50%;
  height: 60px;
  border-radius: 100px;
  font-size: 25px;
  margin-left: 25%;
}
</style>
