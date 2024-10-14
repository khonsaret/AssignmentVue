<template>
  <div class="sub_page">
        <div class="hero_area">
             <Header></Header>
             <Hero></Hero>
        </div>
        <router-view></router-view>
    </div>
    <Info></Info>
    <Footer></Footer>
    
</template>
<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import Info from "@/components/Info.vue";

  export default{
    components:{
      Header,
      Hero,
      Footer,
      Info,
    }
  }
</script>