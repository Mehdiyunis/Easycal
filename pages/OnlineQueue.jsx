import React  from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import DropDown from "../components/DropDown";

export default OnlineQueue = () => {
  return (
    <View style={styles.continer}>
    <DropDown/>
    <DropDown/>
    <DropDown/>
    <DropDown/>
      <Pressable
        style={styles.btnLogIn}
        onPress={() => navigation.navigate("PassUpdated")}
      >
        <Text style={styles.text}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 34,
    paddingHorizontal: 39,
    backgroundColor: "#F7F7F7",
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginVertical: 17,
    alignSelf: "stretch",

  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
