import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
      style={styles.txtInput}
       placeholder="Search a Course"/>
      <TouchableOpacity style={{
           position:"absolute",
           top:"45%",
           right:"7%",
           backgroundColor:"white",
        }}>
       <Feather  name="search" size={28} color="black" />
        </TouchableOpacity> 
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer:{
        position:"relative",
        height:55

    },
    txtInput:{
        borderRadius: 16,
        boxShadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 55,
        width: "95%",
        marginTop:10,
        padding:20,
        margin:'auto',
        backgroundColor:"white"
    }
})