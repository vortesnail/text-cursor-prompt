# text-cursor-prompt [![Build Status](https://travis-ci.org/vortesnail/text-cursor-prompt.svg?branch=master)](https://travis-ci.org/vortesnail/text-cursor-prompt)

## 介绍
在某些场景，我们希望在输入框输入文字时，在当前光标下方会有一个提示框，提示框中的内容可以是我们自己就写好的，也可以是调用接口返回的动态数据。另外，提示框完全可自定义。

## 演示
![ezgif-1-e2e281568223.gif](https://cdn.nlark.com/yuque/0/2019/gif/341314/1573895426751-51442347-312d-4709-81eb-62916bb9baa9.gif#align=left&display=inline&height=383&name=ezgif-1-e2e281568223.gif&originHeight=383&originWidth=600&search=&size=1080131&status=done&width=600)

## 快速使用
### 安装
```bash
npm install --save text-cursor-prompt
```

### 使用
- textEle: 输入标签元素，比如 textarea、input
- promptContainer: 提示框容器，决定了提示框的位置等
- promptTextELe: 可以是一个`p`标签，决定了显示的内容，可以是纯文本，也可以含有标签节点
- config: `text`为提示内容`xOffset || yOffset`可调整偏移位置，`moveDuration`是框移动速度

**注: html 引用需要下载 `dist/index_bundle.js` 手动引入，在 React 中要手动 `import 'text-cursor-prompt';` **
```js
const textEle = document.querySelector('.content');
const promptContainer = document.querySelector('.prompt-container');
const promptContent = document.querySelector('#prompt-content');

const config = {
  text: 'I am the text you want to show',
  xOffset: -5,
  yOffset: 26,
  moveDuration: 0.2
}

const popTextCursorPrompt = new window.popTextCursorPrompt(textEle, promptContainer, promptTextELe, config);
popTextCursorPrompt.start();

// you want to close this feature when something finished
// you can do that as the followed code
// popTextCursorPrompt.end();
```

## 项目运行
在终端一步一步执行：
```bash
git clone git@github.com:vortesnail/text-cursor-prompt.git
```
进入 clone 下来的文件
```bash
npm install -g http-server
npm run example
```
浏览器窗口打开 `http://localhost:8880/example/index.html` 即可查看样例

## 注意
我们的标签结构和 css 样式最好如下，其中 `position` 的设置最为重要，不然可能会出现不可预知的错误

index.html
```html
<div class="text">
  <textarea name="" id="" cols="30" rows="10" class="content"></textarea>
  <div class="prompt-container">
    <div class="icon"><img class="tipicon" src="./tipicon.png" alt="tipicon">Tip</div>
    <p id="prompt-content"></p>
  </div>
</div>
```

index.css
```css
.text {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

.content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  background-color: rgb(62, 64, 66);
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 4px 4px 30px #929292;
  color: white;
}

.prompt-container {
  border: 1px solid #d8d8d8;
  width: 200px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
  border-radius: 4px;
  visibility: hidden;
  color: white;
}

#prompt-content {
  margin: 0;
  font-size: 14px;
  padding: 0;
  color: white;
  padding-left: 10px;
}

.icon {
  font-size: 12px;
  margin: 0;
  vertical-align: middle;
  color: white;  
  font-weight: 900;
}

.tipicon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 6px;
}
```

## LICENSE
MIT
