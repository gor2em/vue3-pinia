<script setup>
const props = defineProps({
    items: Object,
})

</script>
<template>
    <div class="grid grid-cols-10 gap-8 mb-20">
        <div class="col-span-2 cursor-pointer mx-auto text-center" v-for="movie in props.items" :key="movie.id">
            <div class="relative">
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="max-h-[400px]" alt="">
                <div
                    class="absolute bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full h-full flex flex-col text-center items-center justify-end p-4 group opacity-0 hover:opacity-100 transition-all duration-300">
                    <h2 class="text-white font-bold text-xl">
                        {{ movie.title }}
                    </h2>
                    <span class="text-slate-400">{{ movie.vote_average }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>