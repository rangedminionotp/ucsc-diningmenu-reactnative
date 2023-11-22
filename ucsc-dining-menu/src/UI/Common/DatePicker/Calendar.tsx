// import { Button, Text, View, TouchableOpacity } from 'react-native';
// import React from 'react'; 
// import styles from '../../../Styles/CalendarStyles';
// import { DHContextProps, DHContext } from '../../../Model/DHViewModel';

// const week = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
// const month = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// function Calendar() {
//   const { CurrDate, setCurrDate, todayDate, setTodayDate} = React.useContext<DHContextProps>(DHContext);
//   const [calendar, setCalendar] = React.useState<React.ReactNode[]>([]);
//   React.useEffect(() => {
//     generateCalendar();
//   }, [CurrDate, todayDate]);

//   const generateCalendar = () => {
//     const currentMonth = CurrDate.getMonth();
//     const currentYear = CurrDate.getFullYear();
//     const currentDay = CurrDate.getDate(); // Get the day of the month
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//     const todayMonth = todayDate.getMonth();
//     const todayDay = todayDate.getDate();
//     const todayYear = todayDate.getFullYear();
//     const newCalendar = [];
//     let count = 0;
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       newCalendar.push(<Text key={`empty-${i}`} style={styles.weekdayLabel}></Text>);
//       count++
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       if (todayMonth === currentMonth) {
//         if (i === todayDay) {
//           newCalendar.push(<Text key={`today-${i}`} style={styles.today}>{i}</Text>);
//         } else if (i < todayDay) {
//           newCalendar.push(<Text key={`past-${i}`} style={styles.past}>{i}</Text>);
//         } else {
//           newCalendar.push(
//             <TouchableOpacity key={`future-${i}`} onPress={() => selectDate(i)}>
//               <Text style={styles.future}>{i}</Text>
//             </TouchableOpacity>
//           );
//         }
//       } else if (todayMonth < currentMonth) {
//         newCalendar.push(<Text key={`future-${i}`} style={styles.future}>{i}</Text>);
//       } else {
//         newCalendar.push(<Text key={`past-${i}`} style={styles.past}>{i}</Text>);
//       }
//     }

//     for (let i = count; i < 42; i++) {
//       const nextMonthDate = new Date(CurrDate.getFullYear(), CurrDate.getMonth() + 1, 1);
//       if (i - count < nextMonthDate.getDay()) {
//         newCalendar.push(<Text key={`prev-month-${i}`} style={styles.past}>{''}</Text>);
//       } else {
//         const day = i - count - nextMonthDate.getDay() + 1;

//         // Check if it's a day from the current month
//         if (todayMonth === currentMonth && day <= todayDay) {
//           newCalendar.push(<Text key={`current-month-${i}`} style={styles.past}></Text>);
//         } else {
//           newCalendar.push(<Text key={`prev-month-${i}`} style={styles.past}></Text>);
//         }
//       }
//     }

//     setCalendar(newCalendar);
//   };

//   const next = () => {
//     // Update CurrDate to the next month
//     const nextMonthDate = new Date(CurrDate.getFullYear(), CurrDate.getMonth() + 1, CurrDate.getDate());
//     setCurrDate(nextMonthDate);
//   };
//   const today = () =>{
//     setCurrDate(new Date());
//     setTodayDate(new Date());
//   }

//   const prev = () => {
//     const prevMonthDate = new Date(CurrDate.getFullYear(), CurrDate.getMonth() - 1, CurrDate.getDate());
//     setCurrDate(prevMonthDate);
//   }

//   const selectDate = (day: number) => {
//     const newDate = new Date(CurrDate.getFullYear(), CurrDate.getMonth(), day);
//     setTodayDate(newDate);
//   }
//   return (
//     <View style={styles.calendar}>
//       <View accessibilityLabel="WeekdayLabels" style={styles.weekdayContainer}>
//         {week.map((element, index) => (
//           <Text key={index} style={styles.weekdayLabel}>
//             {element}
//           </Text>
//         ))}
//       </View>
//       <View style={styles.daysContainer}>
//         {calendar.map((element, index) => ( 
//           <View key={index} style={styles.day}>
//             {element}
//           </View> 
//         ))}
//       </View>
//       <View>
//         <Text style={styles.title}>{CurrDate.getFullYear()}{month[CurrDate.getMonth()]}</Text>
//       <Button title="Next Month" onPress={next} />
//       <Button title="Today" onPress={today} />
//       <Button title="Prev" onPress={prev} />
//       </View>
//     </View>
//   );
// }

// I decided to use a package instead
// export default Calendar;
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarDisplay = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true}
      }}
    />
  );
};

export default CalendarDisplay;