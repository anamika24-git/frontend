import React from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

const Form = () => {
    const[uname, setUname] = React.useState('');
    const[pwd,setPwd] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[display, setDisplay] = React.useState(false);
    const clear = () => {
            setDisplay(false);
            setUname('');
            setPwd('');
            setEmail('');
    }
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30, margin:40, color:'#ccc'}}>Simple Form in React Native
            </Text>
            <TextInput value = {uname} style={styles.textBox} placeholder="Enter User Name"
            onChangeText={(text) => {setUname(text)}}></TextInput>
            <TextInput value = {pwd} style={styles.textBox} placeholder="password"
            secureTextEntry={true} onChangeText={(text) => {setPwd(text)}}></TextInput>
            <TextInput value = {email}  style={styles.textBox} placeholder="Enter User Email"
            onChangeText={(text) => {setEmail(text)}}></TextInput>
            <View styles={{flex : 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button color = 'green' title = 'Print Details' onPress = {() => setDisplay(true)}></Button>
                <Button title = 'Clear All' onPress={clear}></Button>    
            </View>
            {
                display ?
                <View>
                    <Text style={{fontSize:20}}>User name is: {uname}</Text>
                    <Text style={{fontSize:20}}>User Password is: {pwd}</Text>
                    <Text style={{fontSize:20}}>User Email is: {email}</Text>
                </View> : null
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    textBox: {
        borderWidth:1,
         borderColor: 'blue',
         padding:10,
         margin:20,
    }

});
export default Form;