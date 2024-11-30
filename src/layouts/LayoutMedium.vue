<script setup>

import MediumAside from '@/components/templates/medium/MediumAside.vue'
</script>

<template>
  <div id="layout-medium">

    <aside>
      <medium-aside />
    </aside>
    <main>
      <router-view />
    </main>

  </div>
</template>

<style scoped>
#layout-medium {

  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside main'
    'aside footer';
  min-height: 100vh;
}


aside {
  border-right: #eeeeee 1px solid;
  box-shadow: 0 0 10px 0 #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  grid-area: aside;
}

main {
  min-height: 80%;
  grid-area: main;
}

footer {

  justify-content: space-between;
  align-items: center;

  background-color: #eeeeee;
  grid-area: footer;
}
</style>
