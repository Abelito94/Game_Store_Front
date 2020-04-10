<template>
  <v-card class="ma-8" id="card" max-width="300" outlined>
    <v-list-item three-line>

      <v-list-item-content>
        <v-list-item-title class="headline mb-1 margin">{{user.name}}</v-list-item-title>
        <v-list-item-subtitle class="margin">{{user.email}}</v-list-item-subtitle>
        <v-list-item-subtitle class="margin">{{user.phone}}</v-list-item-subtitle>
        <v-list-item-subtitle class="margin">{{user.games}}</v-list-item-subtitle>
      </v-list-item-content>
  
	  </v-list-item>

  </v-card>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style lang="scss" scoped>

</style>