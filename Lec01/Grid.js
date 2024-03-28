import {Text, View, StyleSheet, ScrollView} from 'react-native';

const Grid = () => {
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
        },
        {
            id : 5,
            name : "Preshant"
        },
        {
            id : 6,
            name : "tony"
        },
        {
            id : 7,
            name : "Kayle"
        },
        {
            id : 8,
            name : "Kayle"
        },
        {
            id : 9,
            name : "Kayle"
        },
        {
            id : 10,
            name : "Kayle"
        },
        {
            id : 11,
            name : "Kayle"
        },
    ]
    return (
        <ScrollView>
            <Text style={{fontSize:20, backgroundColor:'#ccc', marginTop:50,textAlign:'center',marginBottom: 50}}>List with Dynamic Grid</Text>
            <View style={styles.listcontainer}>
                {
                    users.map((item) => <Text style={styles.list}>{item.name}</Text>)
                }
            </View>
            </ScrollView>
    );
}
const styles = StyleSheet.create(
    {
        listcontainer : {
            flex : 1,
            flexDirection: 'row',
            flexWrap: 'wrap',

        },
        list: {
            fontSize:20,
            borderColor:'black',
            backgroundColor: 'blue',
            margin :5,
            width:120,
            height: 120,
            textAlignVertical: 'center',
            textAlign: 'center'

        }

    }
)


export default Grid;