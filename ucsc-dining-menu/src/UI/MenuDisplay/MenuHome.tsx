import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../../Styles/styles';
import { DHContextProps, DHContext } from '../../Model/DHViewModel';
import { fetchMenuItem } from '../../Repo/MenuListRepo';
import MenuList from './MenuList';
import MenuBreadcrumb from './MenuBreadcrumb';
 const MenuHome: React.FC<{ navigation: any }> = ({ navigation }) => { 

  const {MenuItem} = React.useContext<DHContextProps>(DHContext);
  const [breadcrumbItems, setBreadcrumbItems] = useState(['Home', 'Category', 'Subcategory']);

  const handleBreadcrumbPress = (index: number) => {
    console.log('Breadcrumb item pressed:', breadcrumbItems[index]);
  };
  return (
    <View>
        {/* <MenuBreadcrumb items={breadcrumbItems} onItemPress={handleBreadcrumbPress} /> */}
        <MenuList data={MenuItem} navigation={navigation}/> 
    </View>
  );
};

export default MenuHome;