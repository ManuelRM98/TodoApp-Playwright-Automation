import { Page, Locator, expect} from '@playwright/test';

export class todoPage { //name has to match the ts file

    //👇 This declaration is called an "Instance Property" or "Class Property"
    private readonly page: Page;
    private readonly fieldInput: Locator;
    private readonly todoItem: Locator;
    private readonly buttonItem: Locator;
    private readonly listItems: Locator;
    private readonly footerNavCompleted: Locator;
    private readonly itemsLeft: Locator;
    private readonly editTodo: Locator;
    private readonly deleteButton: Locator;
    private readonly deleteButtonTestId = 'todo-item-button';

    constructor(page:Page) {
        //  👇 This assignment is called "Property Initialization" inside the "Constructor Method"
        this.page = page;
        this.fieldInput = page.getByTestId('text-input');
        this.todoItem = page.getByTestId('todo-item-label');
        this.editTodo = page.locator('[data-testid="text-input"]:not([placeholder])');
        this.buttonItem = page.getByTestId('todo-item-toggle');
        this.listItems = page.getByTestId('todo-item');
        this.footerNavCompleted = page.getByText('Completed', {exact : true});
        this.itemsLeft = page.locator('.todo-count'); 
        this.deleteButton = page.getByTestId('todo-item-button');

    }

    //methods
    async navigate() {
        await this.page.goto('');
    }

    async addItem(itemName: string): Promise<void>{

        await this.fieldInput.click();
        await this.fieldInput.fill(itemName);
        await this.fieldInput.press('Enter');

    }    

    // async listOfItems(numberOfItems: number): Promise<void>{

    //     await expect(this.listItems).toHaveCount(numberOfItems);

    // }

    listOfItems(): Locator{

        return this.listItems;

    }

    getItemFromList(name: string): Locator{

        return this.todoItem.filter({ hasText: name });
        //page.getByText('Buy Groceries')

    }



    async itemsCompleted(): Promise<void>{

        await this.footerNavCompleted.click();
    }

    clickElement(): Locator{

        return this.buttonItem
    }


    async pendingItems(numberItems : string): Promise<void>{
        await expect(this.itemsLeft).toHaveText(numberItems);
    }

    private editItem(itemName: string): Locator{
        return this.listItems.filter({has: this.editTodo.filter({hasText: itemName})});
    }

    async updateItem(currentName : string, newName : string): Promise<void>{
        await this.todoItem.filter({hasText: currentName}).dblclick();

        await this.editTodo.fill(newName);
        await this.editTodo.press('Enter');
    }

    async deleteItem(itemName : string): Promise<void>{

        const row = this.listItems.filter({hasText: itemName});
        const deleteButton = row.getByTestId(this.deleteButtonTestId); 

        await row.hover();
        await expect(deleteButton).toBeVisible();
        await deleteButton.click();
        
        

    }

//   await page.getByText('Completed', {exact : true}).click();
//   await expect(listItems).toHaveCount(1);
//   await expect(page.locator('.todo-count')).toHaveText('1 item left!')
}