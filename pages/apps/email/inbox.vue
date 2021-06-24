<template>
  <div>
    <v-toolbar flat dense rounded>
      <v-checkbox hide-details color="primary" v-model="header_checked"></v-checkbox>
      <v-btn icon small>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
      <v-btn icon small v-if="!header_checked">
        <v-icon small>mdi-reload</v-icon>
      </v-btn>

      <div v-else v-for="(item, index) in header_cheked_items" :key="index">
        <v-tooltip top>
          <template #activator="{ on }">
            <v-btn icon small v-on="on" @click="item.click">
              <v-icon small>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ item.tooltip }}</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-divider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      header_checked: false,
      header_cheked_items: [
        {
          icon: 'mdi-email-check',
          tooltip: '既読にする',
          click: () => {},
        },
        {
          icon: 'mdi-trash-can',
          tooltip: 'ゴミ箱に移動する',
          click: () => {},
        },
      ],
    }
  },
}
</script>
