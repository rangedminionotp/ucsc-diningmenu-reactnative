import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import styles from '../../../Styles/CalendarStyles';
function Calendar(){
    const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Overlay</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View>
          <View>
            <Text>This is your overlay content.</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close Overlay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Calendar;