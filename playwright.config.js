// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where Playwright looks for test files
  testDir: './tests',

  // Maximum time one test can run (in milliseconds)
  timeout: 30 * 1000,

  // Timeout for each individual assertion
  expect: {
    timeout: 5000,
  },

  // Run tests in parallel to speed up execution
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI environments
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI to avoid resource congestion
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use for test results
  reporter: process.env.CI ? 'dot' : [['html', { open: 'never' }]],

  // Shared settings for all the projects below
  use: {
   
    
    // Run tests without showing a browser UI
    headless: true,

    // Capture visual artifacts during failures
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Configure projects for major browsers and devices
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    
    /* Test against mobile viewports if needed */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],

  // Run your local development server before starting the tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
