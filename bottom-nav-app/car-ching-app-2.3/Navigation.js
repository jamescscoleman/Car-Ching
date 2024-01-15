import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed'
//import Settings from './screens/tabScreens/Settings'
//import Notifications from './screens/tabScreens/Notifications'
import Test from './Test'
import Test2 from './Test2'
import Board from './board'
import NavigationInformationScreen from './DriverInformationScreen'
import NavigationInformationScreen2 from './DriverInformationScreen2'
import NavigationInformationScreen3 from './DriverInformationScreen3'
// 
const Tab = createBottomTabNavigator();

function TabGroup() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Family (Move to middle)" component={Feed} />
            <Tab.Screen name="Dashboard" component={Test} />
            <Tab.Screen name="Insurance" component={Test2} />
            <Tab.Screen name="Leaderboard" component={Board} />
            <Tab.Screen name="Insurance 1" component={NavigationInformationScreen} />
            <Tab.Screen name="Insurance 2" component={NavigationInformationScreen2} />
            <Tab.Screen name="Insurance 3" component={NavigationInformationScreen3} />

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