import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'

const Flatlist = () =>  {
    const users = [
        {
            id : 1,
            name : "Anamika"
        },
        {
            id : 2,
            name : "Anil"
        },
        {
            id : 3,
            name : "Sam"
        },
        {
            id : 4,
            name : "Shreyash"
        }
    ]
    return (
    <View style={styles.container}>
        <Text style={{fontSize:26 , backgroundColor:'#ccc', textAlign:'center'}}>List data using FlatList</Text>
    
    <FlatList
        data={users}
        renderItem={({item})=><Text style={{fontSize:20 ,marginTop:10, backgroundColor:'lightblue'}}>{item.name}</Text>}
        keyExtractor={item => item.id}/>
    </View>
    );

}
const styles = StyleSheet.create(
    {
        container:  {
            margin:50,
            padding:20,
            color: '#ccc',
        }
    }
)
export default Flatlist;
