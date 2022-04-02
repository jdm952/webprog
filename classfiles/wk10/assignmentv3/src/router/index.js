import { createRouter, createWebHashHistory } from "vue-router";
import CollectionList from "../views/CollectionList.vue";
import CollectionDetails from "../views/CollectionDetails.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //default path
      name: "home",
      component: CollectionList,
    },
    {
      path: "/:id", //flower detail
      name: "collection-detail",
      component: CollectionDetails,
    }
  ]
})

export default router
