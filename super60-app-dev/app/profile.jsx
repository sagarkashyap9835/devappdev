import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const profile = () => {
  return (
    <>
      <Stack.Screen title="Profile" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 55, color: "white" }}>
            Profile
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default profile;

const styles = StyleSheet.create({});
