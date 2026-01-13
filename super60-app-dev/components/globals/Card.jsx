import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
const Card = ({children, name, price}) => {
  return (
    <View className='' style={styles.cardContainer}>
      <View style={{marginBottom:24}}>
        <View style={{paddingBottom:10,paddingTop:10,marginBottom:8}}>
          {children}
        </View>
        <Text style={{fontSize:18, fontWeight:800}}>{name}</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '100%'}}>
        <Text style={{fontWeight:700, fontSize:16}}>{price}</Text>
        <Feather name="heart" size={24} color="black" />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer:{
    padding:16,
    width:"46%",
    borderWidth:1,
    borderColor:"#d8d8d8ff",
    margin:8,
    backgroundColor:"white",
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:"white",
    borderRadius:22
  }
})