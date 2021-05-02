<template  >
  <div>
    <TopAlertMenu />
    <HomeHero />
  </div>
</template>
<script>
import TopAlertMenu from "./TopAlertMenu.vue";
import HomeHero from "../Hero/HomeHero.vue";
export default {
  name: "PageHeader",
  components: {
    TopAlertMenu,
    HomeHero,
  },
};
</script>
<style lang="">
</style>