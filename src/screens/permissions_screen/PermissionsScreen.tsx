



import { StatusBar, Linking } from "react-native";
import BasicSwiper from "../../components/BasicSwiper";
import { RootStackParamList, SwipeView } from "../../types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { request, PERMISSIONS,  requestNotifications } from 'react-native-permissions';
import { ScreensProps } from "../../types/types";


function PermissionsScreen({ navigation }: ScreensProps) {

    StatusBar.setHidden(false, 'none');

    const swiperDataViews: SwipeView[] = [
        {
            image: require("../../../assets/img/camera.png"),
            title: "Camera access",
            description: "Please allow access to your camera to take photos.",
            primaryButtonText: "Allow",
            permission: async () => {
                try {
                    const result = await request(PERMISSIONS.ANDROID.CAMERA);
                    
                    if (result === 'granted') {
                        return true;
                    } else {
                        Linking.openSettings();
                        return false;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
        },
        {
            image: require("../../../assets/img/notifications.png"),
            title: "Enable push notifications",
            description: "Enable push notifications to let send you personal news and updates.",
            primaryButtonText: "Enable",
            permission: async () => {
                try {
                    const result = await requestNotifications(['alert', 'sound',
                        'badge',
                        'carPlay',
                        'criticalAlert',
                        'provisional',
                        'providesAppSettings']).then(({ status, settings }) => status);
                    if (result === 'granted') {
                        console.log('granted');
                        return true;
                    } else {
                        Linking.openSettings();
                        return false;
                    }
                } catch (error) {
                    console.log(error)
                    return false;
                }
            }
        },
        {
            image: require("../../../assets/img/location.png"),
            title: "Enable location services ",
            description: "We wants to access your location only to provide a better experience by.",
            primaryButtonText: "Enable",
            permission: async () => {
                try {
                    const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
                    if (result === 'granted') {
                        return true;
                    } else {
                        Linking.openSettings();
                        return false;
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
        }

    ];

    return (
        <BasicSwiper
            swiperDataViews={swiperDataViews}
            navigation={navigation}
            endScreen={"HomeScreen"}
        />
    );

}



export default PermissionsScreen;