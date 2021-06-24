<template>
  <div class="d-flex flex-grow-1 flex-row mt-2">
    <v-navigation-drawer
      :value="true"
      :app="$vuetify.breakpoint.mdAndDown"
      :permanent="$vuetify.breakpoint.lgAndUp"
      floating
      class="elevation-1 rounded flex-shrink-0"
      :class="[$vuetify.rtl ? 'ml-3' : 'mr-3']"
      width="240"
    >
      <e-mail-menu class="pa-3"></e-mail-menu>
    </v-navigation-drawer>

    <div class="d-flex flex-grow-1 flex-column">
      <v-toolbar class="hidden-lg-and-up flex-grow-0 mb-2">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="title font-weight-bold">Email App</div>
      </v-toolbar>
      <v-card width="100%" height="100%" rounded>
        <v-fade-transition mode="out-in">
          <router-view :key="$route.fullPath" class="flex-grow-1"></router-view>
        </v-fade-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  created() {
    this.$router.push('/apps/email/inbox')
  },
}
</script>

<style lang="scss"></style>
