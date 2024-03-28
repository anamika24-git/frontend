import { SafeAreaView, View, Text, FlatList,  StyleSheet } from 'react-native';
import React from 'react';

const List = () => {
      const renderItem = ({ item }) => (
        <View style={styles.container} >
          <Text> { item.text } </Text>
        </View>
      );
    
      const data = [
        {
          id: 1,
          text: 'Anamika',
        },
        {
          id: 2,
          text: 'Neersj',
        },
        {
          id: 3,
          text: 'Nikj',
        },
        {
          id: 4,
          text: 'rkufed',
        },
        {
          id: 5,
          text: 'test',
        },
        
      ];
    
      const [isRefreshing, setisRefreshing] = React.useState(false);
    
      const refreshList = () => {
        setisRefreshing(true);
        Alert.alert("List refreshed");
        setisRefreshing(false);
      }
    
      return (
        <SafeAreaView>
          <FlatList
            data={ data }
            extraData={isRefreshing}
            renderItem={ renderItem }
            keyExtractor={(item) => item.id}
            horizontal={ false }
            inverted={ true }
            onRefresh={() => refreshList()}
            refreshing={ isRefreshing }
          />
        </SafeAreaView>
      );
      }
export default List;

const styles = StyleSheet.create({
    container: {
         backgroundColor: 'pink',
         borderWidth: 1,
         borderColor: 'black',
    },
   })