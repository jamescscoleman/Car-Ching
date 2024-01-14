import React,{useState} from 'react';
//
import {
  Image, 
  Text, 
  View,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

const harshBraking = 91;  
const phoneUse = 91;  
const speeding = 91;  
const cornering = 81;  
const trafficViolation = 81;  
const rapidAcceleration = 51;  


// not used 
const driveScoreFactors= [
    {factorText : 'Harsh Braking', factorValue : {harshBraking} },
    {factorText : 'Phone Use', factorValue : {phoneUse} },
    {factorText : 'Speeding', factorValue : {speeding} },
    {factorText : 'Cornering', factorValue : {cornering} },
    {factorText : 'Traffic Violations', factorValue : {trafficViolation} },
    {factorText : 'Rapid Acceleration', factorValue : {rapidAcceleration} },
]
//

function UserButton({text,driveScoreValue}){
        
  var driveScoreColor = "green"
  
  if (driveScoreValue >= 90){
    driveScoreColor = "green"    
  } else if (driveScoreValue >= 80){
    driveScoreColor = "gold"
  } else if (driveScoreValue >= 70){
    driveScoreColor = "orange"    
  } else {
    driveScoreColor = "red"
  }
  return(
    <Button alignSelf="stretch" title={text} color={driveScoreColor}/>
  )

}

function DriverScore({score}){
    const [val, setValue] = useState(0);
    return(
        <CircularProgress
        radius={110}
        value={score}
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
    top: - 280,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'thistle',
  },
  changeText: {
    top: - 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'thistle',
  },
  defText: {
    top: - 281,
    fontSize: 15,
  },
  scoreText: {
    top: 5,
    fontSize: 20,
    color: 'green',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    borderLeftWidth: 0,
    borderRightWidth: 0,

},  
  scoreText2: {
    top: 5,
    fontSize: 20,
    color: 'gold',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    borderLeftWidth: 0,
    borderRightWidth: 0,

},  
  scoreText3: {
    top: 5,
    fontSize: 20,
    color: 'red',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },  
  button: {
    color: 'black'
  },
  driveScore: {
    color: 'red'
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
      <DriverScore score="82"/>
 

      <Text style ={styles.boldText}>   Welcome back Ali!   </Text>
      <Text style ={styles.defText}>Your Drive Score</Text>

      <Text style ={styles.changeText}>     7 day Change      </Text>

      <Text>Drive Score Factors</Text> 


      <Text style ={styles.scoreText}>Excellent !</Text>
      <UserButton text = '  Harsh Braking   ' driveScoreValue = {harshBraking}  ></UserButton>
      <UserButton text = '        Phone Use       ' driveScoreValue = {phoneUse} ></UserButton>
      <UserButton text = '         Speeding         ' driveScoreValue = {speeding} ></UserButton>

      <Text style ={styles.scoreText2}>Getting there</Text>
      <UserButton text = '         Cornering         ' driveScoreValue = {cornering} ></UserButton>
      <UserButton text = 'Traffic Violations' driveScoreValue = {trafficViolation} ></UserButton>

      <Text style ={styles.scoreText3}>Could be better</Text>
      <UserButton text = 'Rapid Acceleration' driveScoreValue = {rapidAcceleration} ></UserButton>

    </View>

  );
};
export default Test;

//<UserButton text = '     Harsh Braking' driveScoreValue = {harshBraking}  ></UserButton>
//<UserButton text = '     Phone Use    ' driveScoreValue = {phoneUse} ></UserButton>
//<UserButton text = '     Speeding     ' driveScoreValue = {speeding} ></UserButton>
//<UserButton text = '    Cornering     ' driveScoreValue = {cornering} ></UserButton>
//<UserButton text = 'Traffic Violations' driveScoreValue = {trafficViolation} ></UserButton>
//<UserButton text = 'Rapid Acceleration' driveScoreValue = {rapidAcceleration} ></UserButton>