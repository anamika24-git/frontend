import React from 'react';
import { Text, SafeAreaView, Alert, TextInput, Button,View,Switch } from 'react-native';

/*
Play around with the different properties and components in the 
code below to get a hands-on learning experience of the concepts 
learned in this lesson. As an added exercise:
1) Restrict the length of the text to 3 lines using the 
numberOfLines prop.
2) Replace SafeAreaView with Text.
*/

const Test1 = () => {
  const [switchOn, setswitchOn] = React.useState(false);
  const changeSwitchState = () => setswitchOn(previousState => !previousState);
  return (
    <SafeAreaView style={{
      alignItems: "center",
      paddingTop: 350,
      paddingLeft: 20,
      paddingRight: 20
    }}>
      <Switch
      value={ switchOn }
      onChange={() => Alert.alert("Switch value changed")}
      onValueChange={ changeSwitchState }
    />
<TextInput  secureTextEntry={true}/>
      <Text 
        onPress={() => Alert.alert("Text component pressed")}
        style={{ 
          color: "blue",
          fontFamily: "monospace",
          fontSize: 25,
          fontWeight: "200",
          textDecorationLine: "underline"
          }}>
        My color is blue, font family is monospace, font size is 25, 
        font weight is 200, and decorated with underline
        
        <Text style={{ 
          color: "green",
          fontFamily: "notoserif",
          fontSize: 20,
          fontWeight: "900",
          textDecorationLine: "strike-through"
          }}> My color is green, font family is notoserif, font size is 20, 
          font weight is 900, and decorated with underline
        </Text>
      
      </Text>

      <Text style={{ color: 'red', fontSize: 20 }}> Block 1 </Text>
      <Text style={{ color: 'purple', fontSize: 20 }}> Block 2 </Text>
      <Text style={{ color: 'black', fontSize: 20 }}> Block 3 </Text>
      <Button 
          title="Submit" 
          color="blue" 
          onPress={() => Alert.alert("Data submitted!")}>
        </Button>
        <View style={{marginTop: 40}}></View>
        <Button 
          title="I am disabled" 
          color="pink"
          disabled={ true }>
        </Button>
    
    
    </SafeAreaView>
  );
}

export default Test1;