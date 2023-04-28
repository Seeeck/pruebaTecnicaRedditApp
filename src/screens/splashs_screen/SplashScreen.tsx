


import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Image, ActivityIndicator, SafeAreaView } from "react-native"
import { StatusBar } from "react-native";
import { ScreensProps } from "../../types/types";

function SplashScreen({ navigation }: ScreensProps) {

    StatusBar.setHidden(true, 'none');

    useEffect(() => {

        setTimeout(() => {
            navigation.replace("PermissionsScreen");
        }, 3000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require("../../../assets/img/splash_background.jpg")} resizeMode="cover" style={styles.image}>
                <Image
                    source={require("../../../assets/img/reddit_logo.png")}
                    style={styles.logoImage}
                />
                <ActivityIndicator color={"gray"} />
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    logoImage: {
        justifyContent: "center",
        width: 250,
        height: 200,
        resizeMode: 'contain',
    },
})

export default SplashScreen;