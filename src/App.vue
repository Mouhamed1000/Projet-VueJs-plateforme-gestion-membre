<script setup lang="ts">

  import AppNavbar from './components/AppNavBar.vue'

  import HomeSection from './components/HomeSection.vue';
  import FeatureSection from './components/FeatureSection.vue';
  import AboutSection from './components/AboutSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import FooterSection from './components/FooterSection.vue';

</script>

<template>
    
  <div style="background: white; color: white;">

    <AppNavbar />

    <HomeSection />

    <FeatureSection />

    <AboutSection />

    <ContactSection />

    <FooterSection />
   
  </div>

</template>

<style scoped></style>

