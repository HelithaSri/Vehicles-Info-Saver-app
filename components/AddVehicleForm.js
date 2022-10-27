import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
import { FloatingAction } from "react-native-floating-action";
import { VehicleService } from "../services/VehicleService";

export default function AddVehicleForm() {

  const [name,setName]=useState('');
  const [location,setLocation]=useState('');
  const [description,setDescription]=useState('');
  const [img,setImg]=useState('');

  const ip = 'http://192.168.8.167:4000';

  const statusArray = [{
    status: "success",
    title: "Selection successfully moved!"
  }, {
    status: "error",
    title: "Please try again later!"
  }, {
    status: "info",
    title: "We are going live in July!"
  }, {
    status: "warning",
    title: "Poor internet connection."
  }];

  saveData = async ()=>{
    console.log(name , location , description)
    
    fetch(`${ip}/vehicle`, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        location: location,
        description: description,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => {
        setLocation('')
        setDescription('')
        setName('')
        /* Alert.alert('Vehicle Saved Successfully !'); */

        

      })
      .catch(err => {
        Alert.alert('Error occured !');
      });

  }


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
                <Input mx="3" placeholder="Vehicle Name" w="70%" 
                value={name}
                onChangeText={(e)=>{
                  setName(e)
                }}
                />
                <Input mx="3" placeholder="Location" w="70%"
                value={location}
                onChangeText={(e)=>{
                  setLocation(e)
                }}
                />
                <TextArea
                  h={20}
                  placeholder="Describe Vehicle"
                  w="70%"
                  h="200"
                  value={description}
                  onChangeText={(e)=>{
                    setDescription(e)
                }}
                />
              </VStack>
            </View>
          </VStack>
        </Center>
        <Center>
          <Button style={{marginTop: 20, backgroundColor: '#469AFF'}} w="70%"
          onPress={saveData}>
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