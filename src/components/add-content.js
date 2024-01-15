import { headerContent, mainContent, modalContent } from './constants';

export function addStaticContent() {
  const root = document.querySelector('.container');
  root.innerHTML = headerContent + mainContent;
  document.body.innerHTML += modalContent;
}
