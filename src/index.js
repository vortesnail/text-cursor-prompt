import getCaretCoordinates from './util.js';

function popTextCursorPrompt(textEle, promptContainerEle, promptTextELe, config) {
  // if showedText is a empty value , the promptContainerEle wouldn't be showed
  // the promptContainerEle only show while the textEle get focus on
  // the promptTextELe.innerHTML is the text what you want to show

  /* 
    config = {
      text: 'if i am not empty, i will show',
      xOffset: 5,
      yOffset: 10,
      moveDuration: 0.1
    }
  */

  // get current cursor position, it returns a integer
  function getCursorPosition(obj) {
    let cursorIndex = 0;
    if (document.selection) {
      // IE Support
      obj.focus();
      let range = document.selection.createRange();
      range.moveStart('character', -obj.value.length);
      cursorIndex = range.text.length;
    } else if (obj.selectionStart || obj.selectionStart == 0) {
      // another support
      cursorIndex = obj.selectionStart;
    }
    return cursorIndex;
  }

  // change the promptContainerEle position
  function changePromptPos() {
    const cursorIndex = getCursorPosition(textEle);
    const coordinates = getCaretCoordinates(textEle, cursorIndex);

    promptContainerEle.style.transition = `left ${config.moveDuration}s, top ${config.moveDuration}s linear`;
    promptContainerEle.style.top = textEle.offsetTop - textEle.scrollTop + coordinates.top + config.yOffset + 'px';
    promptContainerEle.style.left = textEle.offsetLeft - textEle.scrollLeft + coordinates.left + config.xOffset + 'px';
    
    if (config.text.length !== 0) {
      promptContainerEle.style.visibility = 'visible';
      promptTextELe.innerHTML = config.text;
      return;
    }

  }

  function showPromptContainerEle() {
    // 重新加了 node
    if (config.text.length !== 0) {
      promptContainerEle.style.visibility = 'visible';
      return;
    }
    hidePromptContainerEle();
  }

  function hidePromptContainerEle() {
    // 设置 100ms 延迟的原因是防止你插入的 dom 节点有事件监听
    // 例如 click，点击之后再让其隐藏
    // 不然会在点击时比你的事件发生之前就隐藏
    setTimeout(() => {
      promptContainerEle.style.visibility = 'hidden';
    }, 100);
  }

  // start listen
  this.start = function() {
    textEle.addEventListener('input', changePromptPos);
    textEle.addEventListener('focus', showPromptContainerEle);
    textEle.addEventListener('blur', hidePromptContainerEle);
  }

  // change config.text
  this.changeText = function(newText) {
    config.text = newText;
    if (config.text.length !== 0) {
      promptContainerEle.style.visibility = 'visible';
      promptTextELe.innerHTML = config.text;
      return;
    }
    hidePromptContainerEle();
  }

  // end listen
  this.end = function() {
    textEle.removeEventListener('input', changePromptPos);
    textEle.removeEventListener('focus', showPromptContainerEle);
    textEle.removeEventListener('blur', hidePromptContainerEle);
  }
}

let isBrowser = (typeof window !== 'undefined');
if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = popTextCursorPrompt;
} else if (isBrowser) {
  window.popTextCursorPrompt = popTextCursorPrompt;
}
