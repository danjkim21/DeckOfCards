<script setup lang="ts">
import { useDeckStore } from './stores/deck'

const store = useDeckStore()
</script>

<template>
  <header>
    <h1>SeeGrid: Deck of Cards</h1>
  </header>

  <main>
    <section>
      <h2>Deck</h2>
      <button @click="store.generateDeck()">Generate Deck</button>
      <button :disabled="!store.countDeck" @click="store.shuffleDeck()">Shuffle Deck</button>
      <p>Card Count: {{ store.countDeck }}</p>
      <p>Cards: {{ store.deckData }}</p>
    </section>
    <section>
      <h2>Hand</h2>
      <button :disabled="!store.countDeck" @click="store.dealCard()">Deal Card</button>
      <p>Card Count: {{ store.countHand }}</p>
      <p>Dealt Card: {{ store.currentDealtCard }}</p>
      <p>Hand: {{ store.handData }}</p>
    </section>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    margin-bottom: 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
