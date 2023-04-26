import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native/types";

export type RootStackParamList = {
    SplashScreen: undefined;
    PermissionsScreen: undefined;
    HomeScreen:undefined;
}

export type SwipeView = {
    image: ImageSourcePropType;
    title: string;
    description: string;
    primaryButtonText: string;
    permission:() => Promise<boolean>;
}

export type ScreensProps = NativeStackScreenProps<RootStackParamList>;

