<script setup>
import { onMounted, ref } from 'vue';
import movies from './stores/movies.json';


import { useMovieStore } from './stores/movie';
import { storeToRefs } from 'pinia';

// Uso de la tienda de Pinia
const useMovie = useMovieStore();
const { movie, showFullVideo } = storeToRefs(useMovie);

// Referencia para el video (esto es útil si más adelante quieres manipular el video)
let video = ref(null);

// Ejecutar lógica cuando el componente esté montado
onMounted(() => {
  // Establecer el primer elemento de movies en la variable movie con un retardo de 100ms
  setTimeout(() => movie.value = movies[0][0], 100);
});
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <div v-if="!showFullVideo" id="SideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <img class="absolute top-0 w-[35px] mt-10 ml-10" src="/public/images/netflix-logo.png">
      <div>
        <!-- Icono de búsqueda (Magnify) -->
        <div class="py-2 mx-10 my-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.15 12.65z" />
          </svg>
        </div>
        <!-- Icono de Home (HomeOutline) -->
        <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75l9-6 9 6M3 9.75v10.5a2.25 2.25 0 002.25 2.25h3.75m10.5-12.75v10.5A2.25 2.25 0 0118.75 21h-3.75m-10.5 0H9" />
          </svg>
        </div>
        <!-- Icono de Trending (TrendingUp) -->
        <div class="py-2 mx-10 my-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>

        </div>
        <!-- Icono de Televisión (Television) -->
        <div class="py-2 mx-10 my-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75V15zM8.25 19.5h7.5" />
          </svg>
        </div>
        
        <div class="py-2 mx-10 my-6">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15l5.25 3.75V5.25L15.75 9z" />
  </svg>
</div>

<div class="py-2 mx-10 my-6">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 cursor-pointer">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
</div>


      </div>
      <div v-if="!showFullVideo">
  <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
    <video
      v-if="movie"
      :src="'/videos/' + movie.name + '.mp4'"
      autoplay
      loop
      class="absolute z-0 h-[600px] right-0 top-0"
    />
  </div>
</div>

    </div>
  </div>
</template>
