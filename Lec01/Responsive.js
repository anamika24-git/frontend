import { View, Text, StyleSheet} from 'react-native';

const Responsive = () => {
    return(
        <View style={styles.container}>
        <View style={{flex:2, backgroundColor:'green',flexDirection:'row'}}>
            <View style={{flex:1, backgroundColor:'green'}}></View>
            <View style={{flex:1, backgroundColor:'lightblue'}}></View>
            <View style={{flex:1, backgroundColor:'pink'}}></View>
        </View>
        <View style={{flex:1, backgroundColor:'blue'}}></View>
        <View style={{flex:1, backgroundColor:'yellow'}}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,

    }
})
export default Responsive;
    
      