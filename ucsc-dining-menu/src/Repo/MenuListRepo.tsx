import cheerio from 'react-native-cheerio';
import { Dispatch, SetStateAction } from 'react';

import { MenuCats, MenuItemMeals } from "../Interfeces/Menu";
import { MenuItems } from '../Interfeces/Menu'; 

export const fetchMenuItem = async (
  menuURL: string,
  setMenuItems: Dispatch<SetStateAction<MenuItemMeals[]>>
) => {
  try {
    const response = await fetch(menuURL);

    if (response.ok) {
      const htmlContent = await response.text();
      const $ = cheerio.load(htmlContent); 
      const titleArray: string[] = [];
      const catArray: string[] = [];
      // Select all div elements with class shortmenumeals
 
      const menuList = $('td div').slice(6);   
      const shortmenumeals = $('td div.shortmenumeals');   
      const shortmenucats = $('td div.shortmenucats'); 
      shortmenumeals.each((index: number, element: CheerioElement) => { 
        titleArray.push($(element).text().replace(/<[^>]*>?/gm, '').trim());
      });
      shortmenucats.each((index: number, element: CheerioElement) => { 
        catArray.push($(element).text().replace(/<[^>]*>?/gm, '').trim());
      }); 
      let menuitem : MenuItems[] = []
      let menucat : MenuCats[] = []
      let res : MenuItemMeals[] = []
      let flag = false;
      let curr = ''
      menuList
          .map((index: number, element: string) => {   
            const anchor = $(element).text();  
            if (titleArray.includes(anchor)){
              if (flag){
                res.push({mealName: curr, menuCat: menucat})
                menucat = []
                curr = anchor;
              } else {
                flag = true;
                curr = anchor;
              }
              
            } else if (catArray.includes(anchor)){
              menucat.push({catName:anchor, menuItem: menuitem})
              menuitem = []
            } else {
              menuitem.push({itemName: anchor});
            }
            if (index === menuList.length - 1 && flag) {
              res.push({ mealName: curr, menuCat: menucat });
            }
          })
          
      console.log(res)  
          
      setMenuItems(
        res
      ); 
    } else {
      console.error(`Failed to fetch the menu. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
};