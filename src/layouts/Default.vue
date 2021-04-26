<template>
  <div>
    <!-- Header -->
    <PageHeader />
    <slot />
    <!-- Footer -->
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
export default {
  components: {
    PageHeader,
  },
};
</script>
<style>
</style>
