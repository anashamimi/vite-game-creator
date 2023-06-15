<template>
  <div>
    <HeaderApp />
  <main>
    <router-view></router-view>
  </main>
    <h1>ciao</h1>
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
  export default {
    name: 'App',
    components: {
    HeaderApp,
}
  }
</script>

<style lang="scss" scoped>

</style>