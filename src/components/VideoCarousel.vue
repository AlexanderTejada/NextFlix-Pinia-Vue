<template>
<div class="min-w-[1200px] relative">
  <div class="flex justify-between mr-6">
    <div class="flex items-center font-semibold text-white text-2x1 cursor-pointer">
      {{ category }}
    </div>
  </div>

  <Carousel
  ref="carousel"
  v-model="currentSlide"
  :items-to-show="8"
  :items-to-scroll="1"
  :wrap-around="true"
  :Transition="500"
  snapAlign="start"
  class="bg-transparent"
  >
    <Slide 
    v-for="slide, index in movies"
    :key="slide"
    class="flex items-center object-cover text-white bg-transparent">
<div
  @click="event => fullScreeVideo(index)"
  class="object-cover h-[100%] hover:brightness-125 cursor-pointer"
  :class="
  currentSlide !== index? 'border-4 border-transparent' : 'border-4 border-white',
  currentSlideObject(slide, index)
  "

    >
    <img 
       style="user-select: none"
       class="pointer-events-none h- [100%] z-[1]"
       :src="'/images/'+slide.name+'.png'" >
  
    </div>       
  </Slide>

       </Carousel>
</div>
  
  </template>
  

<script setup>
import {ref, toRefs, Transition} from 'vue'
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