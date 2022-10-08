import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
import { FloatingAction } from "react-native-floating-action";

export default function AddVehicleForm() {

  const actions = [
    {
      text: "Edit",
      icon: require("../assets/img/pencil-outline.png"),
      name: "bt_edit",
      position: 2,
      margin:0
    },
    {
      text: "Delete",
      icon: require("../assets/img/trash-outline.png"),
      name: "bt_delete",
      position: 1,
      margin:0
    }
  ];

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <VStack space={5} alignItems="center">
            <View style={style.container}>
              <TouchableOpacity style={style.btn}>
                <View>
                  <Image
                    style={style.logo}
                    source={require('../assets/img/electric_car.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <VStack space={5} alignItems="center" w="100%">
                <Input mx="3" placeholder="Vehicle Name" w="70%" />
                <Input mx="3" placeholder="Location" w="70%"/>
                <TextArea
                  h={20}
                  placeholder="Describe Vehicle"
                  w="70%"
                  h="200"
                />
              </VStack>
            </View>
          </VStack>
        </Center>
        <Center>
          <Button style={{marginTop: 20, backgroundColor: '#469AFF'}} w="70%">
            ADD
            
          </Button>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const style = StyleSheet.create({
    container:{
        
        marginTop: 20,
        // paddingTop: 20, 
        // paddingHorizontal: 20,
        // width:'80%'
        backgroundColor:'white',
        width: 260, height: 241,
        borderRadius: 10,
    },

    btn:{
        // backgroundColor:'black',
        borderRadius: 10,
    },
    
    logo:{
        
        color:'black',
        width: 260, 
        height: 241,
        resizeMode:"contain",
        borderRadius: 10,
    }
})