// import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";

export default function Home({ navigation }) {
  const [showCards, setShowCards] = useState([]);
  const [uid, setUid] = useState();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    let Base_Url = "https://jsonplaceholder.typicode.com";
    let Users = "users";
    fetch(`${Base_Url}/${Users}`)
      .then((response) => response.json())
      .then((data) => setShowCards(data))
      .catch((err) => console.error(err));

    // axios.get(`${Base_Url}/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  };
  const HandlePress = (id) => {
    setUid(id);
    navigation.navigate("Posts", { id });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={showCards}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                HandlePress(item.id);
              }}
            >
              <View style={styles.ProfilesView}>
                <View style={{ marginRight: 25 }}>
                  <Image
                    source={require("../../assets/avatar3.png")}
                    style={{ height: 100, width: 100 }}
                  />
                </View>
                <View style={{ flex: 2 }}>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 25,
                      color: "#e0fbfc",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 18, color: "#e0fbfc" }}>
                    {item.email}
                  </Text>
                  <Text style={{ fontSize: 15, color: "#e0fbfc" }}>
                    Company: {item.company.name}
                  </Text>
                  <Text style={{ fontSize: 15, color: "#e0fbfc" }}>
                    {item.phone}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98c1d9",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  ProfilesView: {
    // width:"100%",
    backgroundColor: "#293241",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    // justifyContent:"center",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
