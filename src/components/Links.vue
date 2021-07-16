<template>
  <!-- desktop links -->
  <div class="hidden sm:block">
    <div class="flex space-x-4">
      <a
        id="anchorAbout"
        class="
          text-gray-300
          hover:bg-gray-700 hover:text-white
          px-3
          py-2
          rounded-md
          text-sm
          font-semibold
        "
        @click="scrollToAbout"
        >About</a
      >
      <a
        id="anchorWorks"
        class="
          text-gray-300
          hover:bg-gray-700 hover:text-white
          px-3
          py-2
          rounded-md
          text-sm
          font-semibold
        "
        @click="scrollToWorks"
        >Our Works</a
      >
      <a
        id="anchorContact"
        class="
          text-black
          bg-white
          hover:bg-gray-300
          px-3
          py-2
          rounded-md
          text-sm
          font-semibold
        "
        @click="scrollToContact"
        >Contact Us</a
      >
    </div>

    <!-- mobile menu, show/hide based on menu state. -->
    <div id="mobileMenu" class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          id="anchorAboutMobile"
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-semibold
          "
          @click="scrollToAbout"
          >About</a
        >
        <a
          id="anchorWorksMobile"
          class="
            text-gray-300
            hover:bg-gray-700 hover:text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-semibold
          "
          @click="scrollToWorks"
          >Our Works</a
        >
        <a
          id="anchorContactMobile"
          class="
            text-black
            bg-white
            hover:bg-gray-300
            block
            px-3
            py-2
            rounded-md
            text-base
            font-semibold
          "
          @click="scrollToContact"
          >Contact Us</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
  mounted() {
    this.$emit("toggleNavbar");
  },
  methods: {
    scrollToAbout() {
      this.$emit("scrollToAbout");
    },
    scrollToWorks() {
      this.$emit("scrollToWorks");
    },
    scrollToContact() {
      this.$emit("scrollToContact");
    },
  },
};
</script>
