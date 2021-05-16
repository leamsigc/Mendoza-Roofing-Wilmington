<template  >
  <div class="py-32 mt-20 px-5 md:px-0 call-to-action_container">
    <div class="container mx-auto grid grid-cols-6">
      <div class="col-span-6 grid place-items-center">
        <Title title="*Free estimates" extaClasess="text-gray-50 text-3xl" />
        <CallToAction
          text="Get Free Quote Now"
          extraClasses="tracking-widest font-bold px-24 text-white text-center"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../Typography/title.vue";
import CallToAction from "../Btn/CallToAction.vue";

export default {
  name: "HomeCallToActionContainer",
  components: {
    Title,
    CallToAction,
  },
};
</script>
<style >
.call-to-action_container {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/img/MendozaRoofingShallotte.png");
  background-position: center;
  background-size: cover;
  /* background-attachment: fixed; */
}
</style>