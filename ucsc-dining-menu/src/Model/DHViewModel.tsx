import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { DHlocations } from '../Interfeces/DH';
import { MenuItemMeals } from '../Interfeces/Menu';

interface DHViewModelProps {
  children: ReactNode;
}

export interface DHContextProps {
  MenuItem: MenuItemMeals[];
  setMenuItem: Dispatch<SetStateAction<MenuItemMeals[]>>; 
  DH: DHlocations[],
  setDH: Dispatch<SetStateAction<DHlocations[]>>;
  CurrDH : DHlocations | null,
  setCurrDH: Dispatch<SetStateAction<DHlocations>>;
  CurrDate: Date,
  setCurrDate: Dispatch<SetStateAction<Date>>;
  todayDate: Date,
  setTodayDate: Dispatch<SetStateAction<Date>>
}
 
const initialContext: DHContextProps = {
  MenuItem: [],
  setMenuItem: () => {},
  DH: [],
  setDH:() => {},
  CurrDH: null,
  setCurrDH: ()=>{},
  CurrDate: new Date(),
  setCurrDate:()=>{},
  todayDate: new Date(),
  setTodayDate:()=>{}
};

export const DHContext = createContext<DHContextProps>(initialContext);

export const DHViewModel: React.FC<DHViewModelProps> = (props) => {
  const [MenuItem, setMenuItem] = useState<MenuItemMeals[]>([]); 
  const [DH, setDH] = useState<DHlocations[]>([]); 
  const [CurrDH, setCurrDH] = useState<DHlocations | null>(null); 
  const [CurrDate, setCurrDate] = useState<Date>(new Date());
  const [todayDate, setTodayDate] = useState<Date>(new Date());
  return (
    <DHContext.Provider value={{ DH, setDH, MenuItem, setMenuItem, CurrDH, setCurrDH, CurrDate, setCurrDate, todayDate, setTodayDate}}>
      {props.children}
    </DHContext.Provider>
  );
};