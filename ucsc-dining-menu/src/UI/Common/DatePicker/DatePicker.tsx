import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library
import styles from '../../../Styles/CalendarStyles';
import CalendarDisplay from './Calendar';
import { DHContextProps, DHContext } from '../../../Model/DHViewModel';

const DatePicker: React.FC = () => {
  // const [date, currentDate] = useState('');
  const {todayDate, setTodayDate} = React.useContext<DHContextProps>(DHContext);
  const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = todayDate.toLocaleDateString(undefined, options); 
  return (
    <View style={styles.container}> 
      <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed')}>
      <Text style={styles.title}>🗓 {formattedDate}</Text>
    </TouchableOpacity>
      <CalendarDisplay />  
    </View>
  );
};

export default DatePicker;