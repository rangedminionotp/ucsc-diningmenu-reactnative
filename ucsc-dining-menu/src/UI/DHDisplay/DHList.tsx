import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from '../../Styles/styles';
import { DHlocations as Item, DHListProps } from '../../Interfeces/DH';
import { fetchMenuItem } from '../../Repo/MenuListRepo';
import { DHContextProps } from '../../Model/DHViewModel';
import { DHContext } from '../../Model/DHViewModel';
const DHList: React.FC<{item: Item[], navigation: any }>= ({ item, navigation}) => {
  const {setMenuItem, MenuItem} = React.useContext<DHContextProps>(DHContext);

  const data: Item[] = item;
  
  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity 
    onPress={
     async ()=> {
        await fetchMenuItem(item.locationURL!, setMenuItem);
        navigation.navigate('Location', {title: item.name}) 
        console.log(item.locationURL)
        }
      }>
      <View style={styles.rowFront}>
        <Text style={[styles.text, styles.greyText]} key={item.originalName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <SwipeListView
        data={data}
        renderItem={renderItem}
        rightOpenValue={-250}
        previewRowKey={'0'}
        previewOpenValue={40}
        previewOpenDelay={3000}
        disableRightSwipe
        horizontal
      />
    </View> 
  );
};

export default DHList;