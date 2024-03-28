import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState();
  function pickedNumberHandler(pickedNumber) {
      setuserNumber(pickedNumber);
  }
let screens = <StartGameScreen onPickNumber={pickedNumberHandler}/>
if(userNumber) 
  screens = <GameScreen/>

  return (
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
        <ImageBackground source={require('./assets/images/roll.jpg')} resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.container}>
          {screens}
          </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  },
  backgroundImage: {
    opacity: 0.45,
  }
});
