

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen ,PermissionsScreen,HomeScreen} from '../screens/Screens';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Navigator;