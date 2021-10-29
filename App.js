import { whileStatement } from '@babel/types';
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const Texto = ({ style }) => {
  const [texto, setTexto] = useState("Hola Mundo");
  return(
    <Text style={[styles.text, style]}>Hola Mundo</Text>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
     <Texto style={styles.red}/>
     <Texto style={styles.blue}/>
     <Texto style={styles.green}/>
    </View>
 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexDirection: 'row-reverse',
    // flexDirection: 'column-reverse',
    alignItems: 'center',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  red: {
    flex: 1,
    backgroundColor: 'red'
  },
  blue: {
    flex: 3,
    backgroundColor: 'blue'
  },
  green: {
    flex: 2,
    backgroundColor: 'green'
  },
  text: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 24,
    height: 100,
    width: 100

  }
});
export default App

// 1 + 3 + 2 = 6