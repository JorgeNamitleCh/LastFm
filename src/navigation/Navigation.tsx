import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screen/HomeScreen';
import { DetailScreen } from '../screen/DetailScreen';
import { ProfileScreen } from '../screen/ProfileScreen';



const Stack = createStackNavigator();


export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}