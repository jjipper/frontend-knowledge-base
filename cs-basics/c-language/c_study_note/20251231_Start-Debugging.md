지금까지 쭉 Visual Studio Code만 사용하다가 처음으로 Visual Studio를 사용해보니 어렵다.

궁금한 점
- Start Debugging과 Start without Debugging의 차이는?

1. Start Debugging
디버거가 프로세스에 붙은 상태로 실행
- 브레이크포인트에서 멈춤
- 한 줄씩 실행(Step Over/Into/Out)
- 변수 값/콜스택/스코프 확인
- Watch, 조건부 브레이크포인트, Exception Breakpoint

2. Start without Debugging
디버거 붙지 않고 그냥 실행

=> 결론

재현이 어렵거나 상태/흐름을 봐야 하면 Start Debugging으로 원인 추적.
디버거 붙여서 확인이 어려운 케이스는 Start without Debugging으로 증상 재현 먼저 해서 확인

재현 → 관찰(로그/측정) → 디버깅으로 확정