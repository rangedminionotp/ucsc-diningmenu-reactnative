import cheerio from 'react-native-cheerio';
import { Dispatch, SetStateAction } from 'react';

import { MenuItemListProp } from "../Interfeces/Menu";
import { MenuItems } from '../Interfeces/Menu';

export const fetchMenuItem = async (
  menuURL: string,
  setMenuItems: Dispatch<SetStateAction<MenuItems[]>>
) => {
  try {
    const response = await fetch(menuURL);

    if (response.ok) {
      const htmlContent = await response.text();
      const $ = cheerio.load(htmlContent);
      const shortMenuMeal : string[]= [];
      const shortMenucat: string[] = [];
      const shortMenurecipe : string[] = [];
      // Select all div elements with class shortmenumeals
      const shortMenuMeals = $('tr' );
      const shortMenucats = $('div.shortmenucats')
      const shortMenuRecipes = $('div.shortmenurecipes') 
        shortMenuMeals.map((index: number, element: cheerio.Element) => { 
          const associatedRecipes = $(element).find('div.shortmenumeals');
          associatedRecipes.each((recipeIndex: number, recipeElement: cheerio.Element) => {
            const recipeName = $(recipeElement).text();
            shortMenurecipe.push(recipeName);
          }) 
        }) 
        console.log(shortMenurecipe)
    ; 
      // setMenuItems(
      //   shortMenucats.map((index: number, element: cheerio.Element) => {
      //     shortMenucat.push($(element).text().trim())
      //     return {
      //       name: `${index}${$(element).text().trim()}`,
      //     };
      //   }).get()
      // );
      // setMenuItems(
      //   shortMenuRecipes.map((index: number, element: cheerio.Element) => {
      //     shortMenurecipe.push($(element).text().trim())
      //     return {
      //       name: `${index}${$(element).text().trim()}`,
      //     };
      //   }).get()
      // ); 
    } else {
      console.error(`Failed to fetch the menu. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
};