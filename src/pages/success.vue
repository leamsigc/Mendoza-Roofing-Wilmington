<template>
  <Layout>
    <div class="bg-gray-900 relative">
      <g-image
        src="/img/AboutUsMendozaRoofingWilmington.jpg"
        fit="cover"
        class="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-10 pointer-events-none"
      />
      <MainNav />
      <div class="container mx-auto py-24 text-gray-200 grid grid-cols-3">
        <div class="col-span-2">
          <Title title=" Mendoza Roofing Wilmington " />
          <SubTitle extaClasess="text-gray-50 text-2xl mb-10" />
          <div
            class="bg-green-50 p-4 rounded flex items-start text-green-600 my-4 shadow-lg max-w-xl"
          >
            <div class="text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-5 pt-1"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
                />
              </svg>
            </div>
            <div class="px-3">
              <h3 class="text-green-800 font-semibold tracking-wider">
                Thank you for contacting us
              </h3>
              <p class="py-2 text-green-700">
                We have recieve your message,<br />
                Thank you for contating us, <br />
                We will contact you as soon as posible.
              </p>
              <div class="space-x-6">
                <router-link
                  to="/"
                  class="text-green-900 font-semibold tracking-wider hover:underline focus:outline-none"
                >
                  Home Page
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 grid content-center">
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
    title: "Mendoza Roofing ||Thank you for contacting us",
  },
  components: { MainNav, Title, SubTitle, CallToAction },
};
</script>
