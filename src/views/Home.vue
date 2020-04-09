<template>
  <div>
    <GameList :data="serviceGames" />
  </div>
</template>

<script>
import GameList from "@/components/GameList.vue";
import Api from "@/services/Api.js";

export default {
  name: "Home",
  components: {
    GameList
  },
  data() {
    return {
      serviceGames: []
    };
  },
  methods: {
    showAll: function() {
      Api.getAllGames()
        .then(games => (this.serviceGames = games))
        .catch(err => console.log(err));
    },
    showCategory: function(myCategory) {
      Api.getGamesByCategory(myCategory)
        .then(games => (this.serviceGames = games.category))
        .catch(err => console.log(err));
    },
    showName: function(name) {
      Api.getGamesByCategory(name)
        .then(games => (this.serviceGames = games.game))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.showAll();

    this.$root.$on("categoryId", categoryId => {
      if (categoryId === "todos") this.showAll();
      else this.showCategory(categoryId);
    });

    this.$root.$on("search", search => {this.showName(search)})
  }
};
</script>
