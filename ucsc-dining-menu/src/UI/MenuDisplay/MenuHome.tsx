import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../../Styles/styles';
import { DHContextProps, DHContext } from '../../Model/DHViewModel';
import { fetchMenuItem } from '../../Repo/MenuListRepo';
import MenuList from './MenuList';

 const MenuHome: React.FC<{ navigation: any }> = ({ navigation }) => { 

  const {MenuItem} = React.useContext<DHContextProps>(DHContext);
  
  return (
    <View> 
        <MenuList data={MenuItem} navigation={navigation}/> 
    </View>
  );
};

export default MenuHome;