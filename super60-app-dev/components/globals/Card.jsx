
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Card = ({ children, name, price, description, currency, isWishlisted }) => {

  const shortDesc = description?.length > 50 
    ? description.substring(0, 50) + "..." 
    : description;

  return (
    <View style={styles.cardContainer}>
      <View style={{ marginBottom: 16, width: '100%' }}>
        <View style={{ marginBottom: 8 }}>
          {children}
        </View>
        
        <Text style={{ fontSize: 16, fontWeight: '800' }} numberOfLines={1}>
          {name}
        </Text>
        
        <Text style={{ fontSize: 12, color: 'gray', marginTop: 4 }}>
          {shortDesc}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    
        <Text style={{ fontWeight: '700', fontSize: 16 }}>
          {currency === "USD" ? "$" : currency} {price}
        </Text>
        
        
        <Feather 
          name="heart" 
          size={22} 
          color={isWishlisted ? "red" : "black"} 
        />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    width: "46%",
    borderWidth: 1,
    borderColor: "#d8d8d8ff",
    margin: "2%",
    backgroundColor: "white",
    borderRadius: 22,
    justifyContent: 'space-between',
    minHeight: 250 
  }
})