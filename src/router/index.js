import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Description from "../views/Description.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Description",
    component: Description
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

