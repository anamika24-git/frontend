import React,{useState} from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const Post = () => {
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[email, setEmail] = useState('');
    function addname(name) {
        setName(name);
    }
    function addage(age) {
        setAge(age);
    }
    function addemail(email) {
        setEmail(email);
    }
    const saveAPIData = async () => {
        const data = {
            name: name,
            age: age,
            email: email
        }
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url, {
           method: "POST",
           headers: { "Content-Type": "application/json"} ,
           body: JSON.stringify(data)
        })
        result = result.json();
        setName('');
        setAge('');
        setEmail('');
    }
    return(
        <View style={{marginTop:80}}>
            <TextInput value = {name} onChangeText = {addname} placeholder= "Enter Name"></TextInput>
            <TextInput value = {age} onChangeText = {addage} placeholder= "Enter Age"></TextInput>
            <TextInput value = {email} onChangeText = {addemail} placeholder= "Enter Email"></TextInput>
            <Button title = 'Save Data' onPress={saveAPIData}></Button>
        </View>
    )
}
export default Post;