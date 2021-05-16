<template  >
  <a
    href="tel:+910-367-7628"
    class="py-5 px-10 uppercase inline-block font-semibold text-lg rounded-md border-green-400 border-2 transition-all cursor-pointer"
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
        "bg-green-400 text-white  hover:bg-transparent hover:text-green-400 mb-10",
    },
  },
};
</script>
<style lang="">
</style>