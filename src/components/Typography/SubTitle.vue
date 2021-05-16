<template  >
  <h2 class="font-semibold" :class="extaClasess">
    {{ Subtitle }}
  </h2>
</template>
<script>
export default {
  name: "SubTitle",
  props: {
    Subtitle: {
      type: String,
      default:
        "We have over 50 years experience in the installation repair and replacement of both Residential and Commercial roofs.",
    },
    extaClasess: {
      type: String,
      default: " text-lg mb-10 text-gray-800",
    },
  },
};
</script>
<style lang="">
</style>