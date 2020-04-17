import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component{
  constructor (props){
    super (props);
      this.state = {
      number: []
    }
  }

  generateRandomNumber(){
    let n = [];

    for(var i = 0; i <= 5; i++){
      n.push(Math.floor(Math.random() * 60) + "\n");
    }

    this.checkrepeatedNumbers(n);
  }

  checkrepeatedNumbers(array){
    for(var b = 0; b < array.length; b++){
      let existe = array.indexOf(array[b], b+1)
      if(existe != -1 || array[b] == 0){
        array[b] = Math.floor(Math.random() * 60) + "\n";
      }
    }

    this.setState({
      number: array
    })
  }


  render (){
    return (
      <View style={styles.container}>
      <Text style={styles.textBtn}>{this.state.number}</Text>
      <Button style={styles.btn}
      title="Gerar número aleatório"
      onPress={() => {this.generateRandomNumber()}}
      color="#737475"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ea3a6',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#dedede'
  },
  btn: {
    marginTop: 10
  },
  textBtn:{
    color: '#000'
  }
});
