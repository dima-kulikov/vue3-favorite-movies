<script setup>
import { onMounted } from "vue";
import { useCategoriesStore } from "../stores/CategoriesStore";

import BaseSwiper from "../components/Base/BaseSwiper.vue";
import MovieList from "../components/MovieList.vue";

const categoriesStore = useCategoriesStore();

const handlePageUpdate = (page) => {
  categoriesStore.getNewReleases(page);
};

onMounted(() => {
  categoriesStore.getPopular();
  categoriesStore.getNewReleases();
});
</script>

<template>
  <div>
    <BaseSwiper
      title="Popular"
      isNeedIcon
      iconName="popcorn"
      :movies="categoriesStore.popular"
      key="popular"
    />

    <MovieList
      :movies="categoriesStore.newReleases"
      @update-page="handlePageUpdate"
      title="New Movies"
      isNeedMorePage
    />
  </div>
</template>
