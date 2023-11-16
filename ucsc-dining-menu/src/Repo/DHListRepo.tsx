const url = 'https://dining.ucsc.edu/eat/index.html'; 
const menuURL = 'https://nutrition.sa.ucsc.edu/location.aspx';

const cheerio = require('react-native-cheerio')
import { DHlocations } from "../Interfeces/DH";
import { Dispatch, SetStateAction } from 'react';


// get list of DH location names
export const fetchData = async (setDH: Dispatch<SetStateAction<DHlocations[]>>) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const htmlContent = await response.text();

      // extract text between <h2> tags
      const regex = /<h2.*?>(.*?)<\/h2>/g;
      const matches = htmlContent.match(regex); 

      setDH((matches || []).map((match) => ({
        originalName: match.replace(/<[^>]*>?/gm, ''),
        name: match.replace(/<[^>]*>?/gm, '').replace(/&amp;/g, '&').replace('Dining Hall', '')
      })));  
    } else {
      console.error(`Failed to fetch the website. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchURL = async (setDH: Dispatch<SetStateAction<DHlocations[]>>) => {
  try {
    const response = await fetch(menuURL);

    if (response.ok) {
      const htmlContent = await response.text();
      const $ = cheerio.load(htmlContent);

      const listItems = $('ul li');

      setDH(
        listItems
          .map((index: number, element: string) => { 
            const anchor = $(element).find('a');  
            return {
              originalName: anchor.text(),
              locationURL: `https://nutrition.sa.ucsc.edu/${anchor.attr('href')}`,
              name: anchor.text().replace(/<[^>]*>?/gm, '').replace(/&amp;/g, '&').replace('Dining Hall', '')
            };
          }) 
      ); 
    } else {
      console.error(`Failed to fetch the website. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};