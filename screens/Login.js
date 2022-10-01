import { View,StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input } from "native-base";

export default function Login() {
  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
      <Heading style={style.heading} size="xl">Login</Heading>
      <Input mx="3" placeholder="Email" w="80%" />

      <Input mx="3" placeholder="Password" w="80%" />
      
      <Button style={style.btn} onPress={() => console.log("hello world")} w="50%">Login</Button>
      </VStack>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: '20%',
   },

   heading:{
    marginBottom: '10%'
   },

   btn:{
    backgroundColor:"#0984e3"
   }
})