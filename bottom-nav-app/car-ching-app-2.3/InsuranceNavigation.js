import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({navigation}) {
    const fields = ["First Name","Last Name" ,"Sex","Birthday" ,"Street Address" ,"Zip Code"];
    const step = 1    
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/3</Text>
          <Text style={styles.subtitle}>Driver Information</Text>
          {textInputs}    
          <Button title="Step 2" onPress={() => navigation.navigate('Details 2')}/>
        </SafeAreaView>
      </View>
    );
  }

function DetailsScreen2({navigation}) {
    const fields = ["Gender" ,"Marital Status","Email" ,"Age First Licensed" ,"SR-22 Certificate? (Y/N)","License Status (active,expired)" ]
    const step = 2    
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/3</Text>
          <Text style={styles.subtitle}>Driver Information</Text>
          {textInputs}    
          <Button title="Step 3" onPress={() => navigation.navigate('Details 3')}/>
        </SafeAreaView>
      </View>
    );
  }

  function DetailsScreen3({navigation}) {
    const fields = ["Credit Score","Occupation","Education Level","Military Status","License Plate #", "VIN"]
    const step = 3    
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/3</Text>
          <Text style={styles.subtitle}>Driver Information</Text>
          {textInputs}    
          <Button title="Step 4" onPress={() => navigation.navigate('Details 4')}/>
        </SafeAreaView>
      </View>
    );
  }

  function DriverScreen1({navigation}) {
    const fields = ["Vehicle Make","Vehicle Model", "Vehicle Year", "Vehicle Trim", "Current Odometer", "Estimated Mileage/Year"]
    const step = 1    
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/2</Text>
          <Text style={styles.subtitle}>Vehicle Information</Text>
          {textInputs}    
          <Button title="Next" onPress={() => navigation.navigate('Vehicle 2')}/>
        </SafeAreaView>
      </View>
    );
  }

  function DriverScreen2({navigation}) {
    const fields = ["Gender" ,"Marital Status","Vehicle Ownership","Vehicle Usage", "Average Miles per Year", "Garaging"]
    const step = 2
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/2</Text>
          <Text style={styles.subtitle}>Vehicle Information</Text>
          {textInputs}    
          <Button title="Finish" onPress={() => navigation.navigate('Details')}/>
        </SafeAreaView>
      </View>
    );
  }

  function DetailsScreen4({navigation}) {
    const fields = ["Accidents & tickets Last 3 years" ,"Residential Status (Own/Rent)" , "Currently Insured", "Current Policy Expiration"];
    const step = 1    
    const textInputs = fields.map((field) => (
        <TextInput key={field} style={styles.input} value={field} placeholder={field}/>          
      ));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
          </View>
          <Text style={styles.title}>Step {step}/3</Text>
          <Text style={styles.subtitle}>Driver Information</Text>
          {textInputs}    
          <Button title="Add Vehicle" onPress={() => navigation.navigate('Vehicle 1')}/>
        </SafeAreaView>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function InsuranceNavigation() {
return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details 2" component={DetailsScreen2} />
        <Stack.Screen name="Details 3" component={DetailsScreen3} />
        <Stack.Screen name="Details 4" component={DetailsScreen4} />
        <Stack.Screen name="Vehicle 1" component={DriverScreen1} />
        <Stack.Screen name="Vehicle 2" component={DriverScreen2} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

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
    

export default InsuranceNavigation;