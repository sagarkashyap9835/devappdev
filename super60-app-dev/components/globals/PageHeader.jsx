import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const PageHeader = ({heading, link}) => {
  return (
    <View style={{flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:12,
    marginTop:24,
    backgroundColor:"white",
    height:80,
    backgroundColor:"inherit"
    }}>
      <Text style={{fontSize:18, fontWeight:600, color:"#2c2c2cff"}}>{heading?heading:"Heading Here"}</Text>
      <Text style={{color:"blue", fontSize:12}}>
        <Link href={`/${link}`}>
        See all
        </Link>
        </Text>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({})