import { test, expect } from "@playwright/test"
test("radio button", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#radio-btn-example")).toContainText("Radio Button Example");
    await page.locator("#radio-btn-example").getByText("Radio2").click();
})
test("switch window", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const [newPage] = await Promise.all([
        page.context().waitForEvent("page"),
        page.locator("#openwindow").click(),
    ]);
    await newPage.waitForLoadState();
    console.log(await newPage.title());                      
});
test("switch tab", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const [newPage] = await Promise.all([ 
        page.context().waitForEvent("page"),
        page.locator("#opentab").click(),
      ])
        await newPage.waitForLoadState();
        console.log(await newPage.title());
})

test("alert", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on("dialog", (dialog) => dialog.accept());
    await page.locator("#alertbtn").click();
})
