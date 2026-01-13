import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IconCard = ({children}) => {
  return (
    <View style={styles.iconContainer}>
      {children}
    </View>
  )
}

export default IconCard

const styles = StyleSheet.create({
    iconContainer:{
        
        width:75,
        height: 75,
        margin:8,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        boxShadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})