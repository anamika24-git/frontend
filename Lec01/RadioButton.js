import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
export default RadioButton = () => {
    const[radio, setRadio] = useState(1);
    return( 
        <View style={styles.main}>
            <TouchableOpacity onPress = {() => setRadio(1)}>
                <View style = {styles.radiowrapper}>
                    <View style={styles.radio}>
                        {
                            radio === 1 ? <View style={styles.radioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => setRadio(2)}>
                <View style = {styles.radiowrapper}>
                    <View style={styles.radio}>
                        {
                            radio === 2 ? <View style={styles.radioBg}></View> : null
                        }
                        </View>
                    <Text style={styles.radioText}>Radio2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        main: {
            flex : 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        radioText: {
            fontSize:30,
        },
        radio: {
            height:40,
            width:40,
            borderColor:'black',
            borderWidth: 2,
            borderRadius: 29,
            margin: 10,
        },
        radiowrapper: {
            flexDirection:'row',
            alignItems:'center',
        },
        radioBg: { 
            backgroundColor: 'lightblue',
            height:28,
            width:28,
            borderRadius: 20,
            margin: 4
        }
    }
)