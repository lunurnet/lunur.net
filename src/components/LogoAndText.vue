<template>
  <a
    id="anchorLogo"
    href="/"
    class="
      flex-1 flex
      items-center
      justify-center
      sm:items-stretch sm:justify-start
    "
  >
    <div class="flex-shrink-0 flex items-center">
      <img class="block h-8 w-auto" src="../assets/logo.png" alt="lunur" />
    </div>
    <div class="hidden sm:flex sm:ml-6 items-center">
      <h1 class="text-3xl font-semibold text-lunur-200">Lunur</h1>
    </div>
  </a>
</template>
<script>
export default {
  name: "LogoAndText",
};
</script>
