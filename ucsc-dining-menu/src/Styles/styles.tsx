import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000', // Set background color to black for the entire app
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
  BCcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15, 
  },
  crumbContainer: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5, 
  },
  selectedCrumbContainer: {
    backgroundColor: '#e0e0e0' 
  },
  crumb: {
    color: 'blue',
    fontSize: 15,
  },
  menuListContainer: { 
    backgroundColor: '#fff',
  },
  menuCategory: {
    marginBottom: 20,
  },
  categoryContainer: {
    backgroundColor: '#f0f0f0',
  
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItemText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc', // Adjust the color of the line
    marginVertical: 5, // Adjust the vertical margin
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
});