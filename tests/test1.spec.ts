import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Pay bills');
  await page.getByTestId('text-input').press('Enter');

  const listItems = page.getByTestId('todo-item');
  await expect(listItems).toHaveCount(1);
//   console.log(`Number of items in the list: ${count}`);
});