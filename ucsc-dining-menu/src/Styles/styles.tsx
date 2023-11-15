import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000', // Set background color to black for the entire app
    padding: 15,
    flex: 10,
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
  greyText: { 
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#808080',
    padding: 20,
    fontSize:20, 
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
  },
});