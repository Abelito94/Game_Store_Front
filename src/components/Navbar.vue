<template>
  <div>
    <div>
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar>
          <v-btn id="button0" @click="gamesByCategory('todos')">Todos</v-btn>
          <v-spacer></v-spacer>
          <v-btn id="button1" @click="gamesByCategory('arcade')">Arcade</v-btn>
          <v-spacer></v-spacer>
          <v-btn id="button2" @click="gamesByCategory('aventura')">Aventura</v-btn>
          <v-spacer></v-spacer>
          <v-btn id="button3" @click="gamesByCategory('miedo')">Miedo</v-btn>
          <v-spacer></v-spacer>
          <v-btn id="button4" @click="gamesByCategory('simulador')">Simulador</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <div>
            <v-text-field label="Buscar" v-model="mySearch" @keyup.enter="search()" hide-details="auto"></v-text-field>
          </div>
        </v-toolbar>
      </v-card>
    </div>
  </div>
</template>

<script>
import Api from "@/services/Api.js";

export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      games: [],
      category: "",
      mySearch: ""
    };
  },
  methods: {
    gamesByCategory(myCategory) {
      this.$root.$emit('categoryId', myCategory)
    },
    search() {
      this.$root.$emit('search', this.mySearch)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
