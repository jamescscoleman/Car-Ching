import React,{useState} from 'react';
//
import {
  Image, 
  Text, 
  View,
  StyleSheet,
  Button
} from 'react-native';

//npm install react-native-reanimated 


//npm install react-native-circular-progress-indicator

/*
import { Svg, Path } from 'react-native-svg';
import {arc} from "d3-shape"; // npm i --save-dev @types/d3-shape
import { scaleLinear } from "d3-scale"; // npm i --save-dev @types/d3-scale
*/ 

//import { CircularProgressbar} from 'react-circular-progressbar';

//import { StatusBar } from 'expo-status-bar'; // npm install expo-status-bar
//import React, { useState } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

function UserButton({text}){
  return(
    <Button alignSelf="stretch" title={text} color="green"/>
  )

}



// npm i react-circular-progressbar --save
//variables
const styles = StyleSheet.create({
  logo: {
    width: 85,
    height: 85,
    top: -175,
    right: -150
  },
  boldText: {
    top: - 300,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  defText: {
    top: - 290,
    fontSize: 20,
  },
  scoreText: {
    top: - 120,
    fontSize: 20,
    color: 'green'
  },  
  button: {
    color: 'black'
  }
});

// bottom nav bar 
const homeName = "Home";
const Tab = createBottomTabNavigator();


//component
const App = () => {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image 
        style={styles.logo} 
        source={require('./img/car-ching-logo.png')} 
        />

      <CircularProgress
        radius={80}
        value={91}
        textColor='#222'
        fontSize={20}
        valueSuffix={''} // '%' 
        inActiveStrokeColor={'orange'}
        activeStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={3}
        duration={1000}
        onAnimationComplete={() => setValue(50)}
        dashedStrokeConfig={{
          count: 100,
          width: 4,
        }}
        strokeColorConfig={[
          { color: 'red', value: 0 },
          { color: 'orange', value: 60 },
          { color: 'yellow', value: 80 },
          { color: 'green', value: 90 },          
        ]}
      />      

      <Text style ={styles.boldText}>Welcome back Ali!</Text>
      <Text style ={styles.defText}>Your Drive Score</Text>

      <UserButton  text = 'You' ></UserButton>
      <UserButton text = 'Family' ></UserButton>

      <Text style ={styles.scoreText}>Excellent</Text>
    </View>
  );
};
export default App;