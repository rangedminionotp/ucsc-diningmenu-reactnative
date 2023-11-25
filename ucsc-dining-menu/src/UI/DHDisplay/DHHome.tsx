import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { DHContext, DHContextProps } from '../../Model/DHViewModel';
import DHList from './DHList';
import { fetchURL } from '../../Repo/DHList/DHListRepo';
import { DHlocations } from '../../Interfeces/DH';
import styles from '../../Styles/DHstyles'; 
import DatePicker from '../Common/DatePicker/DatePicker';
import { useTheme } from '@react-navigation/native';

const DHHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const colors = useTheme().colors;
  
  const [DHitem, setDHItem] = React.useState<DHlocations[]>([]);
  const [Cafeitem, setCafeItem] = React.useState<DHlocations[]>([]);
  const [Otheritem, setOtherItem] = React.useState<DHlocations[]>([]);
  const { DH, setDH } = React.useContext<DHContextProps>(DHContext);
  const [loading, setLoading] = useState(true);

  const [showDiningHalls, setShowDiningHalls] = useState(true);
  const [showCafesMarkets, setShowCafesMarkets] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        await fetchURL(setDH);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally { 
        setLoading(false);
      }
    }; 
    fetchDataAsync();
  }, []);

  useEffect(() => {
    setDHItem(DH.slice(0, 5));
    setCafeItem(DH.slice(6, 17));
    setOtherItem(DH.slice(18, 21));
  }, [DH]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const renderItem = () => (
    <View>
      <DatePicker />
      <TouchableOpacity
        onPress={() => setShowDiningHalls(!showDiningHalls)}
        style={{ marginBottom: 20 }}
      >
    <View style={{...styles.locationsBorder, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text style={styles.title}>
        Dining Halls
      </Text>
      <Text style={styles.title}>
        {showDiningHalls ? '➴' : '➵'}
      </Text>
    </View>
      </TouchableOpacity>
      {showDiningHalls && <DHList item={DHitem} navigation={navigation} />}

      <TouchableOpacity
        onPress={() => setShowCafesMarkets(!showCafesMarkets)}
        style={{ marginBottom: 20 }}
      >
        <View style={{...styles.locationsBorder, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>
          Cafes & Markets
          </Text>
          <Text style={styles.title}>
            {showCafesMarkets ? '➴' : '➵'}
          </Text>
        </View>
      </TouchableOpacity>
      {showCafesMarkets && <DHList item={Cafeitem} navigation={navigation} />}
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

export default DHHome;