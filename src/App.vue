<template>
  <HeaderApp />

  <router-view></router-view>
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

<style lang="scss" scoped></style>