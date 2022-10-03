import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventListView.vue";
import About from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
