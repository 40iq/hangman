export function handleFailAttempt(context) {
  const images = document.querySelectorAll('.gallow-parts__img');
  context.attemps = `${Number(context.attemps.slice(0, 1)) + 1}/6`;
  context.attempsRoot.textContent = context.attemps;
  images[Number(context.attemps.slice(0, 1))].classList.add('visible');

  if (context.attemps === '6/6') {
    context.showResult('lose');
    return context;
  }
  return context;
}

export function handleSuccessAttempt(context, letter) {
  const secretLetters = document.querySelectorAll('.secret-word_letter');
  for (let i = 0; i < context.answer.length; i += 1) {
    if (letter === context.answer[i]) {
      secretLetters[i].textContent = letter;
      secretLetters[i].classList.add('guessed');
      context.guessed += 1;
    }

    if (context.guessed === context.answer.length) {
      context.showResult('win');
      return context;
    }
  }
  return context;
}
