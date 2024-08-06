<script setup lang="ts">
import { useDeckStore } from './stores/deck'

const store = useDeckStore()
</script>

<template>
  <header>
    <img alt="Seegrid logo" class="logo" src="@/assets/seegrid-logo.svg" width="125" height="125" />
    <h1 class="title">CARDS</h1>
  </header>

  <main>
    <section>
      <h2 class="subtitle">Deck</h2>
      <button class="button__primary" :disabled="store.countDeck > 0" @click="store.generateDeck()">
        Generate Deck
      </button>
      <button class="button__primary" :disabled="!store.countDeck" @click="store.resetDecks()">
        Reset Decks
      </button>
      <button class="button__primary" :disabled="!store.countDeck" @click="store.shuffleDeck()">
        Shuffle Deck
      </button>
      <p>Card Count: {{ store.countDeck }}</p>
      <p>Cards: {{ store.deckData }}</p>
    </section>
    <section>
      <h2 class="subtitle">Hand</h2>
      <button class="button__primary" :disabled="!store.countDeck" @click="store.dealCard()">
        Deal Card
      </button>
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
.title {
  font-weight: 700;
  letter-spacing: -0.1rem;
}
.subtitle {
  font-weight: 500;
}

.button__primary {
  padding: 6px 16px;
  border-radius: 24px;
  border: 1px solid #0082cd;
  background-color: #0082cd;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s;
}
.button__primary:disabled {
  opacity: 0.5;
}
.button__primary:hover:not(:disabled),
.button__primary:focus:not(:disabled) {
  cursor: pointer;
  background-color: #fff;
  color: #0082cd;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    margin-bottom: 2rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    gap: 2rem;
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
