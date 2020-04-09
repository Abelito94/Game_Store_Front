<template >
  <div id="description">
    <v-img id="img" src="../assets/logo.png" />
    <v-img id="img2" src="../assets/name.png" />
    <v-card id="cuadro" max-width="700">
      <v-card-text>
        <div>
          <P>Bienvenidos a Game Store donde podréis comprar vuestros juegos en formato digital al precio más económico desde cualquier plataforma, esta aplicación detecta en que plataforma estas(PS4,XBOX,Wii,PC) y te ofrece los juegos disponibles para esa plataforma. Gracias por su visita!</P>
        </div>
      </v-card-text>
      <div>
        <v-btn id="button" class="ma-2" color="orange darken-2" @click="logAuth" dark>
          Game Store
        </v-btn>
      </div>
      <p id="version">Version 1.0</p>
    </v-card>
    <div
      id="copyray"
    >© 2020 Game Store Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países++</div>
  </div>
</template>

<script>
export default {
  name: "Description",
  components: {},
  methods: {
    logAuth() {
      localStorage.clear();
      this.$router.push("/auth");
    }
  }
};
</script>

<style lang="scss" scoped>
#description {
  
  background-color: red;
  background-image: linear-gradient(-90deg, rgb(0, 97, 211), rgb(244, 0, 0));
  display:block;
  margin:auto;
}
#img {
  margin-left: 440px;
  width: 500px;
  height: 250px;
  display:block;
  margin:auto;
}
#img2 {
  margin-top: -25px;
  margin-left: 440px;
  width: 500px;
  height: 100px;
  display:block;
  margin:auto;
}
#cuadro {
  background-color: rgba(39, 35, 37, 0.39);
  margin-top: 50px;
  margin-left: 350px;
  display:block;
  margin:auto;
}
p {
  color: rgb(255, 255, 255);
}
#button {
  background-color: rgb(33, 146, 235);
  margin-left: 50%;
  transform: translateX(-50%);
  color: rgb(255, 255, 255);
}
#copyray {
  margin-top: 202px;
  margin-left: 280px;
}
#version{
  color: black;
  margin-left: 88%
}
</style>