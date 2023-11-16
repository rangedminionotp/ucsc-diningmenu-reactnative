export interface MenuItems {
    itemName: string,
    price?: string,
    traits?: string[],
    recipes?: string[],
    type?: string
}

export interface MenuCats {
    catName: string,
    menuItem?: MenuItems[]
}

export interface MenuItemMeals {
    mealName: string,
    menuCat?: MenuCats[]
}