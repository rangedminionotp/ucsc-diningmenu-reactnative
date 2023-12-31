import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from '../../Styles/DHstyles';
import { DHlocations as Item, DHListProps } from '../../Interfeces/DH';
import { fetchMenuItem } from '../../Repo/MenuList/MenuListRepo';
import { DHContextProps } from '../../Model/DHViewModel';
import { DHContext } from '../../Model/DHViewModel';

const DHList: React.FC<{ item: Item[]; navigation: any }> = ({ item, navigation }) => {
  const { setMenuItem, setCurrDH, todayDate} = React.useContext<DHContextProps>(DHContext);

  const data: Item[] = item;

  const renderItem = ({ item }: { item: Item }) => (
    <TouchableOpacity
      onPress={async () => {
        setCurrDH(item);
        await fetchMenuItem(item.locationURL!, todayDate!, setMenuItem);
        navigation.navigate('Location', { title: item.name });
      }}
    >
      <View style={styles.rowFront}>
        <Text style={[styles.text, styles.greyText]} key={item.originalName}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <SwipeListView
        data={data}
        renderItem={renderItem}
        rightOpenValue={-250}
        previewRowKey={'0'}
        previewOpenValue={40}
        previewOpenDelay={3000}
        disableRightSwipe
      />
    </View>
  );
};

export default DHList;