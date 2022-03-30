import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Llama from "../views/Llama.vue";
import Alpaca from "../views/Alpaca.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    }, {
      path:"/llama",
      name: "llama",
      component: Llama
    },
    {
      path:"/alpaca",
      name: "alpaca",
      component: Alpaca
    },
  ],
});

export default router;
