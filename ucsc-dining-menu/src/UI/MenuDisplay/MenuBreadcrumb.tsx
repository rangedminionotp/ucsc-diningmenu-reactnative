import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BreadcrumbProps {
  items: string[];
  onItemPress: (index: number) => void;
}

const MenuBreadcrumb: React.FC<BreadcrumbProps> = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onItemPress(index)}>
          <Text style={styles.crumb}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  crumb: {
    marginRight: 5,
    color: 'blue',
  },
});

export default MenuBreadcrumb;