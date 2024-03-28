import React from 'react';
import { SafeAreaView, ScrollView, Text, Image } from 'react-native';

/*
Play around with the different properties and components in the 
code below to get a hands-on learning experience of the concepts 
learned in this lesson. As an added exercise:
1) Enable the horizontal prop in the ScrollView component below.
2) Enable the pagingEnabled prop in the ScrollView component below.
3) Play around with the showsHorizontalScrollIndicator and
showsVerticalScrollIndicator props in the ScrollView component below.
*/

const Scroll = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>

      <ScrollView contentContainerStyle={{
        backgroundColor: "#add8e6",
        alignItems: "center",
        justifyContent: "center",
        padding: 80
      }}>

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

        <Text style={{ fontSize: 25, fontWeight: "600", paddingBottom: 15 }}> Lorem ipsum dolor </Text>
        <Image style={{ marginBottom: 40, width: 100, height: 100 }} 
          source={{ uri: "https://www.educative.io/static/imgs/logos/MainLogoV2.png" }}
        />

      </ScrollView>

    </SafeAreaView>
  );
}

export default Scroll;