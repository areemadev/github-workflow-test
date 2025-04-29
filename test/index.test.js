// @ts-check
const { test, expect } = require("@playwright/test");

test("기본 페이지 테스트", async ({ page }) => {
  // 페이지 방문
  await page.goto("file://" + __dirname + "/../index.html");

  // "hello world" 텍스트가 화면에 출력되어 있는지 검증
  const helloText = await page.locator('h1:has-text("hello world")');
  await expect(helloText).toBeVisible();

  // "Test" 버튼이 정상적으로 존재하는지 검증
  const testButton = await page.locator('button:has-text("Test")');
  await expect(testButton).toBeVisible();

  // 경고창 테스트를 위한 설정
  page.on("dialog", (dialog) => {
    expect(dialog.message()).toBe("Good morning 여러분!");
    dialog.accept();
  });

  // "Test" 버튼을 클릭했을 때 "Good morning!" alert이 정상적으로 뜨는지 검증
  await testButton.click();
});
