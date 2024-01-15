import imgUrl0 from '../assets/png/gallow0.png';
import imgUrl1 from '../assets/png/gallow1.png';
import imgUrl2 from '../assets/png/gallow2.png';
import imgUrl3 from '../assets/png/gallow3.png';
import imgUrl4 from '../assets/png/gallow4.png';
import imgUrl5 from '../assets/png/gallow5.png';
import imgUrl6 from '../assets/png/gallow6.png';

export const headerContent = `
<header class="header">
  <h1 class="header__title">
    Hangman<span class="header__title_small">
      by <a class="header__title__link" href="https://github.com/40iq">40iq</a></span
    >
  </h1>
</header>`;
export const mainContent = `
<main>
<section class="section-app">
  <div class="section-app__gallows-part">
    <img src="${imgUrl0}" alt="gallow" class="gallow-parts__img visible" />
    <img src="${imgUrl1}" alt="gallow" class="gallow-parts__img" />
    <img src="${imgUrl2}" alt="gallow" class="gallow-parts__img" />
    <img src="${imgUrl3}" alt="gallow" class="gallow-parts__img" />
    <img src="${imgUrl4}" alt="gallow" class="gallow-parts__img" />
    <img src="${imgUrl5}" alt="gallow" class="gallow-parts__img" />
    <img src="${imgUrl6}" alt="gallow" class="gallow-parts__img" />
  </div>
  <div class="section-app__quiz-part">
    <div class="quiz-part__secret-word"></div>
    <div class="quiz-part__question-container">
      <span class="question"></span>
    </div>
    <div class="quiz-part__attemps">Incorrect guesses:&nbsp;<span class="attemps-counter">0/6</span></div>
    <div class="quiz-part__keyboard"></div>
    </div>
</section>
</main>`;
export const modalContent = `
<div class="game-over-modal">
  <div class="modal__container">
    <div class="modal__result">You have guessed the secret word</div>
    <div class="modal__answer">Secret word : <span class="modal__secret-word">PIZDA</span></div>
    <button class="modal__btn">Play again</button>
  </div>
</div>`;
export const dataBase = [
  { q: 'Data structure is typically used for Last-In-First-Out (LIFO) operations', a: 'STACK' },
  { q: 'What is a type of global object that is used to store data', a: 'ARRAY' },
  { q: 'What is a value that is considered false when encountered in a Boolean context', a: 'FALSY' },
  { q: 'It is a development tool that combines multiple...', a: 'BUNDLER' },
  { q: 'Channel in rs-school discord ', a: 'MODERATION' },
  { q: 'JS framework', a: 'REACT' },
  { q: 'You are future', a: 'DEVELOPER' },
  { q: 'Best time to submit', a: 'DEADLINE' },
  { q: 'It is object is used for matching text with a pattern', a: 'REGEXP' },
  { q: 'Method to convert value to JSON string', a: 'STRINGIFY' },
  { q: 'Interface that allow user to communicate with computer', a: 'TERMINAL' },
  { q: 'Best community school', a: 'RSSCHOOL' },
  { q: 'JS primitive', a: 'SYMBOL' },
  { q: 'Array method', a: 'FOREACH' },
  { q: 'This file to specify which files souhld be ignored', a: 'GITIGNORE' },
  { q: 'Bundlers mode', a: 'PRODUCTION' },
];
export const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
