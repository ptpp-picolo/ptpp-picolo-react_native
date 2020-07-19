import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

var playerNames = [] ;
   const ruleDeck = [
     'Take 3 sips if you say someone elses name',
     'Take a sip if you are wearing blue',
     'Reverse buffalo is in effect',
     'Switch shirts with the person to your left',
     'Kill your drink'
   ];
const MIN_SIP = 2
const MAX_SIP = 6

export default class MainActivity extends Component {

  constructor(props) {
       super(props)
       this.state = {
         text: ''
       };
     }


     getRule=(ruleDeck)=>{
       const index = Math.floor(Math.random() * ruleDeck.length)
       Alert.alert(ruleDeck[index])
     }

     getRandomPlayer=(playerNames)=>{
       const index = Math.floor(Math.random() * playerNames.length)
       return playerNames[index]
     }

    getRandomSip=()=>{
       return Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP
     }





  AddItemsToArray=()=>{

      //Adding Items To Array.
      playerNames.push(this.state.text.toString());

      // Showing the complete Array on Screen Using Alert.
      Alert.alert("List of Current Players: ", playerNames.toString());

      this.textInput.clear()
  }

 render() {


   return (
      <View style={styles.MainContainer}>

          <Text>
            Welcome to PTPP! Picolo for frisbee kids
          </Text>

          <TextInput
              ref={input => { this.textInput = input }}
              placeholder = "Enter a player name"
              onChangeText={(text) => this.setState({ text }) }
              value={this.state.TextInputValue}
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          />

          <>{playerNames}</>


          <Button color='#778899' title="Click here to add a player to the game!" onPress={this.AddItemsToArray} />


          <Button color='#778899' title="Click here to begin the game!" onPress={this.getRule}/>

      </View>


   );
 }
}

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    justifyContent: 'center',
    margin: 0,
    padding: 50,
    backgroundColor: '#dc143c'

  },

  Button :{
  backgroundColor: '#dcdcdc'
  }

});