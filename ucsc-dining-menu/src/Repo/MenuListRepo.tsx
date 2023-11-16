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
      const allItem: string[] = [];
      // Select all div elements with class shortmenumeals
 
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
      let menuitem : MenuItems[] = []
      let menucat : MenuCats[] = []
      let res : MenuItemMeals[] = [] 
      let currCat = ''
      let currMeal = ''
      // allItem
      //     .map((element: string) => {   
      //       const anchor = element;  
      //       if (titleArray.includes(anchor)){ 
      //           // res.push({mealName: anchor, menuCat: menucat})
      //           // menucat = [] 
      //           currMeal = anchor;
      //         }  
      //        else if (catArray.includes(anchor)){ 
      //           // menucat.push({catName: anchor, menuItem: menuitem})
      //           // menuitem = [] 
      //           currCat = anchor; 
      //       } else {
      //         menuitem.push({itemName: anchor});
      //       } 
      //     }) 
      // setMenuItems(
      //   res
      // ); 
      for (let i = 0; i < allItem.length; i++){
        const anchor = allItem[i]
        // console.log(anchor)
        if (titleArray.includes(anchor)){ 
                    // res.push({mealName: anchor, menuCat: menucat})
                    // menucat = [] 
          currMeal = anchor;
          }  
          else if (catArray.includes(anchor)){ 
            // menucat.push({catName: anchor, menuItem: menuitem})
            // menuitem = [] 
            currCat = anchor; 
        } else {
          menuitem.push({itemName: anchor}); 
          if (titleArray.includes(allItem[i+1])){
            menucat.push({catName: currCat, menuItem: menuitem})
            res.push({mealName: currMeal, menuCat: menucat})
            menuitem = []
            menucat = []
          } else if (catArray.includes(allItem[i+1])){
            menucat.push({catName: currCat, menuItem: menuitem})
            menuitem = [] 
          }
        } 
      }
      console.log(res);
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