import React from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from "react-native";

export default PassUpdated = ({ navigation }) => {
  return (
    <View style={styles.container}>


      <View style={styles.content}>
        <Image
          style={styles.img}
          source={require("../assets/imgs/Successmark.png")}
        />
        <Text style={{ color: "#1F1F1F", fontSize: 20, fontWeight: "600" , textAlign: 'center'}}>
          The password has been updated!
        </Text>
        <Text
          style={{
            color: "rgba(31, 31, 31, 0.80)",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          You can now use your new password!{"\n"} Don't forget this time ;{")"}
        </Text>
      </View>

      <Pressable
        style={styles.btnLogIn}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.text}>Re login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: "#F7F7F7",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  img: {
    width: 101,
    height: 101,
    margin: "auto",
    objectFit: "contain",
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginBottom: 17,
    alignSelf: "stretch",
    marginHorizontal: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
