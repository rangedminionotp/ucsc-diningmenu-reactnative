import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../Styles/MenuStyles';

interface BreadcrumbProps {
  items: string[];
  onItemPress: (index: number) => void;
}

const MenuBreadcrumb: React.FC<BreadcrumbProps> = ({ items, onItemPress }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    // Toggle selection: If the same breadcrumb is clicked again, unselect it
    setSelectedItemIndex((prev) => (prev === index ? null : index));
    onItemPress(index);
  };

  return (
    <View style={styles.BCcontainer}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.crumbContainer,
            selectedItemIndex === index && styles.selectedCrumbContainer,
          ]}
        >
          <Text style={selectedItemIndex === index ? styles.selectedCrumbContainer : styles.crumb}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuBreadcrumb;