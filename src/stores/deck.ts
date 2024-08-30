import { defineStore } from 'pinia'
import { SUITS, VALUES, type State, type Getters, type Actions } from './DeckTypes'

export const useDeckStore = defineStore<'deck', State, Getters, Actions>('deck', {
  state: () => ({
    deckData: [],
    handData: []
  }),
  getters: {
    countDeck(state) {
      return state.deckData.length
    },
    countHand(state) {
      return state.handData.length
    },
    currentDealtCard(state) {
      return state.handData[state.handData.length - 1]
    }
  },
  actions: {
    generateDeck() {
      if (!SUITS || !VALUES) {
        console.error('Unable to generate deck. Suits or values are undefined.')
        return
      }
      if (this.handData.length) {
        console.error('Unable to generate deck. Hand is not empty.')
        return
      }

      this.deckData = SUITS.flatMap((suit) => {
        return VALUES.map((value) => {
          return { suit, value }
        })
      })
    },
    shuffleDeck() {
      if (!this.deckData.length) {
        console.error('Unable to shuffle card. Deck is empty.')
        return
      }

      for (let i = this.deckData.length - 1; i > 0; i--) {
        const randIndex = Math.floor(Math.random() * (i + 1))
        const tempValue = this.deckData[i]
        this.deckData[i] = this.deckData[randIndex]
        this.deckData[randIndex] = tempValue
      }
    },
    resetDecks() {
      this.deckData = []
      this.handData = []
    },
    dealCard() {
      if (!this.deckData.length) {
        console.error('Unable to deal card. Deck is empty.')
        return undefined
      }

      const card = this.deckData.pop()

      if (!card) {
        console.error('Unable to deal card. Card is undefined.')
        return undefined
      }

      this.handData.push(card)
      return card
    }
  }
})
