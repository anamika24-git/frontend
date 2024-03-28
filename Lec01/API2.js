import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Button, Modal } from 'react-native';

export default function API2() {
    const[data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getAPIData();
    },[]);

    return (
        <ScrollView>
            <Text style={{fontSize:30}}>List with API Call</Text>
            {data.length ?
            data.map((item) => 
            <View style={{padding:10, borderBottomColor:"#ccc", borderBottomWidth:2}}>
                <Text style={{fontSize:20 ,backgroundColor:"#ddd"}}>{item.name}</Text>
                <Text>{item.age}</Text>
                <Text>{item.email}</Text>
                <Button title = "update"></Button>
                {/* <Text>Body: {item.body}</Text> */}
            </View>) : null
            }
            <Modal>
                
            </Modal>
        </ScrollView>
    )

}
