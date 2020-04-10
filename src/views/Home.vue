<template>
  <div>
    <NavbarAccount />
    <Navbar />
    <GameList :data="serviceGames" />
    <!-- <User :user="user" /> -->
  </div>
</template>

<script>
import GameList from "@/components/GameList.vue";
import Api from "@/services/Api.js";
import Navbar from "@/components/Navbar.vue";
import NavbarAccount from "@/components/NavbarAccount.vue";
//import User from '@/components/User.vue';

export default {
  name: "Home",
  components: {
    GameList,
    Navbar,
    NavbarAccount
    //User
  },
  data() {
    return {
      serviceGames: [],
      user: Object
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
    },
    //showUser: function(user) {
     // Api.getUser(user)
       // .then(user => (this.user = user))
        //.catch(err => console.log(err))
   // }
  },
  mounted() {
    this.showAll();

    this.$root.$on("categoryId", categoryId => {
      if (categoryId === "todos") this.showAll();
      else this.showCategory(categoryId);
    });

    this.$root.$on("search", search => {this.showName(search)})

  //  this.$root.$on('account', userId => {this.showuser(userId)})
  }
};
</script>
