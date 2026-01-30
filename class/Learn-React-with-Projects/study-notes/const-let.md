## const vs let ?

const number = 1;

const makeDouble = () => {
    number = number * 2;
    console.log(number);
}

-> 이렇게 작성하니 에러가 발생했다.

let number = 1;

const makeDouble = () => {
    number = number * 2;
    console.log(number);
}

-> 이렇게 작성하니 정상 작동!

const와 let의 차이를 정확히 이해하고 가야겠다.


## let

- 재할당 가능

let number = 1;
number = 2; // OK


## const

- 재할당 불가능

const number = 1;
number = 2; // ❌ TypeError (재할당 금지)


const는 **값 자체 불변**이 아니라 **변수 바인딩(참조)** 불변이다.


(1) 원시값(숫자/문자/불린/null/undefined/symbol/bigint)

const로 선언하면 그 변수에 새 값을 넣는 게 불가능

const a = 1;
a++; // ❌ (a = a + 1 이라서 재할당)


(2) 객체/배열

변수에 다른 객체를 재할당은 못하지만 객체 내부 프로퍼티는 바꿀 수 있다.

const user = { name: "jinju" };
user.name = "new"; // ✅ OK (재할당이 아니라 내부 수정)
user = { name: "other" }; // ❌ 재할당이라 실패


## 언제 const, 언제 let?

기본은 무조건 const 먼저 사용, 재할당이 필요할 때 let 사용

const 쓰기 좋은 경우
: 함수, 컴포넌트, import, 고정값, config, 계산 결과(변수 재사용 안 할 때)