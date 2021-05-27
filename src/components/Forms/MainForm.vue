<template  >
  <div class="container mx-auto py-10 grid grid-cols-2">
    <div class="col-span-1 relative">
      <g-image
        src="/img/HomeHeroBg.png"
        fit="cover"
        class="absolute top-0 bottom-0 left-0 right-0 h-full w-full"
      />
    </div>
    <form
      class="col-span-1 bg-gray-800 flex flex-col py-10 px-10 text-gray-50"
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label> Don’t fill this out: <input name="bot-field" /> </label>
        </p>
      </div>
      <div class="sender-info">
        <div class="flex flex-col justify-between">
          <label for="name" class="label font-semibold text-lg"> Name: </label>
          <input
            class="px-1 py-2 text-gray-900"
            type="text"
            name="name"
            v-model="formData.name"
            required
          />
        </div>
        <div class="flex flex-col justify-between mt-5">
          <label for="email" class="label font-semibold text-lg">E-Mail:</label>
          <input
            class="px-1 py-2 text-gray-900"
            type="email"
            name="email"
            v-model="formData.email"
            required
          />
        </div>
      </div>

      <div class="flex flex-col justify-between mt-5">
        <label for="message" class="label font-semibold text-lg">Message</label>
        <textarea
          class="px-1 py-2 text-gray-900"
          name="message"
          v-model="formData.message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="block px-3 py-2 bg-green-400 mt-8 text-lg font-bold text-white uppercase"
      >
        Contact Now
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "MainForm",
  props: {
    text: {
      type: String,
      default: "Get In Contact Now",
    },
    extraClasses: {
      type: String,
      default:
        "bg-green-400 text-white  hover:bg-transparent hover:text-green-400 mb-10 px-10 py-5 text-lg",
    },
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
    },
  },
};
</script>
<style lang="">
</style>