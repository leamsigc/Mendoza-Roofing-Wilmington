<template >
  <footer class="p-5 bg-black  text-gray-50">
        <div class="container mx-auto grid grid-cols-3 text-center py-20">
            <div class="col-span-1">
                 <g-image src="https://roofingmendoza.com/MendozaRoofingCompanyWilmingtonNortCarolinalog@2x.d153647d.png" height="80px" fit="fit" class="inline-block h-52" />
            </div>
            <div class="col-span-1 grid grid-cols-5 gap-2">
                <div class="col-span-1 grid content-center">
                    <span class="bg-green-400 flex justify-items-center  items-center  rounded-full w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone-fill inline-block m-auto" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </span>
                </div>
                <div class="col-span-4 text-left">
                    <span class="text-sm">Need help?</span>
                     <CallToAction text='Get Free Quote Now' extraClasses="tracking-widest font-bold px-24"/>
                </div>
            </div>
            <div class="col-span-1">3</div>
        </div>
  </footer>
</template>
<script>

import CallToAction  from '../Btn/CallToAction'
export default {
  name: "PageFooter",
  components: {  CallToAction}
};
</script>
<style >

</style>