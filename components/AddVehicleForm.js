import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
import { FloatingAction } from "react-native-floating-action";
import { VehicleService } from "../services/VehicleService";
import Toast from 'react-native-toast-message';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function AddVehicleForm() {

  const [name,setName]=useState('');
  const [location,setLocation]=useState('');
  const [description,setDescription]=useState('');
  const [img,setImg]=useState('');

  bs = React.createRef();
  fall = new Animated.Value(1);

  const ip = 'http://192.168.8.167:4000';

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

        Toast.show({
          type: 'success',
          text1: 'Vehicle Saved Successfully !',
          position:'bottom'
          // text2: 'Vehicle Saved Successfully !'
        });

      })
      .catch(err => {
        Alert.alert('Error occured !');
        Toast.show({
          type: 'error',
          text1: 'Error occured !',
          position:'bottom'
        });
      });

  }
  
  imageBtnOption = () => {
    bs.current.snapTo(0);
  }

  renderContent = () => (
    <View style={style.containerPopup}>
      <VStack>

      <View style={{alignItems: 'center'}}>
        <Text style={style.panelTitle}>Upload Photo</Text>
        <Text style={style.panelSubtitle}>Choose Your Picture</Text>
      </View>

        <TouchableOpacity style={style.panelButton}>
          <Text style={style.panelButtonTitle}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.panelButton}>
          <Text style={style.panelButtonTitle}>Choose From Library</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.panelButton}>
          <Text style={style.panelButtonTitle}>Remove</Text>
        </TouchableOpacity>

      </VStack>
    </View>
  );


  return (
    <NativeBaseProvider>
      <Animated.ScrollView style={{opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <Center>
          <VStack space={5} alignItems="center">
            <View style={style.container}>
              <TouchableOpacity style={style.btn} onPress={imageBtnOption}>
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
          {/* <Button style={{marginTop: 20, backgroundColor: '#469AFF', fontWeight: 'bold'}} w="70%"
          onPress={saveData}>
            ADD
          </Button> */}
          <TouchableOpacity style={style.addBtn} onPress={saveData}>
          <Text style={style.panelButtonTitle}>ADD</Text>
        </TouchableOpacity>
        </Center>
      </Animated.ScrollView>
      <BottomSheet
        ref={bs}
        snapPoints={[280, 0]}
        renderContent={renderContent}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        borderRadius={25}
        // renderContent={renderContent}
      />
      <Toast />
    </NativeBaseProvider>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: 20,
    // paddingTop: 20,
    // paddingHorizontal: 20,
    // width:'80%'
    backgroundColor: 'white',
    width: 260,
    height: 241,
    borderRadius: 10,
  },

  btn: {
    // backgroundColor:'black',
    borderRadius: 10,
  },

  addBtn:{
    marginTop: 20, 
    backgroundColor: '#469AFF', 
    fontWeight: 'bold',
    width:'70%',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },

  logo: {
    color: 'black',
    width: 260,
    height: 241,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  containerPopup: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  panelButton: {
    padding: 13,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#449AFC',
    marginVertical: 7,
  },
  
  panelButtonTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },

  panelTitle: {
    fontSize: 27,
    height: 35,
    color: 'black',
    fontWeight: 'bold',
  },

  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
});