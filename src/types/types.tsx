import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native/types";
import { ChildData } from "../models/memeResponse";

export type RootStackParamList = {
    SplashScreen: undefined;
    PermissionsScreen: undefined;
    HomeScreen: undefined;
}

export type SwipeView = {
    image: ImageSourcePropType;
    title: string;
    description: string;
    primaryButtonText: string;
    permission: () => Promise<boolean>;
}

export type DataPostCard = {
    title: string;
    imgUrl: string;
    score: number;
    numComments: number;
}

export type DataResponse = {
    nextPage: string;
    childrenSerialised: ChildData[]
}

export type ScreensProps = NativeStackScreenProps<RootStackParamList>;

