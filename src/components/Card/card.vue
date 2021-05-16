<template  >
  <div
    class="card bg-gray-100 grid grid-cols-5 text-gray-600 rounded-lg absolute -top-40"
  >
    <div class="col-span-2 relative">
      <slot name="image"></slot>
    </div>
    <div class="col-span-3 py-5 md:py-16 px-2 md:px-5">
      <div class="card-title">
        <h3 class="text-green-400 uppercase font-extrabold md:text-lg">
          {{ title }}
        </h3>
      </div>
      <div class="card-sub text-gray-400 uppercase">
        <span class="inline-block mr-1 w-8 h-1 bg-green-400"></span> Roofing
      </div>
      <p class="card-desc text-base text-justify mt-5">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    title: {
      type: String,
      default: "All aspects of Re-Roof",
    },
    description: {
      type: String,
      default:
        "We have over 50 years experience in the installation repair and replacement of both Residential and Commercial roofs from Metal",
    },
  },
};
</script>
<style lang="">
</style>