<template>
  <div
    id="astronaut"
    class="
      fixed
      bottom-0
      right-0
      p-8
      z-10
      duration-200
      ease-in
      transition-all
      opacity-0
    "
  >
    <a id="anchorAstronaut" class="cursor-default" href="#top">
      <p
        class="
          bg-lunur-100
          text-lunur-900
          py-2
          px-3
          text-sm
          md:py-3 md:px-4 md:text-base
          lg:text-lg
          font-semibold
          rounded-full
          mb-4
          md:mb-6
          lg:mb-8
          shadow-lg
        "
      >
        Tap me to go up!
      </p>
      <img
        class="w-12 md:w-16 lg:w-20 float-right animate-bounce"
        src="../assets/astronaut.png"
        alt="Moon"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "AstronautAnchor",
};
</script>
