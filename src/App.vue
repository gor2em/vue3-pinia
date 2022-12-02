<script setup>
import { onMounted, defineAsyncComponent, reactive, watch } from 'vue';

import Icons from './components/Icons.vue';
import Spinner from './components/Spinner.vue';
const ListItem = defineAsyncComponent(() => import('./components/ListItem.vue'));

import { useMovieStore } from './stores/movie';
const movieStore = useMovieStore();

onMounted(() => {
    movieStore.getTopRatedMovies();
})

const state = reactive({ searchMovie: "" })
watch(() => state.searchMovie, (searchValue) => {
    movieStore.search = searchValue;
})

</script>
<template>
    <div class="container mx-auto text-center">

        <Icons />

        <div class="flex justify-between my-10">
            <div>
                <h2 class="text-white font-bold text-2xl">
                    {{ movieStore.getMoviesLength }} adet film listelendi.
                </h2>
            </div>
            <div>
                <input type="text" placeholder="film ara..." v-model="state.searchMovie"
                    class="bg-transparent border px-4 py-1 border-slate-400 focus:border-emerald-400 outline-none rounded-full text-white">
            </div>
        </div>

        <ListItem :items="movieStore.filteredMovies" v-if="!movieStore.loading" />
        <Spinner v-else />

    </div>
</template>
<style scoped>

</style>