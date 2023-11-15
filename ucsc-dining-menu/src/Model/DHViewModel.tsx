import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { DHlocations } from '../Interfeces/DH';
import { MenuItems } from '../Interfeces/Menu';

interface DHViewModelProps {
  children: ReactNode;
}

export interface DHContextProps {
  MenuItem: MenuItems[];
  setMenuItem: Dispatch<SetStateAction<MenuItems[]>>; 
  DH: DHlocations[],
  setDH: Dispatch<SetStateAction<DHlocations[]>>;
  CurrDH : string,
  setCurrDH: Dispatch<SetStateAction<string>>;
}
 
const initialContext: DHContextProps = {
  MenuItem: [],
  setMenuItem: () => {},
  DH: [],
  setDH:() => {},
  CurrDH: '',
  setCurrDH: ()=>{}
};

export const DHContext = createContext<DHContextProps>(initialContext);

export const DHViewModel: React.FC<DHViewModelProps> = (props) => {
  const [MenuItem, setMenuItem] = useState<MenuItems[]>([]); 
  const [DH, setDH] = useState<DHlocations[]>([]); 
  const [CurrDH, setCurrDH] = useState<string>(''); 
  return (
    <DHContext.Provider value={{ DH, setDH, MenuItem, setMenuItem, CurrDH, setCurrDH}}>
      {props.children}
    </DHContext.Provider>
  );
};