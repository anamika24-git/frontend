import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Image, Alert } from 'react-native';


/*
Play around with the different properties and components in the 
code below to get a hands-on learning experience of the concepts 
learned in this lesson. As an added exercise:
1) Change the horizontal prop to true in the FlatList component below.
2) Refresh the list by pulling down on the emulator screen and see
the output.
3) Add inverted prop to the FlatList component below.
4) Add numColumns prop to the FlatList component below.
*/
const ImageUrl = " ";
const List2 = () => {

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <Image style={styles.image} source={ item.uri } />
    </View>
  );

  const data = [
    {
      id: 1,
      uri: ImageUrl,
    },
    {
      id: 2,
      uri: ImageUrl,
    },
    {
      id: 3,
      uri: ImageUrl,
    },
    {
      id: 4,
      uri: ImageUrl,
    },
    {
      id: 5,
      uri: ImageUrl,
    },
  ];

  const [isRefreshing, setisRefreshing] = React.useState(false);

  const refreshList = () => {
    setisRefreshing(true);
    Alert.alert("List refreshed");
    setisRefreshing(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ data }
        extraData={isRefreshing}
        renderItem={ renderItem }
        horizontal={ false }
        onRefresh={() => refreshList()}
        refreshing={ isRefreshing }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  box: {
    borderWidth: 3,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "orange"
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain"
  }
});

export default List2;