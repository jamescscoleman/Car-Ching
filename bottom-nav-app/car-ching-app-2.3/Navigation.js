import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DriverInformationScreen from './DriverInformationScreen';
import HomeScreen from './HomeScreen'
import FamilyScreen from './FamilyScreen';
import InsuranceNavigation from './InsuranceNavigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
// 
const Tab = createBottomTabNavigator();

function TabGroup() {
    const names1 = ["First Name","Last Name" ,"Sex","Birthday" ,"Street Address" ,"Zip Code" ,"Gender" ,"Marital Status"];
    const names2 = ["Email" ,"Age First Licensed" ,"SR-22 Certificate? (Y/N)","License Status (active,expired)" ,"Credit Score","Occupation","Education Level","Military Status"]
    const names3 = ["Accidents & tickets Last 3 years" ,"Residential Status (Own/Rent)" , "Currently Insured", "Current Policy Expiration", "AAA member (Y/N)" , "Last Insurance Company" , "Years insured by last insurance" ]

    const Screen1 = () => DriverInformationScreen({names: names1 , step: "1"});
    const Screen2 = () => DriverInformationScreen({names: names2 , step: "2"});
    const Screen3 = () => DriverInformationScreen({names: names3 , step: "3"});

    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'analytics' : 'speedometer';
            } else if (route.name === 'Family') {
              iconName = focused ? 'trophy' : 'people';
            }else if (route.name === 'Insurance') {
                iconName = focused ? 'create' : 'clipboard';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
            <Tab.Screen name="Dashboard" component={HomeScreen}  />
            <Tab.Screen name="Family" component={FamilyScreen} />
            <Tab.Screen name="Insurance"  component= {InsuranceNavigation} />

            {/* 
            <Tab.Screen name="Leaderboard" component={Board} />
            <Tab.Screen name="Insurance 2" component={Screen2} />
            <Tab.Screen name="Insurance 3" component={Screen3} />
            <Tab.Screen name="Dashboard2" component={Test} />
            <Tab.Screen name="Family2" component={AccountScreen} />

            */}
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )

}