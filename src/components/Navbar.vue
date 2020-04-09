<template>
  <div>
    <div>
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar dense>
          <v-btn id="button0" @click="allGames">Todos</v-btn>
          <v-spacer></v-spacer>
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
            <v-text-field label="Buscar" :rules="rules" hide-details="auto"></v-text-field>
          </div>
        </v-toolbar>
      </v-card>
    </div>
    <div>
      <v-card class="mx-auto">
        <v-list shaped>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(game) in games" :key="game.id">
              <v-list-item-content>
                <v-list-item-title v-text="game.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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
      games: []
    };
  },
  methods: {
    allGames() {
      Api.getAllGames()
        .then(response => (this.games = response))
        .catch(err);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
