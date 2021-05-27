<template>
  <Layout>
    <HomeHero />
    <CardContainerOverview />
    <AboutUs />
    <MainForm />
    <HomeCallToActionContainer />
    <HomeServices />
    <HomeCallToActionContainer />
  </Layout>
</template>

<script>
import HomeHero from "../components/Hero/HomeHero.vue";
import CardContainerOverview from "../components/Card/CardContainerOverview.vue";
import AboutUs from "../components/Home/AboutUs.vue";
import HomeCallToActionContainer from "../components/Home/HomeCallToActionContainer.vue";
import HomeServices from "../components/Home/HomeServices.vue";
import MainForm from "../components/Forms/MainForm.vue";
export default {
  metaInfo: {
    title:
      "Home || Mendoza Roofing Wilmington - Best roofing company around the Brunswick County.",
    meta: [
      { name: "twitter:site", content: "@RoofingMendozaWilmington" },
      { name: "twitter:image", content: "./img/MendozaRoofingCompany.png" },
      { name: "og:image", content: "./img/MendozaRoofingCompany.png" },
      { name: "twitter:creator", content: "@RoofingMendozaWilmington" },
    ],
  },
  components: {
    HomeHero,
    CardContainerOverview,
    AboutUs,
    HomeCallToActionContainer,
    HomeServices,
    MainForm,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
