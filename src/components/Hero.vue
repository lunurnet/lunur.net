<template>
  <div id="hero" class="pt-10 sm:mt-18 md:mt-36 lg:mt-48 xl:mt-72">
    <div class="sm:text-center lg:text-left">
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-lunur-500
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block xl:inline">Robust designs</span>
        <span class="block xl:inline">tailored for you</span>
      </h1>
      <p
        class="
          mt-3
          text-base text-lunur-700
          sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
          md:mt-5 md:text-xl
          lg:mx-0
        "
      >
        Lunur is a development firm looking to take your idea to the moon!
        Website, mobile app, AI, you name it, we can make it. Our team is a
        diversified group with many specialties which allows us to handle any
        project with ease.
      </p>
      <p
        class="
          mt-3
          text-base text-lunur-700
          sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
          md:mt-5 md:text-xl
          lg:mx-0
        "
      >
        If you would like to join us at Lunur, feel free to send us a message.
        We are always excited to take on new talent!
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div>
          <a
            id="anchorContactHero"
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-lunur-700
              hover:bg-lunur-800
              md:py-4 md:text-lg md:px-10
            "
            @click="scrollToContact"
          >
            Get Started
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            id="anchorWorksHero"
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-black
              bg-lunur-100
              hover:bg-lunur-200
              md:py-4 md:text-lg md:px-10
            "
            @click="scrollToWorks"
          >
            Our Portfolio
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    scrollToContact() {
      this.$emit("scrollToContact");
    },
    scrollToWorks() {
      this.$emit("scrollToWorks");
    },
  },
};
</script>
