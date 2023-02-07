<!-------------------  Imports all from components ----------------->

<!-- template section -->
<template>
  <main-nav />
</template>

<!-- script section -->
<script>
  // @ts-nocheck
  import MainNav from "@/components/MainNav.vue";

  export default {
    name: "App",
    components: {
      MainNav,
    },
  };
</script>
