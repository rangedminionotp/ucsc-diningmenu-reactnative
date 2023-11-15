import React from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from '../../Styles/styles';
import { MenuItems } from '../../Interfeces/Menu'; 

const MenuList: React.FC<{data: any, navigation: any }> = ({ data, navigation }) => {

  const renderItem = ({ item }: { item: MenuItems }) => (
    <View>
      <Text>{item.name}</Text>
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