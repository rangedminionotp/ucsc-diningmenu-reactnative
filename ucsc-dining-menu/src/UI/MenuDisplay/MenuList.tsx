import React from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from '../../Styles/styles';
import {MenuItemMeals } from '../../Interfeces/Menu'; 

const MenuList: React.FC<{data: any, navigation: any }> = ({ data, navigation }) => {

  const renderItem = ({ item }: { item: MenuItemMeals }) => (
    <View>
      <Text>{item.mealName}</Text>
      {item.menuCat &&
        item.menuCat.map((cat) => (
          <View>
            <Text>{cat.catName}</Text>
            {cat.menuItem &&
              cat.menuItem.map((menuItem) => (
                <Text>{menuItem.itemName}</Text>
              ))}
          </View>
        ))}
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