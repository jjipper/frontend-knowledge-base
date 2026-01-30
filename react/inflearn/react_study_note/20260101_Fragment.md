JSX 파일 return할 때 모든 태그가 하나의 태그 안에 담겨있어야 한다.
(한 파일에 최상위 부모 태그는 단 하나)

그때 사용할 수 있는 게 Fragment인데, Fragment를 쓸 수 있는 방법이 3가지가 있다.

1.  import React from "react";
    <React.Fragment></React.Fragment>

2.  import { Fragment } from "react";
    <Fragment></Fragment>

3.  <></>

그냥 비워서 쓰면 된다는 게 신기하다!
