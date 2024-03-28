import {Text, View, StyleSheet,FlatList} from 'react-native';
import UserData from './UserData';
export default  Custom = () => {
        const users = [
            {
                id : 1,
                name : "Anamika",
                email: "anamika@test.com",
            },
            {
                id : 2,
                name : "Anil",
                email: "anil@test.com",
            },
            {
                id : 3,
                name : "Sam",
                email: "sam@test.com",
            },
            {
                id : 4,
                name : "Shreyash",
                email: "sam@test.com",
            },
        ]
        return(
        <View>
            <Text style={{marginTop:50, backgroundColor:'#ccc',
        fontSize:20}}>Component in Loop with FlatList</Text>
            <FlatList
            data = {users}
            renderItem = {({item}) => <UserData item = {item}/> }
            />

            
        </View>
    );
}