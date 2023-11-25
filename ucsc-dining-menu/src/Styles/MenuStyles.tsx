import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000', // Set background color to black for the entire app
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD700',
    padding: 10,
  }, 
  BCcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center', 
    backgroundColor: '#3d3d3d',
    borderRadius: 5,  
  },
  crumbContainer: {
    marginRight: 10,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5, 
  },
  selectedCrumbContainer: {
    backgroundColor: '#2e2d2d', 
    color: 'white'
  },
  crumb: {
    color: 'white',
    fontSize: 15,
  },
  menuListContainer: {  
  },
  menuCategory: {
    marginBottom: 20,
  },
  categoryContainer: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center', 
    alignItems: 'center',
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