# Pocket4Cut-Frontend
### 🔍 브랜치 전략

- 브랜치를 크게 main 브랜치와, main 브랜치가 아닌 브랜치로 나눈다.
- main 브랜치는 어떤 때든 배포가 가능한 상태이다
- **각 개발자는 본인 이름으로 된 깃허브 브랜치를 만들고, 해당 브랜치에서 작업한 후 main 브랜치로 pull request를 보낸다.**
  
### ⚠️ commit 컨벤션

```
[commit type]: [commit message] 
```

- commit type
  
    | 구분자 | 작업 유형 | 예 | 
    | --- | --- | --- |
    | feat | 새 기능 구현 | feat: 예치금 대량 충전 검색 기능 추가  |
    | fix | 버그 수정 | fix: 상점 목록의 에러처리 예외케이스 대응  |
    | release | 버전 변경 | release: v10.0.0 → v10.1.1 |  |
    | docs | 문서(또는 주석) 관련 작업 | docs: 데코레이터 옵션에 대한 문서 추가  |
    | refactor | 리팩터링 | refactor: createStore의 함수를 작은 함수로 분리  |
    | test | 테스트 관련 작업 | test: 상점 생성 테스트 추가  |
    | chore | 기타 작업 | chore: 프로덕션 빌드시 소스맵 생성하도록 변경  |

- commit message
  
    이번 커밋에서 작업한 내용을 간결하게 설명합니다.

### ⚠️ PR 규칙

1. 목적
- 잘 작성한 PR 은 리뷰어로 하여금 코드 이해를 돕고 시간을 절약 할 수 있게 한다.
- PR을 요청한 개발자 역시 PR template을 작성하면서 한번 더 코드를 체크 할 수 있다.
  
2. 형식
- 제목
   - PR 목적을 한문장으로 요약하기 
- 내용
    ```
    ### ✅  PR Type
    <!— Please check the one that applies to this PR using "x". —>

    - [ ] 버그수정(Bugfix)
    - [ ] 기능개발(Feature)
    - [ ] 코드 스타일 변경(Code style update) (formatting, local variables)
    - [ ] 리팩토링 (no functional changes, no api changes)
    - [ ] 빌드 관련 변경
    - [ ] 문서 내용 변경
    - [ ] Other… Please describe:

    ### 🎯요약(Summary)

    ### 💻 상세 내용(Describe your changes)

    ### 📌 관련 이슈번호(Related Issue)
    ```