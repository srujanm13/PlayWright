import { test, expect } from '@playwright/test';
import { login,logout } from '../helper/sitehelpers.js';
test('login test', async ({ page }) => {
  console.log('username:', process.env.USERNAME);
  console.log('password:', process.env.PASSWORD);
  await login(page, process.env.username, process.env.password);
  await expect(page.locator('h1')).toContainText('Dashboard');
  await logout(page);

});
