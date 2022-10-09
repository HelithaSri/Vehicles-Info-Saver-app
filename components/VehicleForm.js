import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
import { FloatingAction } from "react-native-floating-action";

export default function VehicleForm({route}) {

  // const[fabActive,setFabActive]=useState(fabActiveProp? true : false);
  const[readOnly,setReadOnly]=useState(route.params.readOnlyProp || false);
  const[updateBtn,setUpdateBtn]=useState(true);

  const[vehicleName,setVehicleName]=useState('')
  const[location,setLocation]=useState('')
  const[vehicleDescription,setVehicleDescription]=useState('')

  useEffect(()=>{
    console.log(route.params.obj.userId);
    setVehicleName(route.params.obj.name)
    setLocation(route.params.obj.location)
    setVehicleDescription(route.params.obj.description)
  })

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

  function fabSelect(name){
    switch (name) {
      case "bt_edit":
        setReadOnly(false)
        setUpdateBtn(true)
        console.log("545454");
        break;

      case "bt_delete":
        setReadOnly(false)
        setUpdateBtn(false)
        break;
    
      default:
        break;
    }
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <VStack space={5} alignItems="center">
            <View style={style.container}>
              <TouchableOpacity style={style.btn} disabled={readOnly}>
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
                <Input mx="3" placeholder="Vehicle Name" w="70%" value={vehicleName} onChangeText={(e) => { setVehicleName(e) }} isReadOnly={readOnly}/>
                <Input mx="3" placeholder="Location" w="70%" value={location} onChangeText={(e) => {setLocation(e)}} isReadOnly={readOnly}/>
                <TextArea
                  h={20}
                  placeholder="Describe Vehicle"
                  w="70%"
                  h="200"
                  isReadOnly={readOnly}
                  value={vehicleDescription}
                   onChangeText={(e) => {setVehicleDescription(e)}}
                />
              </VStack>
            </View>
          </VStack>
        </Center>
        <Center>
          <Button id={"actionBtn"} style={{marginTop: 20, backgroundColor: updateBtn? '#00b894':'#d63031'}} w="70%" onPress={() => console.log("Hey ",route.params.obj.title)} isDisabled={readOnly}>
            {updateBtn?"Update":"Delete"}
          </Button>
        </Center>
      </ScrollView>
      <FloatingAction
          actions={actions}
          distanceToEdge={6}
          buttonSize={40}
          iconWidth={15}
          iconHeight={15}
          onPressItem={name => {
            console.log(`selected button: ${name}`)
            fabSelect(name)
          }}
        />
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