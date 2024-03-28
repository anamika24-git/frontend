import React,{ useEffect, useState } from "react";
import { Text, View } from 'react-native';

 const API = () => {

    const[data, setData] = useState(undefined);

    const getAPIData = async ()=> {
        //api call
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    },[])
return (
    <View>
        <Text style={{fontSize: 30}}>API Call</Text>
        {
            data ? <View>
                <Text style={{fontSize: 30}}>ID: {data.id}</Text>
                <Text style={{fontSize: 30}}>UserID: {data.userId}</Text>
                <Text style={{fontSize: 30}}>Title: {data.title}</Text>
                <Text style={{fontSize: 30}}>Body: {data.body}</Text>
                </View> : null
        }
    </View>
);
}
export default API;