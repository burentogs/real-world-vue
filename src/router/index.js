import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventListView.vue";
import About from "../views/AboutView.vue";
import EventDetails from "../views/EventDetailsView.vue";

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
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
