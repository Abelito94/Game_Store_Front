<template>
  <div>
    <GameCard v-for="(game, idx) in data" :key="idx" :data="game"/>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
export default {
  components: {
    GameCard
  },
  props: {
    data: Array
  }
};
</script>

<style lang="scss" scoped>
</style>