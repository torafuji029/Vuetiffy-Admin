<template>
  <v-app>
    <v-main id="xc-unauth">
      <v-fade-transition mode="out-in">
        <router-view :key="key" ref="page" />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss">
#xc-unauth {
  height: 100%;
  background: url('../assets/background1.jpg');
  background-size: cover;
}
</style>
