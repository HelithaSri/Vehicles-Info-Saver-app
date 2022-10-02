import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <NativeBaseProvider>
        <Center>
        <View style={style.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) =>
                    <TouchableOpacity style={style.card} activeOpacity={0.85} onPress={()=>{console.log("hello");}}>
                        <HStack style={{padding:10}} space={2} alignItems='center'>
                            <View style={{width:'35%'}}>
                                <Image style={style.logo} source={require('../assets/img/login.png')} />
                            </View>
                            {/* <VStack w="100" justifyContent="center">
                                <Heading>BMW</Heading>
                                <Text style={{marginBottom:10,fontWeight:'bold'}} >Kandy</Text>
                            </VStack> */}
                            <View style={{width:'62%'}}>
                                <Heading size="sm">Royal Enfield Classic Desert Storm </Heading>
                                <Text style={{marginBottom:10,fontWeight:'bold'}} >Nawalapitiya</Text>
                            </View>
                        </HStack>
                        {/* <Heading>BMW</Heading>
                        <Text style={{marginBottom:10,fontWeight:'bold'}} >Kandy</Text>
                        <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.title}</Text>
                        <Text style={{marginBottom:10}} >{item.body}</Text> */}
                    </TouchableOpacity>
                }
            />
        </View>
        </Center>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({
    container:{
        paddingTop: 20, 
        paddingHorizontal: 20,
        // width:'80%'
    },

    card:{
        // borderWidth:1,
        marginBottom:'5%',
        padding:5,
        backgroundColor:"white",
        borderRadius: 10,
        
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        elevation: 5,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode:"contain",
        // backgroundColor:"pink"
      },
})