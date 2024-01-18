import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faChevronLeft, faHome, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';

function DriverInformationScreen({names,step}){
    const textInputs = names.map((name) => (
        <TextInput key={name} style={styles.input} placeholder={name}/>          
      ));
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/3</Text>
          <Text style={styles.subtitle}>Driver Information</Text>
          {textInputs}    
    
    <Button title="Continue" onPress={() => {}} color="#27ae60" />
    
    {/* Navigation bar */}
    
    </SafeAreaView>
    );
};


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
stepIndicatorContainer: {
flexDirection: 'row',
alignItems: 'center',
},
stepIndicator: {
width: 20,
height: 2,
backgroundColor: '#ddd',
marginHorizontal: 2,
},
stepIndicatorActive: {
width: 20,
height: 2,
backgroundColor: '#27ae60',
marginHorizontal: 2,
},
title: {
fontSize: 18,
fontWeight: 'bold',
color: '#2c3e50',
paddingHorizontal: 16,
marginTop: 8,
},
subtitle: {
fontSize: 28,
fontWeight: 'bold',
color: '#2c3e50',
paddingHorizontal: 16,
marginBottom: 32,
},
input: {
height: 50,
backgroundColor: '#ecf0f1',
borderRadius: 10,
padding: 10,
marginHorizontal: 16,
marginBottom: 16,
},
buttonContainer: {
paddingHorizontal: 16,
marginBottom: 32,
},
navigationBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#ddd',
paddingVertical: 10,
},
});

export default DriverInformationScreen;