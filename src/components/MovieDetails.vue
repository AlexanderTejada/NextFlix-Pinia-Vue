<template>
    <div v-if="movie" class="z-20 text-white w-[53%] pt-20">
      <div class="text-[55px] font-semibold font-serif"> {{ movie.name }}</div>
      <div class="flex items-center text-lg pt-4">
        <div>{{ movie.year }}</div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4"> {{ movie.genre.one }}</span>
        </div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4"> {{ movie.genre.two }}</span>
        </div>
        <div class="relative">
          <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
          <span class="pl-4"> {{ movie.genre.three }}</span>
        </div>
      </div>
      <div class="text-2x1 pt-6">{{ movie.description }}</div>
    </div>
  </template>
  

<script setup>
defineProps ({movie: Object})</script>