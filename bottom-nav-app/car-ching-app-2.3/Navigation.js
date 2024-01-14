import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed'
//import Settings from './screens/tabScreens/Settings'
//import Notifications from './screens/tabScreens/Notifications'
import Test from './Test'
import Test2 from './Test2'
// 
const Tab = createBottomTabNavigator();

function TabGroup() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Family (Move to middle)" component={Feed} />
            <Tab.Screen name="Dashboard" component={Test} />
            <Tab.Screen name="Insurance" component={Test2} />

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