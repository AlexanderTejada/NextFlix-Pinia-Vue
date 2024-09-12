<script>
import { onMounted } from "vue";
import { storeToRefs } from 'pinia';

import { useMovieStore } from './stores/movie';
export default {
  setup() {
    // Acceder a la tienda dentro de setup
    const useMovie = useMovieStore();

    // Extraer las propiedades reactivas de la tienda usando storeToRefs
    const { movie, showFullVideo } = storeToRefs(useMovie);

    // Puedes usar onMounted si necesitas hacer algo cuando el componente esté montado
    onMounted(() => {
      console.log("Componente montado");
    });

    return {
      movie,
      showFullVideo
    };
  }
};
</script>
<template>
  <div class="fixed w-full h-screen bg-black">
    <div v-if="!showFullVideo" id="SideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      IMAGE
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
    </div>
  </div>
</template>
