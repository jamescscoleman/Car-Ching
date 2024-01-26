//Leaderboard
import React,{useState} from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const ProfileItem = ({name}) => {
    return(
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>
    );
  };
  

function ProfileScreen({navigation}){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <ProfileItem name="Account"/>
          <Text>{"\n"}</Text>
          <ProfileItem name="Settings"/>
          <ProfileItem name="Help"/>
          <ProfileItem name="FAQ"/>
          <Text>{"\n"}</Text>
          <ProfileItem name="Refer"/>
          <ProfileItem name="Add to Family"/>
          <Text>{"\n"}</Text>
          <ProfileItem name="Logout"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
          radius={130}
          value={score}
          textColor='#222'
          fontSize={20}
          valueSuffix={''} // '%' 
          inActiveStrokeColor={'orange'}
          activeStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={3}
          duration={800}
          onAnimationComplete={() => setValue(50)}
          dashedStrokeConfig={{
          count: 100,
          width: 4,
          style: styles.progress,
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

function LeaderBoardScreen({navigation}) {
  const familyData = [
    { name: 'Jane', score: 94, trend: 'up' },
    { name: 'Chris', score: 93, trend: 'down' },
    { name: 'Sinead', score: 86, trend: 'up' },
    { name: 'Emily', score: 82, trend: 'up' },
    { name: 'Tom', score: 70, trend: 'down' },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Image source={require("./assets/car-ching-logo.png")} style={{ width: 60, height: 50, borderRadius: 15, marginLeft: 15 }}/>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
      <FontAwesomeIcon icon={item.trend === 'up' ? faChevronUp : faChevronDown} size={16} color={item.trend === 'up' ? 'green' : 'red'}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome.Button name="bars" backgroundColor="green" textColor="black" onPress={() => navigation.navigate('User Profile')}>
        Profile
        </FontAwesome.Button>
        <Text style={styles.headerTitle}>Your Family Score</Text>
      </View>
      <Text> {"\n"} </Text>
      <Text> {"\n"} </Text>  
      <Text> {"\n"} </Text>
      <View style={styles.scoreboard}>
        <Text style={styles.familyAverage}>Family Average</Text>
        <DriverScore score="91"/>
      </View>
      <Text> {"\n"} </Text> 
      <Text> {"\n"} </Text>
      <Text> {"\n"} </Text>
      <FlatList data={familyData} renderItem={renderItem} keyExtractor={(item) => item.name}/>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  familyAverage: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  averageScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'green', // Dynamic based on score
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rank: {
    fontSize: 24,
    width: 30, // Ensure that the rank has enough space
    textAlign: 'right',
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  progress: {
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneButton: {
    fontSize: 16,
    color: 'green',
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 32,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1, // Creates a single line separator effect
    borderRadius: 20,
  },
  itemText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    padding: 16,
  },
  // ... Add other styles as needed
});

const Stack = createNativeStackNavigator();
function FamilyScreen() {
return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Leaderboard">
        <Stack.Screen name="Leaderboard" component={LeaderBoardScreen} />
        <Stack.Screen name="User Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default FamilyScreen;