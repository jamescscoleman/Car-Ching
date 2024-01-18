import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './screens/tabScreens/Feed'
//import Settings from './screens/tabScreens/Settings'
//import Notifications from './screens/tabScreens/Notifications'
import Test from './Test'
import Board from './board'
import NavigationInformationScreen from './DriverInformationScreen'
import ProfileScreen1 from './ps1'
import ProfileScreen2 from './ps2'
// 
const Tab = createBottomTabNavigator();

function TabGroup() {
    const names1 = ["First Name","Last Name" ,"Sex","Birthday" ,"Street Address" ,"Zip Code" ,"Gender" ,"Marital Status"];
    const names2 = ["Email" ,"Age First Licensed" ,"SR-22 Certificate? (Y/N)","License Status (active,expired)" ,"Credit Score","Occupation","Education Level","Military Status"]
    const names3 = ["Accidents & tickets Last 3 years" ,"Residential Status (Own/Rent)" , "Currently Insured", "Current Policy Expiration", "AAA member (Y/N)" , "Last Insurance Company" , "Years insured by last insurance" ]

    const Screen1 = () => NavigationInformationScreen({names: names1 , step: "1"});
    const Screen2 = () => NavigationInformationScreen({names: names2 , step: "2"});
    const Screen3 = () => NavigationInformationScreen({names: names3 , step: "3"});

    return(
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Test} />
            <Tab.Screen name="Leaderboard" component={Board} />
            <Tab.Screen name="User Profile" component={ProfileScreen2} />
            <Tab.Screen name="Insurance 1"  component= {Screen1} />
            <Tab.Screen name="Insurance 2" component={Screen2} />
            <Tab.Screen name="Insurance 3" component={Screen3} />

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