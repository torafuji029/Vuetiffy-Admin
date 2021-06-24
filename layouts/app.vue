<template>
  <v-app>
    <div v-shortkey="['ctrl', '/']" class="d-flex flex-grow-1">
      <!-- Navigation -->
      <v-navigation-drawer v-model="nav_flag" width="200" app floating class="main-menu elevation-1">
        <template #prepend>
          <v-toolbar dense dark color="primary">
            <div>Vuetify Admin</div>
          </v-toolbar>
        </template>

        <main-menu></main-menu>
      </v-navigation-drawer>

      <!-- Toolbar -->
      <v-app-bar app dense color="primary">
        <v-btn icon dark @click="nav_flag = !nav_flag">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main class="app-main">
        <v-container class="fill-height" :fluid="!isContentBoxed">
          <v-layout>
            <router-view ref="page" />
          </v-layout>
        </v-container>

        <v-footer app inset>
          <v-spacer></v-spacer>
          <div class="overline">
            <v-icon small color="pink">mdi-heart</v-icon>
            <span class="primary--text">torafuji</span>
          </div>
        </v-footer>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nav_flag: true,
    }
  },
  computed: {
    app_paths() {
      return app_paths
    },
  },
}
</script>

<style lang="scss">
.app-main {
  background: #e0f2f1;
}
</style>
