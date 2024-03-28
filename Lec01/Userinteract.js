import React from 'react';
import { 
  SafeAreaView,
  View,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Text
} from 'react-native';

const Userinteract = () => {

  const [switchOn, setswitchOn] = React.useState(false);
  const changeSwitchState = () => setswitchOn(!switchOn);

  const [boxColor, setBoxColor] = React.useState("white");
  const changeBoxColor = () => {
    if (switchOn == true) {
      setBoxColor("white");
    }
    else {
      setBoxColor("#DCAB6B");
    }
  }

  const [count, setCount] = React.useState(0);
  const changeCount = () => {
    let updatedCount = count + 1;
    setCount(updatedCount);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
      <SafeAreaView style={styles.container}>
        <Switch value = {switchOn} onValueChange = {changeSwitchState} onChange = {changeBoxColor}
        trackColor={{ true: "red", false: "gray" }}
        thumbColor={ switchOn ? "blue" : "white" }/>
        <View style={[styles.box, {backgroundColor: boxColor}]}>
          <Text style={styles.text}> Count: { count } </Text>
        </View>
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={ 0.7 }
          underlayColor="green"
          onPress={() => changeCount()}
          onLongPress={() => resetCount()}
        >
          <Text style={styles.buttonText}> Click to increment. Long press to reset. </Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300
  },
  box: {
    borderWidth: 3,
    width: 380,
    height: 380,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "monospace",
    fontSize: 40,
    fontWeight: "600"
  },
  button: {
    backgroundColor: "white",
    width: 350,
    height: 150,
    borderRadius: 20,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    fontFamily: "monospace",
    fontSize: 40,
    fontWeight: "600"
  },
});

export default Userinteract;