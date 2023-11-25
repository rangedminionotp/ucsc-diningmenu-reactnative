import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { DHContextProps, DHContext } from '../../../Model/DHViewModel';
import { View, Button } from 'react-native'; 

const CalendarDisplay = () => {
  const [selected, setSelected] = useState('');
  const { setTodayDate } = React.useContext<DHContextProps>(DHContext);

  const handleDayPress = async (day) => {
    setSelected(day.dateString); 
  };

  const handleSetPress = () => {
    setTodayDate(new Date(selected));
  };

  return (
    <View>
      <View>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true },
          }}
        />
      </View>
      <View>
        <Button title="Set" onPress={handleSetPress} />
      </View>
    </View>
  );
};

export default CalendarDisplay;