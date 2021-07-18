<template>
  <div id="about" class="pt-24 sm:mt-12 md:mt-28 lg:mt-36 xl:mt-48">
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
        Meet The Team
      </h1>
      <p
        class="
          mt-3
          text-base text-lunur-600
          sm:mt-5 sm:text-lg sm:mx-auto
          md:mt-5 md:text-xl
          lg:mx-0
        "
      >
        Our team is full of highly qualified individuals with many different
        backgrounds. This allows us to complete our work with a degree of
        expertise no matter the project.
      </p>
    </div>
  </div>

  <div
    class="
      grid grid-cols-2 grid-rows-3
      lg:grid-cols-3 lg:grid-rows-2
      gap-6
      mt-8
    "
  >
    <Person :people="people" />
  </div>
</template>

<script>
import Person from "./Person.vue";
import peopleJson from "../assets/people.json";
export default {
  name: "Team",
  components: {
    Person,
  },
  data() {
    return {
      people: peopleJson,
    };
  },
};
</script>
