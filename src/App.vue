<script setup lang="ts">
import { useDeckStore } from './stores/deck'
import CardList from './components/CardList.vue'
import PlayingCard from './components/PlayingCard.vue'

const store = useDeckStore()
</script>

<template>
  <header>
    <img alt="Seegrid logo" class="logo" src="@/assets/seegrid-logo.svg" width="125" height="125" />
    <h1 class="title">CARDS</h1>
  </header>

  <main>
    <section class="section section-deck">
      <h2 class="subtitle">Deck</h2>

      <div class="container-buttons">
        <button
          class="button__primary"
          :disabled="store.countDeck > 0 || store.countHand > 0"
          @click="store.generateDeck()"
        >
          Generate Deck
        </button>
        <button
          class="button__primary"
          :disabled="!store.countDeck || store.countDeck === 1"
          @click="store.shuffleDeck()"
        >
          Shuffle Deck
        </button>
        <button
          class="button__primary"
          :disabled="!store.countDeck && !store.countHand"
          @click="store.resetDecks()"
        >
          Reset Decks
        </button>
      </div>

      <CardList :cards="store.deckData" :count="store.countDeck" />
    </section>
    <section class="section section-hand">
      <h2 class="subtitle">Hand</h2>

      <div class="container-buttons">
        <button class="button__primary" :disabled="!store.countDeck" @click="store.dealCard()">
          Deal Card
        </button>
      </div>

      <p>Dealt Card:</p>
      <PlayingCard :card="store.currentDealtCard" />

      <CardList :cards="store.handData" :count="store.countHand" />
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
.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.button__primary {
  padding: 6px 16px;
  border-radius: 24px;
  border: 1px solid #0082cd;
  background-color: #0082cd;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s;
  width: 100%;
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
