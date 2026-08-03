import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { login, logout } from '../helper/sitehelpers.js';

const envFile = process.env.ENV_FILE || '.envqa';
dotenv.config({ path: path.resolve('.', envFile) });



test('login test', async ({ page }) => {
  const username = process.env.username;
  const password = process.env.password;

  console.log('username:', username);
  console.log('password:', password);

  await login(page, username, password);
  await expect(page.locator('h1')).toContainText('Dashboard');
  await logout(page);
});