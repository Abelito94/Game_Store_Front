<template>

  <div id="card">
    
    <img :src="data.photo_url" >
    <!--{{data.name}}-->
  </div>   
  
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
img{
height: 225px; 
width: 10%; 
display: block;
margin: 20px;
padding: 10px;
float:left;
 font-size: 25px;
background-color: #000
}
#description {
  
  background-color: red;
  background-image: linear-gradient(-90deg, rgb(0, 97, 211), rgb(244, 0, 0));
  display:block;
  margin:auto;
}

</style>

