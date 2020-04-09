<template>
  <div id="card">
    <img :src="data.photo_url" >
    {{data.name}}
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
  width: 40px;
  height: 40px;
}
</style>

