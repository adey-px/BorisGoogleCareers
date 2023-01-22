<!-------------------  Imports all from components ----------------->

<!-- template section -->
<template>
  <NavBar />
</template>

<!-- script section -->
<script>
  import NavBar from "@/components/MainNav.vue";

  export default {
    name: "App",
    components: {
      NavBar,
    },
  };
</script>
