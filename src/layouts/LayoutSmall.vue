<script setup>
  import SmallHeader from '@/components/templates/small/SmallHeader.vue';
  import SmallFooter from '@/components/templates/small/SmallFooter.vue';
</script>

<template>
  <div id="layout-small">
    <header>
      <small-header />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <small-footer />
    </footer>
  </div>
</template>

<style scoped>
#layout-small {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


footer {

  margin-top: auto;
  font-size: 17px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
}
</style>