import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import Header from "../../components/globals/Header";
import SearchBar from "../../components/globals/SearchBar";
import PageHeader from "../../components/globals/PageHeader";
import IconCard from "../../components/globals/IconCard";
import { iconData } from "../../assets/dataset/iconDataset";
import { courseData } from "../../assets/dataset/courseData";
import Card from "../../components/globals/Card";


export default function HomeScreen() {
 
  const [loaded] = useFonts({
    AsgardWide_B: require("../../assets/fonts/AsgardTrial-WideBold.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter_18pt-Bold.ttf"),
  });
  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }

  return (
    <SafeAreaView style={indexStyles.mainContainer}>
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <SearchBar />
          <PageHeader heading="Categories" link="explore" />
          <FlatList
          nestedScrollEnabled
            style={{ maxHeight: 60, marginBottom: 12, paddingLeft: 8 }}
            data={[
              { btnName: "Design" },
              { btnName: "Code" },
              { btnName: "Marketing" },
              { btnName: "Business" },
              { btnName: "Music" },
              { btnName: "Photography" },
            ]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 12,
                    margin: 4,
                    height: 45,
                    borderRadius: 20,
                    backgroundColor: index === 0 ? "#781cdaff" : "white",
                    borderColor: "#000",
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: index === 0 ? "white" : "black" }}>
                    {item.btnName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={{textAlign:"center", fontSize:34, color:'black'}}></Text>

          <PageHeader heading="Trending Courses" link="explore" />
          <FlatList
            data={iconData}
            showsHorizontalScrollIndicator={false}
            style={{ height: 95 }}
            nestedScrollEnabled
            horizontal
            renderItem={({ item, index }) => {
              return <IconCard>{item.icon}</IconCard>;
            }}
          />
          <PageHeader heading="Featured Courses" link="explore" />

          <FlatList
            data={courseData}
            numColumns={2}
            nestedScrollEnabled
            renderItem={({ item, index }) => {
              return (
                <Card key={index} name={item.courseName} price={item.price}>
                  {item.icon}
                </Card>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const indexStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#f7f7f7ff",
  },
  headingText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    width: 200,
    height: 100,

    margin: "auto",
    backgroundColor: "#0553",
  },
});
