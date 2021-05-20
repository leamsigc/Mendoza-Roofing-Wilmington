<template  >
  <div
    class="container mx-auto pb-10 px-1 md:px-2 grid grid-cols-12 text-gray-600 md:gap-8"
  >
    <div class="col-span-12 md:col-span-6 pr-4">
      <Title />
      <SubTitle />
      <p class="text-justify">
        We also specialize in all typesod roofing repairs, from Re-Roofs to Flat
        Roofs, from tiles to slate as well as Asphalt and lead roofing. We are
        an Approved Installer for EDS Waterproof membranes,. All our work is
        fully insured.
      </p>
      <div class="optinons_container mt-10 grid grid-cols-2">
        <div class="col-span-2 md:col-span-1">
          <div
            class="mt-3 text-green-400 font-medium"
            v-for="(option, index) in aboutUsOptionsLeft"
            :key="index"
          >
            <span class="icon inline-block mr-2 md:mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-shield-fill-check inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <span class="text">{{ option }}</span>
          </div>
        </div>
        <div class="col-span-2 md:col-span-1">
          <div
            class="mt-3 text-green-400 font-medium"
            v-for="(option, index) in aboutUsOptionsRight"
            :key="index"
          >
            <span class="icon inline-block mr-2 md:mr-6">
              <!-- Make a component for the list in the future  we are using the same patter in more than one component  -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-shield-fill-check inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                />
              </svg>
            </span>
            <span class="text">{{ option }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6">
      <div class="grid grid-cols-6 gap-1 md:gap-4">
        <div class="col-span-3 pt-12 text-gray-50">
          <div class="bg-green-400 text-center py-24 rounded-lg">
            <div class="text-6xl md:text-9xl font-black uppercase">50</div>
            <div class="text-xl md:text-4xl uppercase font-bold">
              years of experience
            </div>
          </div>
        </div>
        <div class="col-span-3 relative">
          <g-image
            src="~/assets/img/MendozaRoofingNortCarolinaBeachRoofing1.png"
            fit="cover"
            class="absolute top-0 bottom-0 left-0 right-0 h-full w-full"
          />
        </div>
        <div class="col-span-6 relative h-96">
          <g-image
            src="~/assets/img/MendozaRoofingNortCarolinaBeachRoofing2.png"
            fit="cover"
            class="absolute top-0 bottom-0 left-0 right-0 h-full w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../Typography/title.vue";
import SubTitle from "../Typography/SubTitle.vue";
export default {
  name: "AboutUs",
  components: {
    Title,
    SubTitle,
  },
  data: () => ({
    aboutUsOptionsLeft: [
      "All aspects of Re-Roof/ New Roofs",
      "Metal Rooffs",
      "Title Roofs",
      "Slate Roofs & Flat Roofs",
      "Shingle",
      "Asphalt Roofs",
      "Chimey Repairs & Pointin",
    ],
    aboutUsOptionsRight: [
      "Roof inspections and Reports",
      "Fascia, Soffits & Guttering",
      "Asphalt Roofs",
      "Roof Coating",
      "Pressure Cleaning and Restorations",
      "Maintenance",
      "Solar Panel Roofs",
      "And More ...",
    ],
  }),
};
</script>
<style lang="">
</style>