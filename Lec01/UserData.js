import {Text, View, StyleSheet} from 'react-native';

export default  UserData = (props) => {
    const item = props.item;
    return(
        <View style={styles.container}>
            <Text style={styles.textBox}>{item.name}</Text>
            <Text style={styles.textBox}>{item.email}</Text>
        </View>
    );

}
const styles = StyleSheet.create(
    {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:20,
        borderWidth: 2,
        backgroundColor: 'orange',

    },
    textBox: {
        fontSize: 25,

    }

}
)
