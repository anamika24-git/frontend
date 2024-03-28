import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput
  , FlatList} from 'react-native';
import {useState} from 'react';
import List from './List';
import List2 from './List2';
import Text1 from './Text1';
import Scroll from './Scroll';
import Userinteract from './Userinteract';
import Flex from './Flex';
import API2 from './API2';
import Form from './Form';
import Flatlist from './FlatList';
import Grid from './Grid';
import Custom from './Custom';
import Responsive  from './Responsive';
import ButtonStyling from './ButtonStyling';
import RadioButton from './RadioButton';
export default function App() {
  // const[goal, setGoal] = useState('');
  // const[goalList, setgoalList] = useState([]);
  // function addgoal(text) {
  //   setGoal(text);
  // }
  // function getgoal(currentGoal) {
  //   setgoalList((currentGoal) => [...currentGoal , goal]);
  //   setGoal("");

  // }
  // return (
  //   <View style = {styles.appContainer}>
  //     <View style = {styles.innerContainer}>
  //       <TextInput  style= {styles.textInput} value = {goal} onChangeText = {addgoal} placeholder = "Your Course Goals"/>
  //       <Button title = "Add Goal" onPress={getgoal} />
  //     </View>
          
  //       </View>
  //   </View>
  // );
  return (
    <View style={{flex:1}}>
      <RadioButton/>
    </View>

  );
}


