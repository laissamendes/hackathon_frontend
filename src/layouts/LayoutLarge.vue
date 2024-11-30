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

width: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside main'
    'aside footer';

}



aside {
  grid-area: aside;
}

main {
  min-height: 80%;
  padding: 0rem;
  grid-area: main;
}

</style>
