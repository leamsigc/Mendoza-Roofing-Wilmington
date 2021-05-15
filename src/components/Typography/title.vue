<template  >
 <h2 class="font-black  uppercase flex justify-items-center place-items-center mb-8" :class="extaClasess">
     <span class=" inline-block mr-1 w-8 h-1 bg-green-400 "></span>
     {{title}}
     </h2>
</template>
<script>
export default {
  name: "Title",
  props: {
      title:{
          type:String,
          default:'Yes, we also do new constructions.'
      },
      extaClasess:{
          type:String,
          default:'text-green-400 text-3xl'
      }
  }
};
</script>
<style lang="">
</style>