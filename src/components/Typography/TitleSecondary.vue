<template  >
  <h2
    class="font-bold uppercase flex flex-col justify-items-center mb-8 tracking-widest"
    :class="extaClasess"
  >
    <div>
      {{ title }}
    </div>
    <div class="w-1/5 h-1 bg-green-400 mt-6"></div>
  </h2>
</template>
<script>
export default {
  name: "TitleSecondary",
  props: {
    title: {
      type: String,
      default: "Our Services",
    },
    extaClasess: {
      type: String,
      default: "text-gray-50  text-2xl",
    },
  },
};
</script>
<style lang="">
</style>