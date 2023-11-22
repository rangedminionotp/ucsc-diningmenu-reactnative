import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414', // Background color for the whole calendar
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'rgba(169, 169, 169, 0.5)',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  month: {
    fontWeight: 'bold',
    color: 'white',
  },
  calendar: {
    fontFamily: 'monospace',
    alignContent: 'center',
    color: 'white',
    alignItems: 'center', // Center the content horizontally in the calendar
    justifyContent: 'center', // Center the content vertically in the calendar
  },
  weekdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdayLabel: {
    width: '14%', // Set the width to 14% for each day (100% / 7)
    fontSize: 16,
    color: 'grey',
    marginHorizontal: 5,
  },
  today:{
    color: "red",
    fontSize: 16,
    backgroundColor: 'green',
    marginHorizontal: 5,
  },
  past:{
    color: "grey",
    fontSize: 16,
    marginHorizontal: 5
  },
  future:{
    color: "white",
    fontSize: 16,
    marginHorizontal: 5
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  day: {
    width: '14%', // Set the width to 14% for each day (100% / 7)
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});