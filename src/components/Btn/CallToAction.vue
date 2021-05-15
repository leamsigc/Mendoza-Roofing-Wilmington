<template  >
  <button
    class="bg-green-400 text-white py-5 px-10 mb-10 uppercase font-semibold text-lg rounded-md hover:bg-transparent hover:text-green-400 border-green-400 border-2 transition-all"
  :class="extraClasses"
  >
    {{text}}
  </button>
</template>
<script>
export default {
  name: "CallToAction",
  props:{
    text: {
      type: String,
      default: "Get In Contact Now"
    },
    extraClasses: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="">
</style>