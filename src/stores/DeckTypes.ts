export const SUITS = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']
export const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

export type CardType = {
  suit: (typeof SUITS)[number]
  value: (typeof VALUES)[number]
}

export type DeckType = CardType[]

export interface State {
  deckData: DeckType
  handData: DeckType
}

export interface Getters {
  [key: string]: (state: State) => any
  countDeck: (state: State) => number
  countHand: (state: State) => number
  currentDealtCard: (state: State) => CardType
}

export interface Actions {
  generateDeck: () => void
  shuffleDeck: () => void
  resetDecks: () => void
  dealCard: () => CardType | undefined
}
