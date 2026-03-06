import { createRouter, createWebHistory } from "vue-router";
import MoviesPage from "../pages/MoviesPage.vue";
import TVPage from "../pages/TVPage.vue";
import AnimatedPage from "../pages/AnimatedPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import HomePages from "../pages/HomePages.vue";
import FavoritePage from "../pages/FavoritePage.vue";

const routes = [
  { path: "/movies", component: MoviesPage },
  { path: "/tv", component: TVPage },
  { path: "/animated", component: AnimatedPage },
  { path: "/search", component: SearchPage },
  { path: "/favorite", component: FavoritePage },
  { path: "/", component: HomePages },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
