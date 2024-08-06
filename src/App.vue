<script setup lang="ts">
import { useDeckStore } from './stores/deck'

const store = useDeckStore()

console.log(store.deckData)
</script>

<template>
  <header>
    <h1>SeeGrid: Deck of Cards</h1>
  </header>

  <main>
    <section>
      <h2>Deck</h2>
      <p>{{ store.count }}</p>
      <p>{{ store.deckData }}</p>
      <button @click="store.increment">Increment counter</button>
    </section>
    <section>
      <h2>Hand</h2>
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
