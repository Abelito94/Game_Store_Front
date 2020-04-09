<template>
  <div id="nav">
    <NavbarAccount />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavbarAccount from "@/components/NavbarAccount.vue";

export default {
  name: "App",
  components: {
    Navbar,
    NavbarAccount
  },
  data: () => ({
    //
  })
};
</script>

