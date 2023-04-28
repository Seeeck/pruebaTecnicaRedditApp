
import { TouchableWithoutFeedback } from "react-native";
import { DataPostCard } from "../types/types";
import { View, Image, StyleSheet, Text } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

interface PostCardProps {
    data: DataPostCard;
}

function PostCard({ data }: PostCardProps) {
    return (

        <TouchableWithoutFeedback onPress={() => { }}>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image style={styles.imagePostCard} source={{
                        uri: data.imgUrl,
                    }} resizeMode="contain" />
                </View>

                <View style={styles.infoPostCard}>
                    <View style={styles.header1}>
                        <View style={styles.score}>
                            <Icon name="angle-up" size={40} color="#BABABA" />
                            <Text style={styles.scoreText}>{data.score}</Text>
                            <Icon name="angle-down" size={40} color="#BABABA" />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{data.title}</Text>
                        </View>
                    </View>
                    <View style={styles.commentsContainer}>
                        <Icon style={styles.commentsIcon} name="comments" size={40} color="#E0E0E0" />
                        <Text style={styles.commentsCount}>{data.numComments}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginLeft:3,
        marginRight:3,
        marginVertical: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    imagePostCard: {
        height: "100%",
        width: "100%",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    containerImage: {
        height: 250
    },
    infoPostCard: {
        flex: 1,
        flexDirection: "column",
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    },
    header1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",

    },
    score: {
        alignItems: "center"
    },
    scoreText: {
        fontSize: 17,
        fontWeight: "900",
        color: "#C8C8C8"
    },
    title: {
        marginLeft: 15,
        flex: 1,

    },
    titleText: {
        fontSize: 30,
        fontWeight: "500",
        color: "#505050"
    },
    commentsContainer: {
        marginTop: 2,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"

    },
    commentsIcon: {
        marginLeft: 40
    },
    commentsCount: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "900",
        color: "#C8C8C8"
    }


});


export default PostCard;