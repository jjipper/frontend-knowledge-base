## useEffect

React 컴포넌트는 기본적으로 화면을 그리는 함수.

render: 화면이 그려지는 과정
useEffect: 화면이 그려진 후, 실행할 작업을 등록하는 장치
(서버 요청, 타이머 시작, 이벤트 리스너 붙이기, DOM 조작 등)

- 화면이 그려진 후, getPosts 실행

useEffect(() => {
getPosts();
}, []);

useEffect 첫 번째 인자: 실행할 함수
useEffect 두 번째 인자 []: 의존성 배열

## []의 의미

[] = 처음 한 번만 실행하라는 의미

즉, ListPage가 처음 화면에 뜰 때 딱 한 번만 getPosts()를 호출해서 목록을 가져오라는 의미

## 다른 의존성 배열들

1. [] = 처음 한 번만 실행하라는 의미
   useEffect(() => { ... }, []);

2. [id] : id가 바뀔 때마다 실행
   useEffect(() => { ... }, [id]);

3. 의존성 배열 생략 : 렌더링 될 때마다 실행
   useEffect(() => { ... });

## 작성 중이었던 코드에서

const getPosts = () => {
axios.get("http://localhost:3001/posts").then((res) => {
setPosts(res.data);
});
};

useEffect(() => {
getPosts();
}, []);

의존성 배열이 생략되면 setPosts 때문에 렌더링이 다시 되고 → effect 또 돌고 → 또 setPosts가 돌며 무한루프가 날 수 있다.

그래서 렌더링과 분리된 타이밍이 필요하고, 그게 useEffect이다.
