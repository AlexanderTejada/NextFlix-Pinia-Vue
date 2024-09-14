<template>
<div class="min-w-[1200px] relative">
  <div class="flex justify-between mr-6">
    <div class="flex items-center font-semibold text-white text-2x1 cursor-pointer">
      {{ category }}
    </div>
  </div>

  <Carousel>
</div>
  
  </template>
  

<script setup>
import {ref, toRefs} from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useMovieStore } from '../stores/movie';
import { storeToRefs } from 'pinia';
const useMovie = useMovieStore()
const {movie, ShowFullVideo}= storeToRefs(useMovie)
let currentSlide = ref (0)
const props = defineProps ({category: String, movies: Array})
const {movies, category}= toRefs(props)
const currentSlideObject = (Slide, index) => {
  if (index === currentSlide.value){
    movie.value=Slide
  }
}
const fullScreeVideo = (index) => {
  currentSlide.value = index 
  setImmeout (() => ShowFullVideo.value = true, 500)
}
</script>
<style>
.carousel_prev,
.carousel_next,
.carousel_prev:hover,
.carousel_next:hover{
  color: white;
}

</style>