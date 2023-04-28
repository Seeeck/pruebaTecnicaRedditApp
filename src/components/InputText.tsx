import { Dispatch, SetStateAction } from "react";
import { TextInput, View, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


interface InputSearchData {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

function InputText({  value, setValue }: InputSearchData) {
    return (
        <View style={styles.inputText}>
            <Icon name="search" size={20} color="#DADADA" style={styles.inputIcon} />
            <TextInput style={styles.input} value={value} onChangeText={text => setValue(text)} />
        </View>

    )
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: '#F3F2F2',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        padding: 5
    },
    input: {
        flex: 1
    }
})


export default InputText;