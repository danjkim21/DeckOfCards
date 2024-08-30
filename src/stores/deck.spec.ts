import { setActivePinia, createPinia } from 'pinia'
import { useDeckStore } from './deck'
import { SUITS, VALUES } from './DeckTypes'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Deck Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  // Tests for generateDeck Action
  it('should generates deck of 52 cards with all combinations of SUITS and VALUES when generateDeck is called', () => {
    const store = useDeckStore()
    store.generateDeck()
    expect(store.countDeck).toBe(52)

    SUITS.forEach((suit) => {
      VALUES.forEach((value) => {
        expect(store.deckData).toContainEqual({ suit, value })
      })
    })
  })

  // Tests for shuffleDeck Action
  it('should shuffle the deckData array randomly when shuffleDeck is called', () => {
    const store = useDeckStore()
    const mockDeck = [
      { suit: 'HEARTS', value: '4' },
      { suit: 'HEARTS', value: '3' },
      { suit: 'SPADES', value: '2' },
      { suit: 'SPADES', value: 'K' },
      { suit: 'DIAMONDS', value: 'Q' },
      { suit: 'DIAMONDS', value: '9' },
      { suit: 'CLUBS', value: 'A' },
      { suit: 'CLUBS', value: '5' }
    ]
    store.deckData = [...mockDeck]

    store.shuffleDeck()

    expect(store.countDeck).toBe(mockDeck.length)
    expect(store.deckData).not.toEqual(mockDeck)
  })
  it('should not shuffle cards when deck is empty', () => {
    const store = useDeckStore()
    store.shuffleDeck()
    expect(store.deckData).toEqual([])
  })

  // Tests for resetDecks Action
  it('should reset deckData and handData to empty arrays when resetDecks is called', () => {
    const store = useDeckStore()
    store.generateDeck()
    store.dealCard()

    store.resetDecks()

    expect(store.countDeck).toBe(0)
    expect(store.countHand).toBe(0)
  })

  // Tests for dealCard Action
  it('should removes top card from deckData and adds it to handData when dealCard is called', () => {
    const store = useDeckStore()
    const mockDeck = [
      { suit: 'HEARTS', value: '4' },
      { suit: 'SPADES', value: '3' },
      { suit: 'DIAMONDS', value: '9' },
      { suit: 'CLUBS', value: 'A' }
    ]
    store.deckData = [...mockDeck]
    store.handData = []

    const dealtCard = store.dealCard()

    expect(store.countDeck).toBe(mockDeck.length - 1)
    expect(store.countHand).toBe(dealtCard ? 1 : 0)

    expect(store.deckData).toEqual(mockDeck.slice(0, mockDeck.length - 1))
    expect(store.handData).toEqual([mockDeck[mockDeck.length - 1]])
    expect(dealtCard).toEqual(mockDeck[mockDeck.length - 1])
  })
  it('should not deal a card to handData when deckData is empty', () => {
    const store = useDeckStore()
    const dealtCard = store.dealCard()
    expect(dealtCard).toBeUndefined()
    expect(store.deckData).toEqual([])
    expect(store.handData).toEqual([])
  })
})
