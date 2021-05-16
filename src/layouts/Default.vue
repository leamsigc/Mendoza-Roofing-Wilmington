<template>
  <div class="font-body relative overflow-x-hidden">
    <!-- Header -->
    <PageHeader />
    <slot />
    <!-- Footer -->
    <PageFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import PageHeader from "../components/Header/PageHeader";
import PageFooter from "../components/Footer/PageFooter";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
<style>
</style>
