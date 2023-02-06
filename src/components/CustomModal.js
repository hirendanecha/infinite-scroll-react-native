import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomModal = ({modalVisible, onClose}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => onClose()}>
        <View style={styles.centeredView}>
          <LinearGradient
            style={styles.modalView}
            colors={['#00000033', '#000', '#000']}>
            <Text style={styles.modalText}>Unlock The</Text>
            <Text style={styles.modalText}>FullPotential</Text>
            <TouchableOpacity style={styles.button} onPress={() => onClose()}>
              <Text style={styles.textStyle}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.descText}>$ 0.99 / week</Text>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 600,
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    height: 250,
    // backgroundColor: '#000',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default CustomModal;
