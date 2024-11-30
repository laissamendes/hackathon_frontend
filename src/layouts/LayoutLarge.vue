<script setup>

import LargeAside from '@/components/templates/large/LargeAside.vue'

</script>

<template>
  <div id="layout-large">

    <aside>
      <large-aside />
    </aside>
    <main>
      <router-view />
    </main>

  </div>
</template>

<style scoped>
#layout-large {
display: flex;
flex-direction: column;
width: 100%;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'aside'
    'main';
}

aside {
  grid-area: aside;
}

main {
  min-height: 100%;
  width: 100vw;
  padding: 0rem;
  /* grid-area: main; */
}

</style>
