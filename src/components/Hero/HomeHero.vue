<template  >
  <div class="hero">
    <MainNav />
    <HeroMainText />
  </div>
</template>
<script>
import MainNav from "../Navigation/MainNav.vue";
import HeroMainText from "./HeroMainText.vue";
export default {
  name: "HomeHero",
  components: {
    MainNav,
    HeroMainText,
  },
};
</script>
<style >
.hero {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/img/HomeHeroBg.png");
  background-position: center;
  background-size: cover;
}
</style>