## setState 함수 vs 값

- 블로그 목록 db에서 글 삭제 후 삭제한 글이 화면에서 사라지도록 하는 과정

setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));

1. 함수를 넘기는 이유

setPosts에 함수를 넘기면, React가 그 함수에 가장 최신의 이전 상태값을 넣어서 호출해준다.
상태 업데이트는 즉시 반영처럼 보이지만, 실제 최신값이 아닐 수 있다.

1-1. 안전한 방식 (함수형 업데이트)

setPosts((prev) => prev.filter((p) => p.id !== id));

1-2. 위험할 수 있는 방식 (바로 값 사용)

setPosts(posts.filter((p) => p.id !== id));

동시성/배치 업데이트 때문에 최신 prev를 보장하기 위해 함수형을 사용하는 걸 추천한다.

2. setState에 함수를 줄 때 vs 값을 줄 때

setState는 두 가지 형태를 받을 수 있다.

2-1. 값을 직접 주는 방법

- 새 상태값을 내가 이미 알고 있을 때
- 서버 응답처럼 완성된 새 값이 있을 때

setPosts(res.data); // 서버에서 받은 배열로 체인지

2-2. 함수를 주는 방법

- 새 상태가 이전 상태를 바탕으로 계산될 때 (추가, 삭제, 수정 등)

setPosts((prev) => [...prev, newPost]); // 추가
setPosts((prev) => prev.filter(...)); // 삭제
setPosts((prev) => prev.map(...)); // 수정

**이전 상태를 기반으로 계산할 땐 함수형 업데이트를 써야 최신 상태를 보장할 수 있다.**
