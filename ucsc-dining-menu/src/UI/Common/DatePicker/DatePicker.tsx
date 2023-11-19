import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library
import styles from '../../../Styles/CalendarStyles';
import Calendar from './Calendar';

const DatePicker: React.FC = () => {
  // const [date, currentDate] = useState('');
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  console.log(formattedDate)
  return (
    <View style={styles.container}> 
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed')}>
      <Text style={styles.title}>🗓 {formattedDate}</Text>
    </TouchableOpacity>
      < Calendar />  
    </View>
  );
};

export default DatePicker;