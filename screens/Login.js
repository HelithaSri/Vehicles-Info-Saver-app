import { View,StyleSheet, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input } from "native-base";
export default function Login() {
  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
      <Heading style={style.heading} size="xl">WELCOME BACK</Heading>
      <Image style={{marginBottom:'10%',}} source={require("../assets/img/login.png")} />
      <Input mx="3" placeholder="Email" w="80%"/>
      <Input mx="3" placeholder="Password" w="80%"/>
      <Button style={style.btn} onPress={() => console.log("hello world")} w="50%">Login</Button>
      <Text style={{marginTop:'15%',}}>Don’t have  an account? Register</Text>
      </VStack>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: '10%',
   },

   heading:{
    marginBottom: 20
   },

   btn:{
    backgroundColor:"#469AFF",
    
   },
})