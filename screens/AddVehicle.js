import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, ScrollView,Center, VStack, Input, TextArea, Button } from "native-base";
import { FloatingAction } from "react-native-floating-action";
import AddVehicleForm from './../components/AddVehicleForm';

export default function AddVehicle(props) {

  return (
    <AddVehicleForm/>
  );
}