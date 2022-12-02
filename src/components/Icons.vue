<script setup>
const tmdbIcon = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
const piniaIcon = "https://pinia.vuejs.org/logo.svg"
</script>
<template>
    <div class="flex flex-col gap-4 items-center justify-center text-center my-16">
        <div>
            <img :src="piniaIcon" class="w-16">
        </div>
        <div>
            <img :src="tmdbIcon" class="w-32">
        </div>
    </div>
</template>
<style scoped>

</style>