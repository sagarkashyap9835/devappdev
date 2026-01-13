import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
const Header = () => {
  return (
    <View style={styles.header}>
      <SimpleLineIcons name="menu" size={24} color="black" />

      <Link href="profile">
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            style={styles.imageSt}
            source={{
              uri: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
            }}
            contentFit="cover"
            transition={1000}
          />
        </View>
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
  },
  imageSt: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: "#dc7373ff",
    borderRadius: 20,
  },
});
