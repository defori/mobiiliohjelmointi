import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image, SafeAreaView } from 'react-native';

const App = () => {
  
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);

  

  return (
    <View>
      <Text style={styles.title}>
        
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="+"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="-"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    
    
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=""
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
      />
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;