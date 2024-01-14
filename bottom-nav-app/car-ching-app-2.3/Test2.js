import React,{useState} from 'react';
//
import {
  Image, 
  Text, 
  View,
  StyleSheet,
  Button
} from 'react-native';

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


//component
const Test = () => {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>


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

      <Text style ={styles.boldText}>Coleman Family</Text>
      <Text style ={styles.defText}>Your Drive Score</Text>

    <Text>Drive Score Factors</Text> 
      <UserButton  text = 'Harsh Braking' ></UserButton>
      <UserButton text = 'Phone Use' ></UserButton>
      <UserButton  text = 'Speeding' ></UserButton>
      <UserButton text = 'Cornering' ></UserButton>
      <UserButton  text = 'Traffic Violations' ></UserButton>
      <UserButton text = 'Rapid Acceleration' ></UserButton>


      <Text style ={styles.scoreText}>Excellent</Text>
    </View>
  );
};
export default Test;