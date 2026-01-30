## 이슈 발생

npx json-server --watch db.json --port 3001

서버를 실행하니 에러가 떴다.

SyntaxError: Malformed JSON in file: db.json
Expected double-quoted property name in JSON at position 19 (line 3 column 1)

이유를 찾아보니 db.json 파일에 반점이 들어있었다.

{
  "posts": [],
}

json 파일은 규칙을 엄격하게 본다.
마지막 항목 뒤에 붙는 쉼표(trailing comma)가 있으면 JSON 문법 오류가 뜬다.


## 헷갈리는 문법 규칙 정리

세미콜론( ; )은 문장 끝에
쉼표( , )는 목록 구분할 때 사용

JSON은 JS 객체 문법이 아닌 데이터 포맷이라 trailing comma(마지막 쉼표)와 주석이 허용되지 않는다.


## JSON 문법 규칙

- 데이터 구조

객체 (Object): {} (중괄호)로 시작하고 끝내며, 키-값 쌍(key-value pairs)을 포함한다.
배열 (Array): [] (대괄호)로 시작하고 끝내며, 값들의 순서 있는 목록을 나타낸다.

- 키-값 쌍 (Key-Value Pair)

키(Key)는 반드시 큰따옴표 "로 묶인 문자열이어야 한다.
값(Value)과 키는 콜론 :으로 구분한다.
여러 키-값 쌍은 쉼표 ,로 구분한다.

- 데이터 타입

문자열 (String): 큰따옴표 "로 묶으며, 유니코드 문자를 포함할 수 있다. (작은따옴표 ''는 비허용)
숫자 (Number): 정수 또는 부동 소수점 숫자로, 큰따옴표로 감싸지 않는다.
객체 (Object): 중괄호 {}
배열 (Array): 대괄호 []
불리언 (Boolean): true 또는 false (소문자)
Null: null (소문자)

- 기타 특징
주석 (Comments): 표준 JSON에서는 주석을 허용하지 않는다.