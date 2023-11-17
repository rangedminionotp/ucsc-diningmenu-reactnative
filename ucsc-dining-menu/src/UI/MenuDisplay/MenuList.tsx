import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { MenuItemMeals } from '../../Interfeces/Menu';
import styles from '../../Styles/styles';

const MenuList: React.FC<{ data: any, navigation: any }> = ({ data, navigation }) => {

  const renderItem = ({ item }: { item: MenuItemMeals }) => (
    <View style={styles.menuCategory}>
      <Text style={styles.title}>{item.mealName}</Text>
      {item.menuCat &&
        item.menuCat.map((cat, index) => (
          <View key={index} style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{cat.catName}</Text>
            {cat.menuItem &&
              cat.menuItem.map((menuItem, index) => (
                <Text key={index} style={styles.menuItemText}>{menuItem.itemName}</Text>
              ))}
          </View>
        ))}
    </View>
  );

  return (
    <View style={styles.menuListContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};
 

export default MenuList;