import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image, SafeAreaView, Flatlist } from 'react-native';

export default function App(){
  const [text, setText] = useState('');
  const [data, setData] = UseState([]);

  const buttonPressed = () => {
    const newData = [...data,text];
    setData(newData);
    setText('');
    console.log(newData);
  }


  

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text}/>
      <Button titel='Add to list' onPress={buttonPressed} />
      <Flatlist
        data={data}
        renderItem={({item}) => <Text>{item}</Text>}
        />
        <StatusBar style="auto" />
      </View>
  );
}


const styles = StyleSheet.create({
   container: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  input: {
    borderColor:'black',
    borderWidth: 1,
    width: '50%',
    marginTop: 12
  },
});
