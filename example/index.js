const textEle = document.querySelector('.content');
const promptContainer = document.querySelector('.prompt-container');
const promptContent = document.querySelector('#prompt-content');

const config = {
  text: 'I am the text you want to show, now you can see...and emmm you know',
  xOffset: -5,
  yOffset: 26,
  moveDuration: 0.2
}
const popTextCursorPrompt = new window.popTextCursorPrompt(textEle, promptContainer, promptContent, config);
popTextCursorPrompt.start();

// you want to close this feature when something finished
// you can do that as the followed code
// popTextCursorPrompt.end();