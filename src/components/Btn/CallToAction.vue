<template  >
  <a
    href="tel:+910-367-7628"
    class="uppercase inline-block font-semibold rounded-md border-green-400 border-2 transition-all cursor-pointer"
    :class="extraClasses"
  >
    {{ text }}
  </a>
</template>
<script>
export default {
  name: "CallToAction",
  props: {
    text: {
      type: String,
      default: "Get In Contact Now",
    },
    extraClasses: {
      type: String,
      default:
        "bg-green-400 text-white  hover:bg-transparent hover:text-green-400 mb-10 px-10 py-5 text-lg",
    },
  },
};
</script>
<style lang="">
</style>