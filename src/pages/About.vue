<template>
  <Layout>
    <div class="bg-gray-900 relative">
      <g-image
        src="/img/AboutUsMendozaRoofingWilmington.jpg"
        fit="cover"
        class="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-10 pointer-events-none"
      />
      <MainNav />
      <div
        class="container mx-auto py-24 text-gray-200 grid grid-cols-3 px-5 md:px-0"
      >
        <div class="col-span-3 md:col-span-2">
          <Title title=" Mendoza Roofing Wilmington " />
          <SubTitle extaClasess="text-gray-50 text-2xl mb-10" />
          <p class="mb-5">
            We do both residential and commercial roofing for all types of
            roofs. At Mendoza Roofing we use only the highest quality products
            to insure that your new roof is built with the integrity and
            craftsmanship to last for many years to come
          </p>
          <p>
            We are a certified, dependable, licensed, and fully insured roofing
            company. All Mendoza Roofing employees are fully covered by Workers
            Compensation Insurance and Liability Insurance.
          </p>
        </div>
        <div class="col-span-3 mt-10 md:mt-0 md:col-span-1 grid content-center">
          <div class="text-center">
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import MainNav from "../components/Navigation/MainNav";
import Title from "../components/Typography/title";
import SubTitle from "../components/Typography/SubTitle";
import CallToAction from "../components/Btn/CallToAction";
export default {
  metaInfo: {
    title: "About us",
  },
  components: { MainNav, Title, SubTitle, CallToAction },
};
</script>
