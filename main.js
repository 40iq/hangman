import { addStaticContent } from './src/components/add-content';
import { GameProcess } from './src/components/game-process';
import { Keyboard } from './src/components/virtual-keyboard';
import './style.scss';

document.body.innerHTML = '<div class="container"></div>' + document.body.innerHTML;

addStaticContent();

let lastGame;
if (localStorage.getItem('lastGame')) {
  lastGame = JSON.stringify(localStorage.getItem('lastGame'));
}
const keyboard = new Keyboard();
const game = new GameProcess(lastGame);

keyboard.root.addEventListener('click', function (e) {
  game.handleAttempt(e);
});

document.addEventListener('keydown', function (e) {
  const key = e.code.slice(-1);
  const keys = document.querySelectorAll('.keyboard__cell');
  keys.forEach((item) => {
    if (item.textContent === key) {
      item.click();
    }
  });
});

const playAgainButton = document.querySelector('.modal__btn');
playAgainButton.addEventListener('click', function () {
  game.hideResult().resetLayout();
  keyboard.resetKeyboard();
});
