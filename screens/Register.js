import { View,StyleSheet, Image } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea,Heading, Text, Input, Icon } from "native-base";


export default function Register() {
  return (
    <NativeBaseProvider>
      <VStack style={style.container} space={5}>
        <Heading style={style.heading} size="xl" bold>CREATE ACCOUNT</Heading>
        <Image style={{marginBottom:'2%',}} source={require("../assets/img/i.png")} />
        
        <Input mx="3" placeholder="Name" w="80%"/>
        <Input mx="3" placeholder="Email" w="80%"/>
        <Input mx="3" placeholder="Password" w="80%"/>
        {/* <Input mx="3" placeholder="Password" w="80%"/> */}
        <Icon type="FontAwesome" name="home" />

        <Button style={style.btn} onPress={() => console.log("hello world")} w="50%">Create</Button>
        <Text style={{marginTop:'15%',}}>Have an account? Login</Text>
      </VStack>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    // marginTop: '10%',
    backgroundColor:'white',
    flex: 1,
   },

   heading:{
    marginBottom: 30
   },

   btn:{
    backgroundColor:"#469AFF",
    
   },
})