import { TouchableHighlight, View, Text,StyleSheet } from "react-native";
export default ButtonStyling = () => {
    return(
        <View style={{flex:1}}>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.error]}>Error</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        color: '#fff',
        margin:50,
        padding:10,
        backgroundColor:'#bbb',
        borderRadius: 10,
        textAlign: 'center',
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 1,
    },
    success: {
        backgroundColor: 'green',
    },
    primary: {
        backgroundColor: 'blue',
    },
    warning: {
        backgroundColor: 'gold',
    },
    error: {
        backgroundColor: 'red',
    }
})