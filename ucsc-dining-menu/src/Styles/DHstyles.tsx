import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#141414', // Set background color to black for the entire app
    padding: 15,
    flex: 1,
  },
  text: {
    color: '#e8b62e',
    fontSize: 10,
    fontWeight: 'bold',
  },
  rowFront: { 
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    color: '#FFD700',
    borderRadius:20,  
    marginRight: 2,
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#FFD700',
  },
  backTextWhite: {
    color: '#FFF',
  }, 
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    padding: 10,
  },
  locationsBorder: {
    borderWidth: 2,  // Set the border width
    borderColor: '#FFD700',  // Set the border color
    borderRadius: 5, // Optional: Set border radius for rounded corners
    backgroundColor: 'rgba(169, 169, 169, 0.2)',  
  },
  greyText: { 
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#808080',
    padding: 20,
    fontSize:20, 
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
  }
});