import { Text, Image, View, StyleSheet } from "react-native";





function NoDataPage() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../assets/img/no_results.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No results</Text>

                <Text>Sorry,there are no results for this search.Please try another phrase.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerImage: {
        alignItems: "center",
        padding: 55
    },
    textContainer: {
        justifyContent:"center",
        alignItems:"center",
        width:"70%",
        alignSelf:"center"
    },
    title:{
        fontSize:25,
        marginBottom:10
    }
})
export default NoDataPage;