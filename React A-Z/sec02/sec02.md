# 이름이 수정되면 안되는 파일들
1. public/index.html -> 페이지 템플릿
2. src/index.js -> 자바스크립트 시작점

# src 폴더
+ public: 여기에 쓰인 파일들은 오직 public/index.html만 쓰일수 있다.
+ src: 이곳에 JS 파일과 CSS 파일들을 넣으면 된다. 그리고 webpack은 여기에 있는 파일만 본다. 그래서 이 폴더 이외에 넣는것은 webpakc에 의해서 처리되지 않음.

# SPA란?
+ MPA(Multi Page Application): main.html, join.html ...
+ SPA(Single Page Application): index.html(main.html + join.html + ...)

### SPA에서 화면 변경은 어떻게 일어나나요?
React 내의 라이브러리 React-Router-Dom을 사용하여 HTML5의 History-API를 사용하여 브라우징 해준다.

### react의 jsx 코드는 babel이 변경해준다.

### JSX 문법 규칙
```javascript
function hello(){
    reutnr (
        <div>
            <div>Hello world!</div>
            <div>What are you doing now?</div>
        </div>
    )
}
```
부모 요소(div) 

### JSX Key 속성 이해하기
요소의 리스트를 나열할 때는 Key를 넣어줘야 합니다.
키는 React가 변경, 추가 또는 제거된 항목을 식별하는 데 도움이 됩니다. 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키를 제공해야 합니다.

### Map 메서드를 사용하여 할 일 목록 나열

### Filter 메서드를 사용하여 할 일 목록 지우기

