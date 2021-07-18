<template>
  <div
    id="top"
    class="
      w-full
      text-lunur-100
      from-black
      via-black
      to-lunur-700
      bg-gradient-to-b
      relative
    "
    @scroll="toggleAstronaut"
  >
    <nav id="navbar" class="sticky top-0 z-10 bg-black">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <HamburgerButton @toggleButton="toggleButton" :toggle="toggle" />
          <LogoAndText />
          <DesktopLinks
            @scrollToContact="scrollToContact"
            @scrollToWorks="scrollToWorks"
            @scrollToAbout="scrollToAbout"
            :toggle="toggle"
          />
        </div>
      </div>
      <MobileLinks
        @scrollToContact="scrollToContact"
        @scrollToWorks="scrollToWorks"
        @scrollToAbout="scrollToAbout"
        :toggle="toggle"
      />
    </nav>

    <div
      class="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        pb-48
        md:pb-72
        lg:pb-80
        xl:pb-moon
      "
    >
      <Hero @scrollToContact="scrollToContact" @scrollToWorks="scrollToWorks" />
      <Team />
      <Works @scrollToContact="scrollToContact" />
      <Contact />
    </div>

    <AstronautAnchor @toggleAstronaut="toggleAstronaut" @scrollUp="scrollUp" />
    <BackgroundAnchor />
  </div>
</template>

<script>
import HamburgerButton from "../components/HamburgerButton.vue";
import LogoAndText from "../components/LogoAndText.vue";
import DesktopLinks from "../components/DesktopLinks.vue";
import MobileLinks from "../components/MobileLinks.vue";
import Works from "../components/Works.vue";
import Hero from "../components/Hero.vue";
import Team from "../components/Team.vue";
import Contact from "../components/Contact.vue";
import AstronautAnchor from "../components/AstronautAnchor.vue";
import BackgroundAnchor from "../components/BackgroundAnchor.vue";

import { ref } from "vue";

import script from "../scripts";

export default {
  name: "Home",
  components: {
    HamburgerButton,
    LogoAndText,
    DesktopLinks,
    MobileLinks,
    Works,
    Hero,
    Contact,
    AstronautAnchor,
    BackgroundAnchor,
    Team,
  },
  methods: {
    toggleAstronaut() {
      script.toggleAstronaut();
    },
    scrollUp() {
      script.scrollUp();
    },
    scrollToContact() {
      script.scrollToContact();
    },
    scrollToAbout() {
      script.scrollToAbout();
    },
    scrollToWorks() {
      script.scrollToWorks();
    },
  },
  setup() {
    const toggle = ref(false);
    const toggleButton = () => {
      console.log("test");
      toggle.value = !toggle.value;
    };

    return { toggle, toggleButton };
  },
};
</script>
