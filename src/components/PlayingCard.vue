<script setup lang="ts">
import { type CardType } from '../stores/deck'

defineProps<{
  card: CardType
}>()
</script>

<template>
  <div class="playingCard" v-if="card">
    <div class="playingCard__value">
      {{ card.value }}
    </div>
    <div class="playingCard__suit">
      <template v-if="card.suit === 'SPADES'"> ♠ </template>
      <template v-else-if="card.suit === 'HEARTS'"> ♡ </template>
      <template v-else-if="card.suit === 'DIAMONDS'"> ♢ </template>
      <template v-else> ♣ </template>
    </div>
  </div>
  <div v-else>No Card</div>
</template>

<style scoped>
.playingCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  width: 80px;
  border: 1px solid #335168;
  background-color: #335168;
  border-radius: 4px;
  padding: 4px;
  font-size: 1.25rem;
}
.playingCard__suit {
  align-self: flex-end;
}
</style>
