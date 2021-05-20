<template  >
  <nav
    class="container mx-auto grid grid-cols-12 text-white font-semibold uppercase px-4 md:p-2"
  >
    <div class="logo col-span-full md:col-span-4">
      <g-image
        class="inline-block h-28 w-52"
        src="/img/logoTransparent.png"
        alt="Mendoza roofing company"
      />
    </div>
    <ul class="col-span-full md:col-span-6 flex justify-evenly items-center">
      <li>
        <router-link to="/" class="hover:text-green-300 transition-all">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:text-green-300 transition-all">
          About
        </router-link>
      </li>
      <li>
        <router-link to="/" class="hover:text-green-300 transition-all">
          Services
        </router-link>
      </li>
      <li>
        <router-link to="/" class="hover:text-green-300 transition-all">
          Contact
        </router-link>
      </li>
    </ul>
    <ul
      class="col-span-full md:col-span-2 mt-4 md:mt-0 flex justify-between items-center"
    >
      <li>
        <a
          href="tel:910-367-7628"
          class="hover:text-green-300 transition-all text-center inline-block font-extralight text-xs"
        >
          CALL NOW
          <span class="block font-bold text-2xl"> 910-367-7628 </span>
        </a>
      </li>
      <li>
        <svg
          @click="OpenSideInformation"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-filter-right inline-block ml-4 font-black cursor-pointer"
          viewBox="0 0 20 20"
        >
          <path
            d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </li>
    </ul>
    <div
      :class="{
        'top-0 bottom-0 left-0 right-0 translate-x-0 z-50 max-h-screen': sideInformationOpen,
        'top-0 bottom-0 left-0 right-0 translate-x-full  ': !sideInformationOpen,
      }"
      class="side-information absolute grid grid-cols-3 transition-all transform-gpu"
    >
      <div
        class="col-span-1 md:col-span-2 bg-green-900 bg-opacity-40 cursor-pointer"
        @click="OpenSideInformation"
      ></div>
      <div
        class="col-span-2 md:col-span-1 bg-gray-50 py-20 px-10 flex flex-col justify-content-center items-center"
      >
        <div class="logo col-span-4">
          <g-image
            class="inline-block h-20 w-40 md:h-28 md:w-52"
            src="/img/logoBigTransparent.png"
            alt="Mendoza roofing company"
          />
        </div>
        <Title extaClasess="text-md md:text-2xl text-green-400" />
        <SubTitle extaClasess="text-xs md:text-normal mb-10 text-gray-800 " />
        <CallToAction
          extraClasses="bg-green-400 text-center text-white  hover:bg-transparent hover:text-green-400 mb-10 text-xs p-2"
        />
      </div>
    </div>
  </nav>
</template>
<script>
import Title from "../Typography/title";
import SubTitle from "../Typography/SubTitle";
import CallToAction from "../Btn/CallToAction";
export default {
  name: "MainNav",
  components: { SubTitle, Title, CallToAction },
  data: () => ({
    sideInformationOpen: false,
  }),
  methods: {
    OpenSideInformation() {
      this.sideInformationOpen = !this.sideInformationOpen;
    },
  },
};
</script>
<style lang="">
</style>