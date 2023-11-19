import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000', // Set background color to black for the entire app
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonContainer: {
    backgroundColor: 'rgba(169, 169, 169, 0.5)',  
    padding: 10,
    borderRadius: 4,
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: 'white', 
    fontWeight:'bold'
  },
});