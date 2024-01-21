import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Your main screen content here /}
      {/ ... /}

      {/ The Harsh Braking button that triggers the modal /}
      <TouchableOpacity
        style={styles.factorButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.factorButtonText}>Harsh Braking</Text>
        {/ ... Other elements in your factor button /}
      </TouchableOpacity>

      {/ Modal for Harsh Braking details /}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalCenteredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>Harsh Braking</Text>
              <Text style={styles.modalContent}>
                Braking that is far harder than typically needed.
              </Text>
              {/ You can add more content here /}
            </ScrollView>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/ Your navigation bar here /}
      {/ ... */}
    </SafeAreaView>
  );
};
//break
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  factorButton: {
    // Style for your factor buttons
    padding: 10,
    margin: 10,
    backgroundColor: '#ecf0f1',
    // Add other styling as needed
  },
  factorButtonText: {
    // Style for the text inside your factor button
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#27ae60',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Add other styles as needed
});

export default HomeScreen;