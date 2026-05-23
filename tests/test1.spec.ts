import { test, expect } from '@playwright/test';
import { todoPage } from '../pages/todoPage';



test.describe('1. TodoMVC – Tests', () => {

  let openWebsite: todoPage;

  test.beforeEach(async ({ page }) => {
    openWebsite = new todoPage(page);
    await openWebsite.navigate();
    
  });

test('TC-001 | Add New Todos', async ({ page }) => {
  
  const expectedTodos = ['Buy Groceries', 'Pay bills'];

  for (const todo of expectedTodos){
    await openWebsite.addItem(todo);
  }
  
  for (const result of expectedTodos){
    await expect(openWebsite.getItemFromList(result)).toBeVisible();
  }

  await expect(openWebsite.listOfItems()).toHaveCount(2);



  
//   console.log(`Number of items in the list: ${count}`);
});

// test('TC-002 | Mark Complete', async ({ page }) => {

//   const listItems = page.getByTestId('todo-item');
//   await expect(listItems).toHaveCount(2);

//   await page.getByTestId('todo-item-toggle').first().click();
//   await page.getByText('Completed', {exact : true}).click();
//   await expect(listItems).toHaveCount(1);
//   await expect(page.locator('.todo-count')).toHaveText('1 item left!')

//   //nth() to find elements
  
// //   console.log(`Number of items in the list: ${count}`);
// });



});