import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default NewPass = ({ navigation }) => {
  const [firstPass, setFirstPass] = useState(true);
  const [lastPass, setlastPass] = useState(true);

  return (
    <KeyboardAwareScrollView style={{ flex: 1, flexGrow: 1 }} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("Verification")}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            style={styles.leftArrow}
          />
        </Pressable>

        <View style={styles.content}>
          <Image
            style={styles.img}
            source={require("../assets/imgs/newPass.png")}
          />
          <Text style={{ color: "#1F1F1F", fontSize: 24, fontWeight: "600" }}>
            Enter your new password
          </Text>

          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../assets/imgs/lock_green.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your password"
              secureTextEntry={firstPass}
            />
            <Pressable
              style={styles.rightImgPress}
              onPress={() => {
                setFirstPass(!firstPass);
              }}
            >
              <Image
                style={styles.rightImg}
                source={require("../assets/imgs/eye.png")}
              />
            </Pressable>
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../assets/imgs/lock_green.png")}
            />

            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your password"
              secureTextEntry={lastPass}
            />

            <Pressable
              style={styles.rightImgPress}
              onPress={() => {
                setlastPass(!lastPass);
              }}
            >
              <Image
                style={styles.rightImg}
                source={require("../assets/imgs/eye.png")}
              />
            </Pressable>
          </View>
        </View>

        <Pressable
          style={styles.btnLogIn}
          onPress={() => navigation.navigate("PassUpdated")}
        >
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
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
  goBack: {
    marginTop: 30,
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#eee",
    padding: 3,
    alignSelf: "flex-start",
  },
  leftArrow: {
    color: "#10B584",
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },

  img: {
    width: 240,
    height: 210,
    margin: "auto",
  },

  inputContiner: {
    position: "relative",
    alignSelf: "stretch",
    marginHorizontal: 20,
  },
  absoluteImg: {
    position: "absolute",
    display: "flex",
    height: "100%",
    alignItems: "center",
    objectFit: "contain",
    zIndex: 1,
    top: 0,
    left: 12,
  },
  input: {
    backgroundColor: "#eee",
    paddingVertical: 18,
    paddingLeft: 38,
    paddingRight: 45,
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 4,
    color: "#1F1F1F",
    width: "100%",
  },

  rightImgPress: {
    position: "absolute",
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 16,
    zIndex: 1,
    top: 0,
    right: 0,
  },

  rightImg: {
    objectFit: "contain",
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginVertical: 17,
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
