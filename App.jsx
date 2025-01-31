import {Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello bhai</Text>
      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: 'https://images.unsplash.com/photo-1737920406899-e1cabc43a6a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <Pressable style={{padding:10, backgroundColor:"yellow"}}>
        <Text>Press</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
