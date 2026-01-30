## json-server란?

백엔드 서버 없이도 프론트에서 GET, POST, PATCH, DELETE 등을 하도록 도와주는 가짜 DB.
실제 서버와 달라서 한계는 있음, 학습용으로 사용하기


## 로컬 설치

npm i json-server@0.17.0

강의에서 사용한 0.17.0 버전으로 설치했다.


## db.json 파일 생성 및 작성

package.json 레벨 폴더에 파일 생성 후 아래처럼 작성해주었다.

{
  "posts": []
}

## 실행

npx json-server --watch db.json --port 3001

--wacth
watch = 실시간 감시 모드
db.json을 계속 지켜보다가 내용이 바뀌면 바로 반영한다.
서버를 껐다 켰다 반복하고 싶지 않을 때 사용하며, 저장만 하면 바로 반영된다.

--port 3001
port 3001을 사용했다. (localhost:3000은 이미 사용중이라서)