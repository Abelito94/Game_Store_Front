<template>
  <div id="description">
    <v-img id="img" src="../assets/logo.png" />
    <v-img id="img2" src="../assets/name.png" />
    <template>
      <v-card id="cuadro" class="mx-auto" max-width="344">
        <v-card-text>
          <div>
            <P>If you are interested in our products, if you want to find your favorite game, you just have to enter GameStore and you just have it. On our page we have many games on different platforms which you will get with simple operations, join the team !!!!!</P>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="cyan accent-2">JOIN</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#description {
  background-color: rgb(65, 14, 35);
  text-align: center;
}
#img {
  margin-left: 420px;
  width: 500px;
  height: 250px;
}
#img2 {
  margin-top: -25px;
  margin-left: 420px;
  width: 500px;
  height: 100px;
}
#text {
  margin-top: 20px;
  margin-left: 390px;
} 
#cuadro{
  background-color: rgb(71, 15, 38);
  margin-top: 20px;
  margin-left: 500px;
}
p{
  color: rgb(126, 190, 190);
}
</style>