<template  >
  <div
    class="container mx-auto mt-40 grid grid-cols-12 font-black text-5xl text-white"
  >
    <div class="col-span-2"></div>
    <h1 class="col-span-8 text-center">
      <small class="block font-extralight text-lg md:text-lg">
        The job is not done until you are satisfied!
      </small>

      <span class="block font-black text-4xl md:text-8xl uppercase my-10">
        We can restore Your roof to the original look!
      </span>
    </h1>
    <div class="col-span-12 mt-5 text-center mb-20">
      <CallToAction />
    </div>
  </div>
</template>
<script>
import CallToAction from "../Btn/CallToAction.vue";
export default {
  name: "HeroMainText",
  components: {
    CallToAction,
  },
};
</script>
<style lang="">
</style>