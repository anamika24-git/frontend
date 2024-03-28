import { useState } from 'react';
import { TextInput, View, StyleSheet ,Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/color'
function StartGameScreen({onPickNumber}) {
    const[enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }
    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(choosenNumber);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength = {2}
             keyboardType="number-pad"
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={numberInputHandler}
             value = {enteredNumber}
             />
             <View style={styles.buttonsContainer}>
                <View style={styles.button} >
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
        </View>
    );
        
    
}


const styles = StyleSheet.create({
   inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100,
        marginHorizontal:24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: 'Colors.primary800',
        elevation: 4, //elevation for boxshadow for android only
        //for ios shadow used 4shadow property
         shadowColor: 'black',
         shadowOffset: {width: 0, height: 2},
         shadowRadius: 6,
         shadowOpacity: 0.25,

   } ,
   numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',

   },
   buttonsContainer: {
    flexDirection: 'row',

   },
   button: {
    flex : 1,
   }
});
export default StartGameScreen;