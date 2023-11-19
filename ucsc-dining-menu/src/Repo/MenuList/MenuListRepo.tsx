import cheerio from 'react-native-cheerio';
import { Dispatch, SetStateAction } from 'react';

import { MenuCats, MenuItemMeals } from "../../Interfeces/Menu";
import { MenuItems } from '../../Interfeces/Menu'; 

class MenuFetcher {
  menuURL: string;
  setMenuItems: Dispatch<SetStateAction<MenuItemMeals[]>>;

  constructor(menuURL: string, setMenuItems: Dispatch<SetStateAction<MenuItemMeals[]>>) {
    this.menuURL = menuURL;
    this.setMenuItems = setMenuItems;
  }

  fetchMenuItem = async () => {
    try {
      const response = await fetch(this.menuURL);

      if (response.ok) {
        const htmlContent = await response.text();
        const $ = cheerio.load(htmlContent); 
        const titleArray: string[] = [];
        const catArray: string[] = [];
        const allItem: string[] = []; 
        const menuList = $('td div').slice(6);   
        const shortmenumeals = $('td div.shortmenumeals');   
        const shortmenucats = $('td div.shortmenucats'); 

        shortmenumeals.each((index: number, element: CheerioElement) => { 
          const text = $(element).text().replace(/<[^>]*>?/gm, '').trim(); 
          if (text !== "") {
            titleArray.push(text);
          }  
        });

        shortmenucats.each((index: number, element: CheerioElement) => { 
          const text = $(element).text().replace(/<[^>]*>?/gm, '').trim(); 
          if (text !== "") {
            catArray.push(text);
          } 
        });

        menuList.each((index: number, element: CheerioElement) => { 
          const text = $(element).text().replace(/<[^>]*>?/gm, '').trim(); 
          if (text !== "") {
            allItem.push(text);
          }
        });

        allItem.pop();
        
        let menuitem : MenuItems[] = [];
        let menucat : MenuCats[] = [];
        let res : MenuItemMeals[] = []; 
        let currCat = '';
        let currMeal = ''; 
        
        for (let i = 0; i < allItem.length; i++){
          const anchor = allItem[i]; 
          if (titleArray.includes(anchor)){  
            currMeal = anchor;
          }  
          else if (catArray.includes(anchor)){  
            currCat = anchor; 
          } else {
            menuitem.push({ itemName: anchor }); 
            if (titleArray.includes(allItem[i+1])){
              menucat.push({ catName: currCat, menuItem: menuitem })
              res.push({ mealName: currMeal, menuCat: menucat })
              menuitem = [];
              menucat = [];
            } else if (catArray.includes(allItem[i+1])){
              menucat.push({ catName: currCat, menuItem: menuitem })
              menuitem = []; 
            }
          } 
        } 
        menucat.push({ catName: currCat, menuItem: menuitem });
        res.push({ mealName: currMeal, menuCat: menucat }); 
        this.setMenuItems(res);  
      } else {
        console.error(`Failed to fetch the menu. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };
}

export default MenuFetcher;