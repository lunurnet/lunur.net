import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sus from "../views/Sus.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sus",
    name: "Sus",
    component: Sus,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
