<script setup lang="ts">
import { type CardType } from '../stores/deck'

defineProps<{
  card: CardType | undefined
}>()
</script>

<template>
  <div v-if="!card" class="playingCard">No Card</div>
  <div v-else class="playingCard">
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
</template>

<style scoped>
.playingCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  height: 225px;
  width: 185px;
  border: 4px solid #4583b4;
  background-color: white;
  border-radius: 0.25rem;
  padding: 0.25rem;
  font-size: 1.55rem;
  font-weight: 700;
  color: black;
}

.playingCard__suit {
  align-self: flex-end;
}
</style>
