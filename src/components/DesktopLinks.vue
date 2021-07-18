<template>
  <!-- desktop links -->
  <div class="block sm:block">
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
  </div>
</template>
<script>
export default {
  name: "DesktopLinks",
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
