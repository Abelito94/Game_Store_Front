<template>
 
    <div>
     <div>
        <v-toolbar id="description">
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
#description {
  background-color: rgb(254, 254, 255);
  background-image: linear-gradient(-900deg, rgba(0, 0, 0, 0.623), rgb(249, 188, 188));
  display:block;
  margin:auto;
}
#button0 {
 background-color:rgba(179, 28, 28, 0.863);
}
#button1 {
 background-color:rgba(179, 28, 28, 0.863);
}
#button2 {
 background-color:rgba(179, 28, 28, 0.863);
}
#button3 {
 background-color:rgba(179, 28, 28, 0.863);
}
#button4 {
 background-color:rgba(179, 28, 28, 0.863);
}
</style>

