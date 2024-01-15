import { dataBase } from './constants';
import { handleFailAttempt, handleSuccessAttempt } from './utils/attemps-handlers';
import { getRandomWord } from './utils/randomize-word';

export class GameProcess {
  constructor(lastWordIndex) {
    (this.lastGameIndex = lastWordIndex),
      this.wordIndex,
      this.question,
      this.answer,
      (this.attemps = '0/6'),
      (this.guessed = 0),
      this.questionRoot,
      this.answerRoot,
      this.attempsRoot,
      this.resultWordRoot,
      this.resultRoot,
      this.modal,
      this.initGameLayout();
  }

  getSecretWord() {
    this.wordIndex = getRandomWord();
    if (this.wordIndex === this.lastGameIndex) {
      while (this.lastGameIndex === this.wordIndex) {
        this.wordIndex = getRandomWord();
      }
    }
    this.question = dataBase[this.wordIndex].q;
    this.answer = dataBase[this.wordIndex].a;
    this.lastGameIndex = this.wordIndex;
    localStorage.setItem('lastGame', JSON.parse(this.wordIndex));
    return this;
  }

  setRoots() {
    this.answerRoot = document.querySelector('.quiz-part__secret-word');
    this.questionRoot = document.querySelector('.question');
    this.attempsRoot = document.querySelector('.attemps-counter');
    this.resultWordRoot = document.querySelector('.modal__secret-word');
    this.resultRoot = document.querySelector('.modal__result');
    this.modal = document.querySelector('.game-over-modal');
    return this;
  }

  createElements() {
    for (let i = 0; i < this.answer.length; i += 1) {
      const letter = document.createElement('span');
      letter.classList.add('secret-word_letter');
      this.answerRoot.append(letter);
    }
    this.questionRoot.append(this.question);
    return this;
  }

  initGameLayout() {
    this.getSecretWord();
    this.setRoots();
    this.createElements();
    return this;
  }

  resetLayout() {
    this.answerRoot.innerHTML = '';
    this.questionRoot.innerHTML = '';
    this.attempsRoot.innerHTML = '0/6';
    this.attemps = '0/6';
    this.guessed = 0;
    const images = document.querySelectorAll('.gallow-parts__img');
    for (let i = 1; i < images.length; i += 1) {
      images[i].classList.remove('visible');
    }
    this.initGameLayout();
    return this;
  }

  handleAttempt(event) {
    if (
      !event.target.classList.contains('keyboard__cell') ||
      event.target.classList.contains('disabled') ||
      this.attemps === '6/6' ||
      this.guessed === this.answer.length
    ) {
      return this;
    }

    event.target.classList.add('disabled');
    const letter = event.target.textContent;
    if (!this.answer.includes(letter)) {
      return handleFailAttempt(this);
    }
    return handleSuccessAttempt(this, letter);
  }

  showResult(result) {
    this.modal.classList.add('active');
    let text = 'You have guessed the secret word!';
    text = result === 'win' ? text : 'You lose!';
    this.resultRoot.textContent = text;
    this.resultWordRoot.textContent = this.answer;
    this.modal.classList.add(`modal_${result}`);
    this.resultRoot.classList.add(result);
    return this;
  }

  hideResult() {
    const result = this.resultRoot.classList[1];
    this.modal.classList.remove('active');
    this.modal.classList.remove(`modal_${result}`);
    this.resultRoot.classList.remove(result);
    return this;
  }
}
