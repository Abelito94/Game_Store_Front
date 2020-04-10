<template>
  <div>
    
      <v-toolbar id="description">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Game Store</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon @click="account">
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn icon @click="logout">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>

      </v-toolbar>
   
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
   // account(userId) {
    //  this.$root.$emit('account', userId)
    //}
  }
};
</script>

<style lang="scss" scoped>
#description {
  
  background-color: red;
  background-image: linear-gradient(-90deg, rgb(0, 97, 211), rgb(244, 0, 0));
}
#icon{
text-align: right; 
padding-right: 1rem;
}
#titulo{
  
 

display: block;
}

</style>