import { test, expect } from '@playwright/test';
import { todoPage } from '../pages/todoPage';

const expectedTodos = ['Buy Groceries', 'Pay bills'];

test.describe('1. TodoMVC – Tests', () => {

  let openWebsite: todoPage;

  test.beforeEach(async ({ page }) => {
    openWebsite = new todoPage(page);
    await openWebsite.navigate();

  for (const todo of expectedTodos){
    await openWebsite.addItem(todo);
  }
    
  });

test('TC-001 | Add New Todos', async ({ page }) => {
  
  
  for (const result of expectedTodos){
    await expect(openWebsite.getItemFromList(result)).toBeVisible();
  }

  await expect(openWebsite.listOfItems()).toHaveCount(2);



  
//   console.log(`Number of items in the list: ${count}`);
});

 test('TC-002 | Mark Complete', async ({ page }) => {

  for (const result of expectedTodos){
    await expect(openWebsite.getItemFromList(result)).toBeVisible();
  }

  await openWebsite.clickElement().first().click();
  await openWebsite.pendingItems('1 item left!');
  await openWebsite.itemsCompleted();
  await expect(openWebsite.getItemFromList(expectedTodos[0])).toBeVisible();

//   //nth() to find elements
//   console.log(`Number of items in the list: ${count}`);
 });

 test('TC-003 | Edit Todo', async({ page }) =>{
// Double-clicks a todo item label, updates the text to "Buy veggies", and ensures the state persists.

  for (const result of expectedTodos){
    await expect(openWebsite.getItemFromList(result)).toBeVisible();
  }

  await openWebsite.updateItem(expectedTodos[1], 'Buy veggies');
  await expect(openWebsite.getItemFromList('Buy veggies')).toBeVisible();

 });


});