import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');

  await expect(page.getByText('Buy Groceries')).toBeVisible();

  await page.getByTestId('text-input').fill('Pay bills');
  await page.getByTestId('text-input').press('Enter');

  await expect(page.getByText('Pay bills')).toBeVisible();

  const listItems = page.getByTestId('todo-item');
  await expect(listItems).toHaveCount(2);

  await page.getByTestId('todo-item-toggle').first().click();
  await page.getByText('Completed', {exact : true}).click();
  await expect(listItems).toHaveCount(1);
  await expect(page.locator('.todo-count')).toHaveText('1 item left!')

  //nth() to find elements
  
//   console.log(`Number of items in the list: ${count}`);
});