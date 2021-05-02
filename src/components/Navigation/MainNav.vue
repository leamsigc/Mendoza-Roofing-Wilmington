<template  >
  <nav
    class="container mx-auto grid grid-cols-12 text-white font-semibold uppercase"
  >
    <div class="logo col-span-4">
      <img
        height="80"
        width="120"
        src="https://roofingmendoza.com/MendozaRoofingCompanyWilmingtonNortCarolinalog@2x.d153647d.png"
        alt="Mendoza roofing company"
      />
    </div>
    <ul class="col-span-6 flex justify-evenly items-center">
      <li>
        <a href="" class="hover:text-green-300 transition-all">Home</a>
      </li>
      <li>
        <a href="" class="hover:text-green-300 transition-all">About</a>
      </li>
      <li>
        <a href="" class="hover:text-green-300 transition-all">Services</a>
      </li>
      <li>
        <a href="" class="hover:text-green-300 transition-all">Contact</a>
      </li>
    </ul>
    <ul class="col-span-20 flex justify-between items-center">
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
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-filter-right inline-block ml-4 font-black"
          viewBox="0 0 20 20"
        >
          <path
            d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "MainNav",
  components: {},
};
</script>
<style lang="">
</style>