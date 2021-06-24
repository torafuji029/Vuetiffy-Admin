<template>
  <div>
    <v-btn block large color="primary" class="mb-3">Eメール作成</v-btn>
    <v-list dense nav class="mt-2 pa-0">
      <v-list-item exact active-class="secondary--text" link v-for="(item, index) in menu" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon small>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: '受信BOX',
          icon: 'mdi-mail',
          link: '/apps/email/inbox',
          count: 3,
        },
        {
          label: '送信済み',
          icon: 'mdi-send',
          link: '/apps/email/sent',
        },
        {
          label: '下書き',
          icon: 'mdi-pencil-outline',
          link: '/apps/email/drafts',
        },
        {
          label: 'スター付き',
          icon: 'mdi-star-outline',
          link: '/apps/email/starred',
          count: 1,
        },
        {
          label: 'ゴミ箱',
          icon: 'mdi-delete-outline',
          link: '/apps/email/trash',
        },
      ],
    }
  },
}
</script>
