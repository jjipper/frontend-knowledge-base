## 이슈 발생

강의에 나오는 대로 아래처럼 작성했더니 콘솔 에러뜨며 화면에 텍스트가 안 나오는 현상이 발생했다.

ReactDOM.render(
    <App />, document.getElementById("root")
);

## 이유

강의에서 사용한 코드는 React 17 이전 버전,
React 18부터는 crteRoot API로 렌더링하는 방식이 기본이다.
React 19에서는 ReactDOM.render가 아예 없어서 render is not a function류로 깨질 수 있다.

구버전 강의의 ReactDOM.render는 React 17 방식이며, React 18에서는 react-dom/client + createRoot를 사용한다.

콘솔을 확인해보니 에러가 뜨고 있었다.
원하는 대로 작동하지 않을 땐 콘솔을 잘 확인하자!
console message
: react_dom__WEBPACK_IMPORTED_MODULE_0__.render is not a function

## 변경 코드

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

## 관련 문서

: CreateRoot
https://react.dev/reference/react-dom/client/createRoot