import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { DHContextProps, DHContext } from '../../../Model/DHViewModel';
import CalendarDisplay from './Calendar';
import styles from '../../../Styles/CalendarStyles';

const DatePicker: React.FC = () => {
  const { todayDate, setTodayDate } = React.useContext<DHContextProps>(DHContext);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const nextDayDate = new Date(todayDate);
  nextDayDate.setHours(nextDayDate.getHours() + 8); // time doesn't match, might become a bug xdd
  const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = nextDayDate.toLocaleDateString(undefined, options);

  const toggleCalendarVisibility = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={toggleCalendarVisibility}>
        <Text style={styles.title}>🗓 {formattedDate}</Text>
      </TouchableOpacity>
      {isCalendarVisible && <CalendarDisplay />}
    </View>
  );
};

export default DatePicker;