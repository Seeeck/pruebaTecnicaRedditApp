
import { SafeAreaView, StyleSheet, View, Image, Pressable, TouchableWithoutFeedback, Keyboard, ActivityIndicator, RefreshControl, Text } from "react-native";
import InputText from "../../components/InputText";
import { ScreensProps } from "../../types/types";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "../../components/PostCard";
import getMemes from "../../services/getMemes";
import getSearchMemes from "../../services/getSearchMemes";
import { useEffect, useState } from "react";
import { DataResponse } from "../../types/types";
import { ChildData } from "../../models/memeResponse";
import NoDataPage from "../../components/noDataPage";
function HomeScreen({ navigation }: ScreensProps) {
    //Pude haber usado redux pero no quize xd, la app es basica
    const [dataMemes, setDataMemes] = useState<ChildData[]>([]);
    const [nextPage, setNextPage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        loadMemes();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim().length > 0) {
                setNextPage('')
                onSearchMemes()
            }
            if (query.trim().length == 0) {
                loadMemes()
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [query])

    async function loadMemes() {
        try {
            setIsLoading(true);
            let data: DataResponse;
            if (query.trim().length > 0) {
                data = await getSearchMemes({ q: query });
            } else {
                data = await getMemes({});
            }
            setIsLoading(false)
            setNextPage(data.nextPage)
            setDataMemes(data.childrenSerialised);
        } catch (e) {
            setIsLoading(false);

        }
    }

    async function loadMoreMemes() {
        try {
            setIsLoading(true);
            let data: DataResponse;
            if (query.trim().length > 0) {

                data = await getSearchMemes({ nextPage: nextPage, q: query });
            } else {
                data = await getMemes({ nextPage: nextPage });
            }
            setIsLoading(false)
            setNextPage(data.nextPage)
            setDataMemes([...dataMemes, ...data.childrenSerialised]);
        } catch (e) {
            setIsLoading(false);

        }
    }

    async function onSearchMemes() {
        try {
            setIsLoading(true);
            const data: DataResponse = await getSearchMemes({ q: query });
            setIsLoading(false)
            setNextPage(data.nextPage)
            setDataMemes(data.childrenSerialised);
        } catch (e) {
            setIsLoading(false);

        }
    }

    const handleRefresh = () => {
        setRefreshing(true);
        loadMemes()
        setRefreshing(false);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard} >
            <SafeAreaView style={styles.container}>

                <View style={styles.config}>
                    <Pressable onPress={() => navigation.replace('PermissionsScreen')}>
                        <Image style={styles.configImage} resizeMode="contain" source={require("../../../assets/img/config_icon.png")} />
                    </Pressable>
                </View>

                <View style={styles.formSearch}>
                    <InputText value={query} setValue={setQuery} />
                </View>

                <View style={styles.bodyMemes}>
                    {isLoading && <ActivityIndicator color="#F59191" size={35} style={styles.loadingIndicator} />}

                    {dataMemes.length == 0 ?
                        <NoDataPage />
                        :
                        <FlatList
                            data={dataMemes}
                            renderItem={(data) =>
                                <PostCard key={data.index} data={data.item} />
                            }
                            onEndReached={() => loadMoreMemes()}
                            onEndReachedThreshold={0.1}
                            refreshControl={
                                <RefreshControl colors={["#F59191"]} refreshing={refreshing} onRefresh={handleRefresh} />
                            }
                            onScroll={() => dismissKeyboard()}
                        />}

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 10,

    },
    config: {
        marginBottom: 8
    },
    configImage: {
        width: 40
    },
    formSearch: {

    },
    bodyMemes: {
        flex: 1,
        marginTop: 15
    },
    loadingIndicator: {
        position: 'absolute',
        bottom: "10%",
        right: "50%",
        left: "50%",
        zIndex: 1,
    }

})

export default HomeScreen;