<script setup lang="ts">
import { type DeckType } from '../stores/DeckTypes'

defineProps<{
  cards: DeckType
  count: number
}>()
</script>

<template>
  <div class="container-cards">
    <span v-if="count === 0">No Cards </span>
    <ul class="card-list" v-else>
      <li class="card-list__item" v-for="card in cards" :key="card.suit + card.value">
        {{ card.suit }} - {{ card.value }}
      </li>
    </ul>
  </div>
  <p>
    Card Count: <span class="counter">{{ count }}</span>
  </p>
</template>

<style scoped>
.container-cards {
  min-height: 150px;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #335168;
  background-color: #335168;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}

.card-list {
  list-style: none;
  padding: 0;
}

.counter {
  font-weight: 700;
}
</style>
