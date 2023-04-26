import { useRef, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import { RootStackParamList, SwipeView } from '../types/types';

import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    swiperDataViews: SwipeView[];
    endScreen: string;
}

function BasicSwiper(props: Props) {


    const swiperRef = useRef<Swiper>(null);
    const [indexSwiper, setIndexSwiper] = useState(0);

    const handleChangeIndex = () => {

        if (swiperRef.current) {

            if (indexSwiper == props.swiperDataViews.length - 1) {
                props.navigation.replace('HomeScreen');
            }
            setIndexSwiper(indexSwiper + 1)
            swiperRef.current.scrollTo(indexSwiper + 1, true);
        }
    };

    return (<Swiper ref={swiperRef}

        showsButtons={false}
        scrollEnabled={false}
        loop={false}
    >
        {/*    No se puede usar Flatlist porque el paquete de swiper no es compatible */}
        {props.swiperDataViews.map((view, index) => {

            return (
                <View key={index} style={styles.slide} >
                    <Image source={view.image} style={styles.image} />

                    <View style={styles.textView}>
                        <Text style={styles.title}>{view.title}</Text>
                        <Text style={styles.description}>{view.description}</Text>
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={async () => {
                                try {
                                    if (await view.permission()) {
                                        handleChangeIndex()
                                    };
                                } catch (e) {
                                    console.log(e)
                                }

                            }}
                            style={styles.buttonTouchable}
                            activeOpacity={0.8}
                        >
                            <LinearGradient
                                colors={['#FF9A8B', '#FF6A88', '#FF99AC']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.buttonGradient}
                            >
                                <Text style={styles.textButton}>{view.primaryButtonText}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <Pressable style={styles.cancelButton} onPress={() => handleChangeIndex()}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View>
            )
        }
        )
        }
    </Swiper>)

}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: { width: 250, height: 200 },
    textView: {
        marginTop: "10%",
        height: "10%",
        width: "80%",
        alignItems: "center"
    },
    title: {
        paddingBottom: 15,
        fontSize: 18
    },
    description: {

        fontSize: 18,
        textAlign: "center"
    },
    buttonView: {
        height: "10%",
        justifyContent: "flex-end"
    },
    buttonTouchable: {
        borderRadius: 20,
        overflow: 'hidden'
    },
    buttonGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 5,
        paddingBottom: 5
    },
    textButton: {
        color: 'white',
        fontSize: 20
    },
    cancelButton: {
        marginTop: 20
    },
    cancelButtonText: {
        color: "gray",
        fontSize: 15
    }


})

export default BasicSwiper;