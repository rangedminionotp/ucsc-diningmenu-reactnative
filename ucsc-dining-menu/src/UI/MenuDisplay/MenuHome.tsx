import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import styles from '../../Styles/DHstyles';
import { DHContextProps, DHContext } from '../../Model/DHViewModel';
import { fetchMenuItem } from '../../Repo/MenuList/MenuListRepo';
import MenuList from './MenuList';
import MenuBreadcrumb from './MenuBreadcrumb';
import DatePicker from '../Common/DatePicker/DatePicker';

const MenuHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { MenuItem, CurrDH, todayDate, setMenuItem } = React.useContext<DHContextProps>(DHContext);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [breadcrumbItems, setBreadcrumbItems] = useState(MenuItem.map((element) => element.mealName));

  const handleBreadcrumbPress = (index: number) => {
    // If the clicked breadcrumb is already selected, set selectedItem to null
    if (selectedItem === breadcrumbItems[index]) {
      setSelectedItem(null);
    } else {
      // Update the selected item based on the pressed breadcrumb
      setSelectedItem(breadcrumbItems[index]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMenuItem(CurrDH!.locationURL!, todayDate!, setMenuItem);
    }; 
    fetchData();
  }, [todayDate]);

  // Filter the MenuItem array based on the selected item
  const filteredMenuItems = selectedItem === null ? MenuItem : MenuItem.filter(item => item.mealName === selectedItem);

  const renderItem = () => (
    <View>
      <View>
        <DatePicker />
      </View>
      <View>
        <MenuBreadcrumb items={breadcrumbItems} onItemPress={handleBreadcrumbPress} />
      </View>
      <View>
        <MenuList data={filteredMenuItems} navigation={navigation} />
      </View>
    </View>
  );
  
  return (
    <FlatList
      data={[2]} // some random placeholder, dw about it
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
};

export default MenuHome;