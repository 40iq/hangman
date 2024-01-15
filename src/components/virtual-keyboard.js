import { alphabet } from './constants';

export class Keyboard {
  constructor() {
    this.root, this.initKeyboard();
  }

  setRoot() {
    this.root = document.querySelector('.quiz-part__keyboard');
    return this;
  }

  createKey(value) {
    const key = document.createElement('div');
    key.classList.add('keyboard__cell');
    key.textContent = value;
    this.root.append(key);
  }

  addKeys() {
    for (let i = 0; i < alphabet.length; i += 1) {
      this.createKey(alphabet[i]);
    }
  }

  initKeyboard() {
    this.setRoot().addKeys();
  }

  resetKeyboard() {
    this.root.innerHTML = '';
    this.initKeyboard();
  }
}
