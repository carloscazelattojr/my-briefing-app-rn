import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from '../screens/MainScreen';
import { SkillsScreen } from '../screens/SkillsScreen';
import { AntDesign } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name='main'
                component={MainScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<AntDesign name='user' color='#333' size={size} />),
                    tabBarLabel: () => null,
                    headerShown: false

                }}
            />
            <Screen
                name='skills'
                component={SkillsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<AntDesign name='rocket1' color='#333' size={size} />),
                    tabBarLabel: () => null,
                    headerShown: false

                }}
            />
        </Navigator>
    );

}