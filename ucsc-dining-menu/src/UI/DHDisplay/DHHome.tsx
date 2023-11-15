import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { DHContext, DHContextProps } from '../../Model/DHViewModel';
import DHList from './DHList';
import { fetchData, fetchURL} from '../../Repo/DHListRepo';
import { DHlocations } from '../../Interfeces/DH';
import styles from '../../Styles/styles';
 const DHHome: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [DHitem, setDHItem] = React.useState<DHlocations[]>([]);
    const [Cafeitem, setCafeItem] = React.useState<DHlocations[]>([]);
    const [Otheritem, setOtherItem] = React.useState<DHlocations[]>([]);
    
  const { DH, setDH} = React.useContext<DHContextProps>(DHContext);
  
  const [loading, setLoading] = useState(true);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dining Halls</Text>
      <DHList item={DHitem} navigation={navigation} />
      <Text style={styles.title}>Cafes & Markets</Text>
      <DHList item={Cafeitem} navigation={navigation}/>
      {/* <Text style={styles.title}>Others</Text>
      <DHList item={Otheritem} />   */}
    </View>
  );
};

export default DHHome;