import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../../Styles/DHstyles';
import { DHContextProps, DHContext } from '../../Model/DHViewModel';
import { fetchMenuItem } from '../../Repo/MenuList/MenuListRepo';
import MenuList from './MenuList';
import MenuBreadcrumb from './MenuBreadcrumb';
const MenuHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { MenuItem } = React.useContext<DHContextProps>(DHContext);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [breadcrumbItems, setBreadcrumbItems] = useState(MenuItem.map((element) => element.mealName));

  const handleBreadcrumbPress = (index: number) => {
    // Update the selected item based on the pressed breadcrumb
    setSelectedItem(breadcrumbItems[index]);
  };

  // Filter the MenuItem array based on the selected item
  const filteredMenuItems = selectedItem === null ? MenuItem : MenuItem.filter(item => item.mealName === selectedItem);

  return (  
    <View >
      <MenuBreadcrumb items={breadcrumbItems} onItemPress={handleBreadcrumbPress} />
      <MenuList data={filteredMenuItems} navigation={navigation} />
    </View>
  );
};

export default MenuHome;