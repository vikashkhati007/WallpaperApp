import Library from '@/components/Home/library';
import Liked from '@/components/Home/liked';
import Suggested from '@/components/Home/suggested';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function index(){
    return (
    <Tab.Navigator>
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    )
}

