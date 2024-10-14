<template>
    <Hero></Hero>
    <Course></Course>
    <Process></Process>
    <Hosting></Hosting>
    <About></About>
  </template>
  
  <script>
  import Course from "@/components/Course.vue";
  import Process from "@/components/Process.vue";
  import Hosting from "@/components/Hosting.vue";
  import About from "@/components/About.vue";
  import Hero from "@/components/Hero.vue";
    export default{
      components:{
        Course,
        Process,
        Hosting,
        About,
        Hero,
      }
    }
  </script>