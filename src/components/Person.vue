<!--Currently the assets come from the lunur website, NOT the local assets. 
I don't know how to fix local absolute paths. -->
<template>
  <div class="sm:text-center lg:text-left" v-for="data in people" :key="data">
    <div>
      <img
        class="rounded-lg w-full h-48 sm:h-72 md:h-96 object-cover"
        :src="data.src"
        alt="Avatar"
      />
    </div>

    <h2 class="text-xl md:text-2xl font-semibold mt-4">
      {{ data.name }}
    </h2>
    <p class="text-lg md:text-xl font-base text-lunur-500 mt-1">
      {{ data.role }}
    </p>
    <div class="space-x-4 mt-3 text-lunur-700">
      <a :id="data.githubAnchor" class="inline-block" :href="data.github">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
        >
          <title>Github</title>
          <path fill="currentColor" :d="data.githubD" />
        </svg>
      </a>
      <a :id="data.linkedinAnchor" class="inline-block" :href="data.linkedin">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
        >
          <title>Linkedin</title>
          <path fill="currentColor" :d="data.linkedinD" />
        </svg>
      </a>
      <a :id="data.websiteAnchor" class="inline-block" :href="data.website">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="data.websiteD"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    people: Object,
  },
};
</script>
