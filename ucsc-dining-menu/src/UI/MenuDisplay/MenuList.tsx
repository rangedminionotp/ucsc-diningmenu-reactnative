import React from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from '../../Styles/styles';
import {MenuItemMeals } from '../../Interfeces/Menu'; 

const MenuList: React.FC<{data: any, navigation: any }> = ({ data, navigation }) => {

  const renderItem = ({ item }: { item: MenuItemMeals }) => (
    <View>
      <Text>{item.mealName}</Text> 
      {item.menuCat && item.menuCat.length > 0 && (
        <Text>{item.menuCat[0].catName}</Text>
      )}
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}; 

export default MenuList;