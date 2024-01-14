import React,{useState} from 'react';
import {
    Text,
    View,
    Button,
    Image
  } from "react-native";

  import CircularProgress from 'react-native-circular-progress-indicator';

  function LeaderBoardPerson({rank,name,score}) {
    return( 
        <View
          style={{
            flex: 0,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <Text> {rank} </Text>  
          <Image
            source={require("./assets/car-ching-logo.png")}
            style={{ width: 60, height: 60, borderRadius: 18, marginLeft: 15 }}
          />
          <Text>    {name}                                            {score}           </Text>
        </View>

    )
  };

  function TextRow({text}) {
    return( 
        <View
          style={{
            flex: 0,
            flexWrap: 'wrap',
            flexDirection: 'row',

          }}>
          <Image
            source={require("./assets/car-ching-logo.png")}
            style={{ width: 60, height: 60, borderRadius: 18, marginLeft: 15 }}
          />
          <Text>{text}</Text>
        </View>

    )
  };

  function ButtonRow() {
    return( 
        <View
          style={{
            flex: 0,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
        <Button alignSelf="stretch" title="7 Days">7</Button>
        <Button alignSelf="stretch" title="30 Days">30</Button>
        <Button alignSelf="stretch" title="All-Time">All-time</Button>

        </View>

    )
  };



  function DriverScore({score}){
    const [val, setValue] = useState(0);
    return(
        <View
        style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 

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
        
        </View>


    )
  }


  const Test = () => {
    const [value, setValue] = useState(0);
    return (
      <View
        style={{
          flex: 1
        }}>

<Text>                                                Family Average                                                                                                       </Text>   
        <ButtonRow/>
      <DriverScore score="91"/>

        <LeaderBoardPerson rank="1" name="Jane" score="94"/>
        <LeaderBoardPerson rank="2" name="Chad" score="93"/>
        <LeaderBoardPerson rank="3" name="Don" score="86"/>
        <LeaderBoardPerson rank="4" name="Cara" score="82"/>
        <LeaderBoardPerson rank="5" name="Tom" score="79"/>

        <TextRow text="Add to your family"/>
      </View>

    );
  };
  export default Test;