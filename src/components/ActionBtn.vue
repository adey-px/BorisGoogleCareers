<!-- template section -->
<template>
  <button
    @click="clickHandler"
    class="rounded border-0 bg-brand-blue-1 px-3 py-3 font-medium text-white hover:shadow-blue"
  >
    Sign In
  </button>
</template>

<!-- script section -->
<script>
  export default {
    name: 'ActionBtn',
    methods: {
      clickHandler(event) {
        console.log(event);
      },
    },
  };
</script>

<!-- 
  NB: type von shortcuts gives onClick (@click)
-->
