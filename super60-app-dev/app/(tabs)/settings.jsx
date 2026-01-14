
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../../components/globals/Card';

const settings = () => {
  const [products, setProducts] = useState([]);

  const courseData = [
    {
      id: "prod_ABC123",
      name: "Java Course Pro Membership",
      imageLink: "https://res.cloudinary.com/www-awdiz-in/image/upload/v1694292243/courses/java/advanced-java-training-in-vashi.webp",
      description: "Unlock all premium courses and features with Pro Membership for JAVA courses.",
      price: 49.99,
      currency: "USD",
      isWishlisted: true,
    }
  ];

  const setData = async () => {
    try {
      await AsyncStorage.setItem("course_key", JSON.stringify(courseData));
    } catch (error) {
      console.log("Error storing data", error);
    }
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("course_key");
      if (value !== null) {
        setProducts(JSON.parse(value));
      }
    } catch (error) {
      console.log("Error retrieving data", error);
    }
  }

  useEffect(() => {
    const init = async () => {
      await setData();
      await getData();
    }
    init();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={styles.header}>Featured Courses</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((item) => (
          <Card 
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            currency={item.currency}
            isWishlisted={item.isWishlisted}
          >
            
            <Image 
              source={{ uri: item.imageLink }} 
              style={{ width: '100%', height: 100, borderRadius: 12 }} 
              resizeMode="cover"
            />
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center'
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  }
});