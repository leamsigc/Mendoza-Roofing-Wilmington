<template  >
  <div
    class="container mx-auto grid grid-cols-2 py-10 text-gray-600 gap-8 my-20 px-5 md:px-2"
  >
    <div class="col-span-2 md:col-span-1">
      <Title title="Our Services" />
      <SubTitle
        Subtitle="Mendoza Roofing is one of the most trusted roofing companies in Wilmington, serving in the Brunswick County."
      />
      <p class="text-justify mb-2">
        We do both residential and commercial roofing for all types of roofs. At
        Mendoza Roofing we use only the highest quality products to insure that
        your new roof is built with the integrity and craftsmanship to last for
        many years to come.
      </p>
      <p class="text-justify">
        We are a certified, dependable, licensed, and fully insured roofing
        company. All Mendoza Roofing employees are fully covered by Workers
        Compensation Insurance and Liability Insurance.
      </p>
    </div>
    <div class="col-span-2 md:col-span-1">
      <Title title="Checklist of a Good Roofing Company" />

      <div class="checklist__container mt-8">
        <div
          class="check_item text-green-400 mt-4"
          v-for="(option, index) in checkList"
          :key="index"
        >
          <span class="inline-block mr-2 md:mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check-circle inline-block"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
              />
            </svg>
          </span>
          <span class="text">{{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "../Typography/title.vue";
import SubTitle from "../Typography/SubTitle.vue";
import CallToAction from "../Btn/CallToAction.vue";

export default {
  name: "HomeServices",
  components: {
    Title,
    CallToAction,
    SubTitle,
  },
  data: () => ({
    checkList: [
      "Required Liability and Workman’s Comp Insurance on all employees.",
      "State licensed and in good current standing",
      "Local company and crews",
      "Years in business and reputation",
      "Dependable - Keep their word",
      "Credibility in the community",
      "References of previous work",
      "Members of local community and business groups",
      "Contract terms - clear & no hidden costs",
    ],
  }),
};
</script>
<style >
</style>