import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const settings = () => {
  const [token, setToken] = useState("");
  // setting token or data in asyncStorage

  const setData = async()=>{
    try{
      await AsyncStorage.setItem("keyHere",JSON.stringify({id:123, name:"Sujal", token:"abcd223454"}))
    }
    catch(error){
      console.log("Error storing data", error);
    }
  }
  
  // get a value from asyncStorage
  const getData =async()=>{
    try{
      const value = await AsyncStorage.getItem("keyHere");
      setToken(JSON.parse(value).token)
      if(!value){
        console.log("No value found");
        return;
      }
    }
    catch(error){
      console.log("Error retrieving data", error);
    }
  }

  useEffect(()=>{
    async function init(){
      await setData();
      await getData();
    }
    init();
  },[])

 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:55, textAlign:'center'}}>{token}</Text>
        <Text style={{fontSize:18, textAlign:'center', padding:16}}>
          This is a placeholder for the Settings screen. You can add settings
        </Text>

        <Link href="/" style={{fontSize:18, color:'blue', textAlign:'center', padding:16}}>Go Back Home button</Link>
      </View>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({});