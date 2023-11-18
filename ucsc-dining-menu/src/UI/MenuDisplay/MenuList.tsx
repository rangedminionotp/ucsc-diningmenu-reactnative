import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { MenuItemMeals, MenuCats } from '../../Interfeces/Menu';
import styles from '../../Styles/styles';

const MenuList: React.FC<{ data: any, navigation: any }> = ({ data, navigation }) => {
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const handleCategoryPress = (category: string) => {
    // Toggle the hidden state of the category
    setHiddenCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const renderItem = ({ item }: { item: MenuItemMeals }) => (
    <View style={styles.menuCategory}>
      <Text style={styles.title}>{item.mealName}</Text>
      {item.menuCat &&
        item.menuCat.map((cat: MenuCats, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(cat.catName)}
            style={styles.categoryContainer}
          >
            <Text style={styles.categoryText}>{cat.catName}</Text>
            {hiddenCategories.includes(cat.catName) ? null : (
              cat.menuItem &&
              cat.menuItem.map((menuItem, index) => (
                <Text key={index} style={styles.menuItemText}>
                  {menuItem.itemName}
                </Text>
              ))
            )}
          </TouchableOpacity>
        ))}
    </View>
  );

  return (
    <View style={styles.menuListContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.mealName}
      />
    </View>
  );
};

export default MenuList;