1. 간단한 index.html 파일을 생성해주세요.

- 가운데 "hello world" 라는 텍스트를 출력합니다.
- 하단에 "Test" 라는 텍스트의 버튼을 추가합니다.
- "Test" 버튼을 클릭하면 "Good morning!" 이라는 alert 창이 뜨도록 합니다.

2. 테스트 코드를 작성해주세요.

- 테스트 파일은 `test/` 폴더에 저장합니다.
- "hello world" 텍스트가 화면에 출력되어 있는지 검증합니다.
- "Test" 버튼이 정상적으로 존재하는지 검증합니다.
- "Test" 버튼을 클릭했을 때 "Good morning!" alert이 정상적으로 뜨는지 검증합니다.
- Playwright를 사용해서 테스트를 작성합니다.

3. 프로젝트에 Playwright를 설치해주세요.

- 다음 명령어를 실행해서 설치합니다: `npm install --save-dev @playwright/test`

4. git 설정 및 초기 push를 수행해주세요.

- git remote는 `git@github.com:areemadev/github-workflow-test.git` 로 설정합니다.
- `git init` → `git add .` → `git commit -m "Initial commit"` → `git push -u origin main` 순서로 진행합니다.

5. dev 브랜치를 새로 생성하고 푸시합니다.

- `git checkout -b dev`
- `git push -u origin dev`

6. GitHub Actions 워크플로 파일을 생성해주세요.

- `.github/workflows/test.yml` 파일을 만듭니다.
- 내용은 다음과 같이 작성합니다:

  ```yaml
  name: Run Tests

  on:
    pull_request:
      branches:
        - dev

  jobs:
    test:
      runs-on: ubuntu-latest

      steps:
        - uses: actions/checkout@v4
        - name: Install dependencies
          run: npm install
        - name: Install Playwright Browsers
          run: npx playwright install
        - name: Run Tests
          run: npx playwright test
  ```
