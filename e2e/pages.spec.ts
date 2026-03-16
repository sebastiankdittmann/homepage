import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders welcome heading and blog entry", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Seb codes 💻");
    await expect(page.getByText("Welcome!")).toBeVisible();
    await expect(
      page.getByText("Welcome to my blog", { exact: false })
    ).toBeVisible();

    const blogLink = page.getByText(
      "Speed up repetitive tasks",
      { exact: false }
    );
    await expect(blogLink).toBeVisible();
  });

  test("header and footer are present", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("link", { name: "Seb codes" })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /linkedin/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /github/i })
    ).toBeVisible();
  });
});

test.describe("About page", () => {
  test("renders about content", async ({ page }) => {
    await page.goto("/about");

    await expect(
      page.getByRole("main").getByText("About")
    ).toBeVisible();
    await expect(
      page.getByText("passionate software engineer from Denmark", { exact: false })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /github/i })
    ).toHaveAttribute("href", "https://github.com/sebastiankdittmann/homepage");
  });
});

test.describe("Blog - Script Commands", () => {
  test("renders blog post content", async ({ page }) => {
    await page.goto("/blog/script-commands");

    await expect(
      page.getByRole("heading", {
        name: /speed up repetitive tasks/i,
      })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Raycast" })
    ).toBeVisible();
    await expect(
      page.getByText("Apple Script", { exact: false }).first()
    ).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("can navigate between pages", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("main").getByText("About")).toBeVisible();

    await page.getByRole("link", { name: "Seb codes" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByText("Welcome!")).toBeVisible();

    await page
      .getByText("Speed up repetitive tasks", { exact: false })
      .click();
    await expect(page).toHaveURL("/blog/script-commands");
    await expect(
      page.getByRole("heading", { name: /speed up repetitive tasks/i })
    ).toBeVisible();
  });
});
