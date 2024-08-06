import { defineStore } from 'pinia'

export const useDeckStore = defineStore('deck', {
  state: () => ({
    count: 0,
    deckData: ['test', 'test2', { name: 'test3' }]
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    }
  }
})
