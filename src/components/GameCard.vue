

<template>
  <v-card class="ma-8" id="card" max-width="300" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey">
        <img :src="data.photo_url" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="headline mb-1 margin">{{data.name}}</v-list-item-title>
        <v-list-item-subtitle class="margin">{{data.developers}}</v-list-item-subtitle>
        <v-list-item-subtitle class="margin">{{data.price}}€</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn>Add to cart</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.margin{
  margin-left: 20px;
}
#card{
  margin: 10px 15px;
}
img {
  height: 225px;
  width: 10%;
}
</style>

