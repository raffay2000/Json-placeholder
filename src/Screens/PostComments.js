import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect, useContext } from "react";

const PostComments = ({ route }) => {
  const [PostComments, setPostComments] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    fetchUserComments();
  }, []);
  const fetchUserComments = async () => {
    let Base_Url = "https://jsonplaceholder.typicode.com";
    let PostComm = `comments?postId=${id}`;
    fetch(`${Base_Url}/${PostComm}`)
      .then((response) => response.json())
      .then((data) => setPostComments(data))
      .catch((err) => console.error(err));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={PostComments}
        renderItem={({ item }) => {
          return (
            <View style={styles.CommentView}>
              <Text
                style={[
                  styles.textColor,
                  { fontSize: 25, fontWeight: "700", marginBottom: 18 },
                ]}
              >
                {item.email}
              </Text>
              <View
                style={{
                  backgroundColor: "#3d5a80",
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                <Text style={[styles.textColor, { fontSize: 18 }]}>
                  {item.body}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PostComments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98c1d9",
  },
  CommentView: {
    backgroundColor: "#293241",
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  textColor: {
    color: "#e0fbfc",
  },
});
