import {test,expect} from '@playwright/test';

test('Test', async ({page}) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/');
  const title = await page.title();
  expect(title).toBe('EventHub — Discover & Book Events');
});