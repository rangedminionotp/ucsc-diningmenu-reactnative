import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { MenuItemMeals, MenuCats } from '../../Interfeces/Menu';
import styles from '../../Styles/MenuStyles';

const MenuList: React.FC<{ data: any, navigation: any }> = ({ data, navigation }) => {
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const handleCategoryPress = (mealName: string, category: string) => {
    // Create a unique identifier for the category within the meal
    const categoryId = `${mealName}-${category}`;
  
    // Toggle the hidden state of the category
    setHiddenCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((cat) => cat !== categoryId) : [...prev, categoryId]
    );
  };

  const renderItem = ({ item }: { item: MenuItemMeals }) => (
    <View style={styles.menuCategory}>
      <Text style={styles.title}>{item.mealName}</Text>
      {item.menuCat &&
        item.menuCat.map((cat: MenuCats, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(item.mealName, cat.catName)}
            style={styles.categoryContainer}
          >
            <Text style={styles.categoryText}>{cat.catName}</Text>
            {hiddenCategories.includes(`${item.mealName}-${cat.catName}`) ? null : (
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