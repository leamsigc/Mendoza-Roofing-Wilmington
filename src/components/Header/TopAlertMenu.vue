<template >
  <div class="p-5 bg-gray-900 text-sm text-green-100">
    <div class="container m-auto grid grid-cols-12">
      <div class="col-span-5">
        <span class="line-after">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-map-fill inline-block"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
            />
          </svg>
          P.O Box 952 Supply NC 28462
        </span>
        <span class="ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope inline-block"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
            />
          </svg>
          MendozaRoofingWilmington@gmail.com
        </span>
      </div>
      <div class="col-span-5 ml-auto">Facebook</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopMenu",
};
</script>
<style >
.line-after {
  position: relative;
}
.line-after::after {
  display: inline-block;
  position: absolute;
  content: "";
  background: #828282;
  height: 60px;
  width: 1px;
  top: -20px;
  bottom: 0;
  right: -6px;
  transform: rotate(20deg);
}
</style>