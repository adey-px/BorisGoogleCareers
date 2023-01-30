<!------------------ vue 2 options-Api method ---------------------->

<!-- template section -->
<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">
          {{ company }}
        </a>
      </div>
    </div>
  </header>
</template>

<!-- script section -->
<script>
  export default {
    name: "NavBar",
    data() {
      return {
        company: "Google Careers",
      };
    },
  };
</script>
