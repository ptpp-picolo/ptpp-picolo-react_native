import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

var playerNames = [] ;

export default class MainActivity extends Component {

  constructor(props) {
       super(props)
       this.state = {
         Holder: ''
       }
     }

  AddItemsToArray=()=>{

      //Adding Items To Array.
      playerNames.push( this.state.Holder.toString() );

      // Showing the complete Array on Screen Using Alert.
      Alert.alert("List of Current Players: ", playerNames.toString());

  }

 render() {

   return (
      <View style={styles.MainContainer}>

          <Text>
            Welcome to PTPP! Picolo for frisbee kids
          </Text>

          <TextInput
              placeholder="Enter a player name here"
              onChangeText={TextInputValue => this.setState({ Holder : TextInputValue }) }
              style={{textAlign: 'center', marginBottom: 6, height: 45}}
          />


          <Button color='#778899' title="Click here to add a player to the game!" onPress={this.AddItemsToArray} />


          <Button color='#778899' title="Click here to begin the game!"/>

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