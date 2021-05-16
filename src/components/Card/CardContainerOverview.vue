<template  >
  <div
    class="container mx-auto grid grid-cols-10 md:justify-between px-1 md:px-0"
  >
    <Card class="col-span-10 md:col-span-4 relative">
      <template slot="image">
        <g-image
          src="~/assets/img/MendozaRoofingBestWork1.png"
          fit="cover"
          class="absolute top-0 bottom-0 left-0 right-0 h-full"
        />
      </template>
    </Card>
    <div class="col-span-12 md:col-span-2 p-10 md:p-0"></div>
    <Card
      class="col-span-10 md:col-span-4 relative"
      title="inspections & Reports"
      description="Mendoza Roofing Contractors offer a wide range of other roofing services."
    >
      <template slot="image">
        <g-image
          src="~/assets/img/MendozaRoofingBestWork2.png"
          fit="cover"
          class="absolute top-0 bottom-0 left-0 right-0 h-full"
        />
      </template>
    </Card>
  </div>
</template>
<script>
import Card from "./card.vue";
export default {
  name: "CardContainerOverview",
  components: { Card },
};
</script>
<style lang="">
</style>