<template>
  <!-- mobile menu, show/hide based on menu state. -->
  <div id="mobileMenu" class="block sm:block" v-if="toggle">
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
</template>

<script>
export default {
  name: "Links",
  props: {
    toggle: Boolean,
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
