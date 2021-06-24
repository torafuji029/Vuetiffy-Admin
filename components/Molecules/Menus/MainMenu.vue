<template>
  <v-list dense nav>
    <v-list-item-subtitle class="main-menu-subtitle">APPS</v-list-item-subtitle>
    <v-list-item link v-for="(path, i) in app_paths" :key="i" :to="path.path" router color="secondary">
      <v-list-item-icon>
        <v-icon v-text="path.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="path.title" class="main-menu-title"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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
.main-menu {
  &-subtitle {
    color: gray;
    font-size: 10px;
  }
  &-title {
    font-size: 12px;
  }
}
</style>
