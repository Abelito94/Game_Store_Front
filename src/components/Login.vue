<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1 class="font-weight-thin">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules" prepend-icon="mdi-email"></v-text-field>
          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn id="button" class="ma-2" color="orange darken-2" @click="login" >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import APIServices from "../services/Api";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push("/home");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
#button {
  background-color: rgb(33, 146, 235);
  margin-left: 50%;
  transform: translateX(-50%);
  color: rgb(255, 255, 255);
}
</style>