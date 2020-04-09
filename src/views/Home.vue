<template>
  <div>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Game Store</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="logout">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-btn id="button1">Arcade</v-btn>
        <v-spacer></v-spacer>
        <v-btn id="button2">Aventura</v-btn>
        <v-spacer></v-spacer>
        <v-btn id="button3">Miedo</v-btn>
        <v-spacer></v-spacer>
        <v-btn id="button4">Simulador</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <div>
          <v-text-field label="Search"  :rules="rules" hide-details="auto"></v-text-field>
        </div>

      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

