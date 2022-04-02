import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CollectionList from "../views/CollectionList.vue";
import CollectionDetail from "../views/CollectionDetail.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //default view
      name: "home",
      component: HomeView,
    },
    {
      path: "/collection", //default view
      name: "collection",
      component: CollectionList,
    },
    {
      path: "/collection/:id", //default view
      name: "collection-detail",
      component: CollectionDetail,
    },
  ],
});

export default router;
