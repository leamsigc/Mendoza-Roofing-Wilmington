<template  >
  <div class="container mx-auto grid grid-cols-10 justify-between ">
    <Card class="col-span-4 relative">
      <template slot="image"> 
        <g-image src="~/assets/img/MendozaRoofingBestWork1.png" fit="cover" class="absolute top-0 bottom-0 left-0 right-0 h-full"  />
      </template>
    </Card>
    <div class="div col-span-2"></div>
    <Card class="col-span-4 relative" title="inspections & Reports" description="Mendoza Roofing Contractors offer a wide range of other roofing services." >
      <template slot="image"> 
        <g-image src="~/assets/img/MendozaRoofingBestWork2.png" fit="cover" class="absolute top-0 bottom-0 left-0 right-0 h-full"  />
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