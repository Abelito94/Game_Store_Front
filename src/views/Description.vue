<template>
  <div id="description">
    <v-img id="img" src="../assets/logo.png" />
    <v-img id="img2" src="../assets/name.png" />
      <v-card id="cuadro" max-width="700">
        <v-card-text>
          <div>
            <P>Bienvenidos a Game Store donde podréis comprar vuestros juegos en formato digital al precio más económico desde cualquier plataforma, esta aplicación detecta en que plataforma estas(PS4,XBOX,Wii,PC)  y te ofrece los juegos disponibles para esa plataforma. Gracias por su visita!</P>
          </div>
        </v-card-text>
        <div>
          <v-btn id="button" >Game Store</v-btn>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#description {
  height: 700px;
  background-color: red;
  background-image: linear-gradient(-90deg, rgb(0, 97, 211), rgb(244, 0, 0));
}
#img {
  margin-left: 500px;
  width: 500px;
  height: 250px;
}
#img2 {
  margin-top: -25px;
  margin-left: 500px;
  width: 500px;
  height: 100px;
}
#cuadro{
  
  background-color: rgba(39, 35, 37, 0.39);
  margin-top: 30px;
  margin-left: 410px;
 
}
p{
  color: rgb(255, 255, 255); 
}
#button{
background-color: rgb(33, 146, 235);
 width: 110px; 
  margin-left: 50%;
  transform: translateX(-50%);
  color:rgb(255, 255, 255)
}
</style>