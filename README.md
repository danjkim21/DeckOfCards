# Seegrid Assessment - Deck of Cards

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="./public/seegrid-icon.svg" alt="Seegrid Logo" width="80" height="80">
  </a>

<h3 align="center">Seegrid</h3>
<p align="center">Deck of Cards App</p>

  <p align="center">
    Seegrid front end assignment
    <br />
    <a href="https://seegridcards.netlify.app/">View Live Site</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- <p align="center">
  <img src="" width="75%" alt="assignment screenshot"/>
</p> -->

### How It's Made

**Tech used:**

- [Vue](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Netlify](https://www.netlify.com/)

This fully responsive (mobile first design) web application is built using Vue.js and the Pinia for state management, and is hosted on Netlify. By default, users will see an empty Deck and and empty Hand of cards.

The deck section has ui component that lists all cards in the generated deck. It also has 3 associated buttons to generate, shuffle, and reset the decks. The hand section has a ui component that displays the currently dealt card, and another ui component that lists all cards that have been dealt. The hand section has a button to deal card.

**Core Functions:**

- _Generate Deck_- this function creates a deck of **52 cards** with each possible permutation: Four suits, each with face values of Ace, 2-10, Jack, Queen, King. And adds the cards to the Deck Stack.
- _Shuffle Deck_ - this function randomly shuffles the current Deck Stack.
- _Deal Card_ - this function removes the top card from the Deck Stack, and adds it to the top of the Hand Stack and returns the dealt card.
- _Reset Decks_ - this function resets the Deck Stack and Hand Stack back to original state.

**Data Structure and App Logic**

The application state keeps track of two arrays: **Deck Stack**, and **Hand Stack**. Both with the same data structure. Eg.

```json
[
  {
    "suit": "CLUBS",
    "value": "10"
  },
  {
    "suit": "HEARTS",
    "value": "Q"
  }
]
```

The Deck and Hand Stacks follow a **"First in Last Out"** array structure, resembling a traditional "stack of cards." Dealing a card from the stack removes (pops) the "first" card (top of the pile) and adds (push) it to the "end" (top of the pile) of the Hand Stack.

<!-- GETTING STARTED -->

## Getting Started

This app can be accessed live via [seegridcards.netlify.app](https://seegridcards.netlify.app/) or as a local copy. To get a local copy up and running follow these simple example steps.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Optimizations:

In order to complete the assignment in a few days, while learning the essentials of Vue, there were certain design considerations that I omitted for the sake of time.

**Modularity** - I would like to spend more time component-izing some elements that have the opportunity to create reuseable code. For example, the `button__primary` can be abstracted to a new component and pass functions, state in as props. But for the scope of this assignment, I wanted to keep things as simple as possible.

**Styling** - In this project, I utilized vanilla CSS with the "mostly" the base styling that comes with default vue build setup to keep things simple. When I build out applications for scalability, I typically use SCSS/SASS for the extended features it provides to help keep my codebase clean (eg. Nesting, mixins, etc.). In addition, I would have set up my preferred new CSS solution: Tailwind with [Shadcn/ui](https://ui.shadcn.com/), as I've found this combination to have the least friction when building out a highly customizable component library.

**UI enhancements, animations** - The current UI is very simple, and there are a lot of enhancements I would have liked to get to, but would have added significantly more time to build and create tests for. First off, it would have been nice to design an actual playing card, front and back! Creating an actual visual deck with the cards all facing down. Then clicking the "Deal card" button animating to flip the card over face up to reveal the dealt card would have been a nice touch. Another neat animation would be for shuffling cards.

Additionally, I would have liked to add a toast notification on success/failure of each action. Right now each pinia action, if some edge case is triggered, the function `console.error()`s the error and returns out of the function. Ideally, this would throw a new Error and have some sort of toast notification that catches it, prompting the User of what issue has occurred. Feedback for success/failure is pretty important when triggering some action, like clicking a button.

_Testing_ - Because I planned the UI to be simple and the time constraints, I focused my unit testing on the pinia store actions. The unit tests are very basic. They cover the main function behaviors but don't account for every single edge case. The actions I've written attempts to throw (log in this case) errors for common edge cases.

**Accessibility** - for the sake of time, I didn't consider adding WCAG or section 508 compliance testing.

## Note

Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Contact

Daniel Kim - dan.jkim21@gmail.com

Live Link: [https://seegridcards.netlify.app/](https://seegridcards.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>
