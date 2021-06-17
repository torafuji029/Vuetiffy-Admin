<template>
  <v-form class="login-form">
    <v-text-field
      class="form-item"
      outlined
      dense
      placeholder="ID"
      background-color="white"
      hide-details
      type="text"
      v-model="_id"
      color="accent"
    />
    <v-text-field
      class="form-item"
      outlined
      dense
      placeholder="Password"
      background-color="white"
      hide-details
      type="password"
      v-model="_password"
      color="accent"
    />
  </v-form>
</template>

<script>
export default {
  props: {
    id: String,
    password: String,
  },
  computed: {
    _id: {
      get() {
        return this.id
      },
      set(val) {
        this.$emit('update:id', val)
      },
    },
    _password: {
      get() {
        return this.password
      },
      set(val) {
        this.$emit('update:password', val)
      },
    },
  },
}
</script>
