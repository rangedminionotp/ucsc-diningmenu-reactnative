export interface MenuItems {
    name: string,
    price?: string,
    traits?: string[] 
    recipes?: string[]
}  

export interface MenuItemListProp {
    breakfast?: MenuItems[],
    lunch?: MenuItems[],
    dinner?: MenuItems[],
    lateNight?: MenuItems[],
    menu?: MenuItems[]
}