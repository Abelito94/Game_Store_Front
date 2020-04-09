<template>
<div id="description">
  <div id="auth">
    <v-row>
      <v-col cols="6">
        <v-img id="img" src="../assets/logo.png"/>
        <v-img id="img2" src="../assets/name.png"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <Login />
      </v-col>
      <v-col cols="3">
        <Signup />
      </v-col>
    </v-row>
  </div>
</div>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
#description {
  height: 735px;
  background-color: red;
  background-image: linear-gradient(-90deg, rgb(0, 97, 211), rgb(244, 0, 0));
  display:block;
  margin:auto;
}
#auth{
  margin-left: 380px;
  text-align: center;
}
#img{
  margin-left: 440px;
  width: 500px;
  height: 250px;
  display:block;
  margin:auto;
}
#img2 {
  margin-top: -25px;
  margin-left: 440px;
  width: 500px;
  height: 100px;
  display:block;
  margin:auto;
}

</style>


