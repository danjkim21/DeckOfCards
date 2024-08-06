import { defineStore } from 'pinia'

const SUITS = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

export type DeckDataType = {
  suit: typeof SUITS
  value: typeof VALUES
}

interface State {
  deckData: DeckDataType[]
  handData: DeckDataType[]
}

interface Getters {
  [key: string]: (state: State) => any
  countDeck: (state: State) => number
  countHand: (state: State) => number
  currentDealtCard: (state: State) => DeckDataType
}

interface Actions {
  generateDeck: () => void
  shuffleDeck: () => void
  dealCard: () => DeckDataType
}

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
    dealCard() {
      if (!this.deckData.length) {
        console.error('Unable to deal card. Deck is empty.')
        return
      }

      const card = this.deckData.pop()

      this.handData.push(card)
      return card
    }
  }
})
