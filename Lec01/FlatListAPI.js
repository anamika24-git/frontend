import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

export default function API3() {
    const[data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

useEffect(() => {
    getAPIData();
},[])
return (
    <View>
        <Text>FlatList API DATA</Text>
    {
    data.length ? 
    <FlatList
    data={data}
    renderItem={({ item }) => <View style={{fontSize:24, borderBottomColor:'orange', borderBottomWidth:2, padding:10}}>
        <Text style={{fontSize:20, backgroundColor: '#ccc'}}>{item.id}</Text>
        <Text style={{fontSize:15}}>Title: {item.title}</Text>
        <Text style={{fontSize:15}}>Body: {item.body}</Text>
        </View>
        }
     /> : null }
</View>
)
}