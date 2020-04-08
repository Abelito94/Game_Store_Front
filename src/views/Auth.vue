<template>
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
#auth{
  margin-left: 380px;
  text-align: center;
}
#img{
  margin-left: 135px;
  width: 250px;
  height: 100px;
}

</style>


