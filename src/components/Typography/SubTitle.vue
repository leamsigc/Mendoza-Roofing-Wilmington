<template  >
 <h2 class="font-semibold text-gray-800 text-lg mb-10">
     {{Subtitle}}
     </h2>
</template>
<script>
export default {
  name: "SubTitle",
  props: {
      Subtitle:{
          type:String,
          default:'We have over 50 years experience in the installation repair and replacement of both Residential and Commercial roofs.'
      }
  }
};
</script>
<style lang="">
</style>