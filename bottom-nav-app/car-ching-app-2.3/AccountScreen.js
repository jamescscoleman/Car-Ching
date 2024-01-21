import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faChevronRight, faUserCircle, faCar, faHome, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const AccountScreen = ({ navigation }) => {
  // Dummy data for drivers and cars
  const drivers = [
    { name: 'Sinead Coleman', id: '1' },
    { name: 'Tom Iqbal', id: '2' },
  ];

  const cars = [
    { model: '2012 Toyota Solara', id: '1' },
    { model: '2023 Toyota Camry', id: '2' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Account</Text>
        <View style={{ width: 20 }} /> 
      </View>
    <View style={styles.section}/>
        <Text style={styles.sectionTitle}>Drivers on your policy</Text>
        <FlatList
          data={drivers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() =>{}}>
              <FontAwesomeIcon icon={faUserCircle} size={24} />
              <Text style={styles.itemText}>{item.name}</Text>
              <FontAwesomeIcon icon={faChevronRight} size={16} />
            </TouchableOpacity>  
          )}
          />

        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Text style={styles.addButtonText}>Add Driver</Text>
        </TouchableOpacity>
        
        <Text>{"\n"}</Text>

        <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cars on your Policy</Text>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <FontAwesomeIcon icon={faCar} size={24} />
              <Text style={styles.itemText}>{item.model}</Text>
              <FontAwesomeIcon icon={faChevronRight} size={16} />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Text style={styles.addButtonText}>Add Vehicle</Text>
        </TouchableOpacity>
      </View>
      <Text>{"\n"}</Text>
      <TouchableOpacity style={styles.coverageButton} onPress={() => {}}>
        <Text style={styles.coverageButtonText}>Coverage</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ...styles for container, header, title, sectionTitle, item, addButton, coverageButton, etc.
});

export default AccountScreen;