<template>
  <v-app>
    <v-main id="admin-app">
      <v-app-bar dense flat app color="primary" dark>
        <v-btn icon @click="nav_flag = !nav_flag">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="nav_flag" app width="200" class="nav-app">
        <template #prepend>
          <v-list dense nav color="primary" dark class="nav-header">
            <v-list-item dense>
              <v-list-item-icon>
                <img src="/v_white.png" alt="" class="nav-logo" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Vuetify Admin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>

        <v-list dense nav>
          <v-list-item-subtitle class="nav-subtitle">APPS</v-list-item-subtitle>
          <v-list-item link v-for="(path, i) in app_paths" :key="i" :to="path.path" router color="secondary">
            <v-list-item-icon>
              <v-icon v-text="path.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="path.title" class="menu-title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-fade-transition mode="out-in">
        <router-view :key="key" ref="page" />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import { app_paths } from '@/models/paths'
export default {
  data() {
    return {
      nav_flag: true,
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    app_paths() {
      return app_paths
    },
  },
}
</script>

<style lang="scss">
#admin-app {
  height: 100%;
  background: #e0f2f1;

  .nav {
    &-app {
      box-shadow: 0 2px 10px -1px rgba(85, 85, 85, 0.08), 0 1px 10px 0 rgba(85, 85, 85, 0.06),
        0 1px 30px 0 rgba(85, 85, 85, 0.03) !important;
    }
    &-header {
      height: 48px;
    }
    &-logo {
      height: 20px;
      margin-right: 10px;
    }
    &-title {
      color: white;
    }
    &-subtitle {
      margin-left: 5px;
      font-size: 10px;
    }
  }
  .menu-title {
    font-size: 12px;
  }
}
</style>
