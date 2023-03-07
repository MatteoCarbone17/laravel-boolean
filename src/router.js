import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import BooksList from "./pages/BooksList.vue";
import SingleBook from "./pages/SingleBook.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/books",
      name: "books",
      component: BooksList,
    },
    {
      path: "/books/:id",
      name: "book",
      component: SingleBook,
    },
  ],
});

export { router };
