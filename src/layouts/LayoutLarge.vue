<script setup>

import LargeAside from '@/components/templates/large/LargeAside.vue'
import LargeFooter from '@/components/templates/large/LargeFooter.vue'
</script>

<template>
  <div id="layout-large">

    <aside>
      <large-aside />
    </aside>
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
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

footer {
  justify-content: space-between;
  position: relative;
  align-items: center;
  background-color: #eeeeee;
  grid-area: footer;
}
</style>
