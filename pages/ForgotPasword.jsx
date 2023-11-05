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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";

const ForgotPasword = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView style={{ flex: 1, flexGrow: 1 }} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("LogIn")}
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
            source={require("../assets/imgs/frogotImage.png")}
          />
          <Text style={{ color: "#1F1F1F", fontSize: 24, fontWeight: "600",fontFamily : "mrt-sbold" }}>
            Forgot your password?
          </Text>
          <Text
            style={{
              color: "rgba(31, 31, 31, 0.80)",
              fontSize: 16,
              fontWeight: "400",
              textAlign: "center",
              fontFamily : "mrt-light"
            }}
          >
            Don't worry, it can happen to anyone. Please enter the email address
            associated with your account.
          </Text>

          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../assets/imgs/mail.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Enter your e-mail"
            />
          </View>
        </View>

        <Pressable
          style={styles.btnLogIn}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPasword;

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
    paddingRight: 8,
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 4,
    color: "#1F1F1F",
    width: "100%",
    fontFamily : "mrt-sbold"
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginBottom: 17,
    alignSelf: 'stretch',
    marginHorizontal: 20
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    fontFamily : "mrt-sbold"
  },
});
