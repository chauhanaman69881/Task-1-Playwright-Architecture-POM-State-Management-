// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // ✅ Global Authentication
  globalSetup: './auth/global_Setup.js',

  // ✅ Shared context settings
  use: {
    baseURL: 'https://www.saucedemo.com',
    storageState: 'storage/auth.json',

    headless: true,

    // 📸 Screenshot settings
    screenshot: 'only-on-failure',

    // 🎥 Video recording
    video: 'retain-on-failure',

    // 🔍 Trace (very useful for debugging)
    trace: 'on-first-retry',
  },

  // 🌍 Cross-browser execution
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
