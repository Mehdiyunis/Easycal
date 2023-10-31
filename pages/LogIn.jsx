import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

export default function LogIn({ navigation }) {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/imgs/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Text style={styles.title}>Log in to your account</Text>
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

        <View style={styles.inputContiner}>
          <Image
            style={styles.absoluteImg}
            source={require("../assets/imgs/lock_green.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>

        <View style={{display: 'flex', flexDirection: 'row', gap: 10}} >
          <Checkbox
            value={check}
            style={styles.checkbox}
            color="#10B584"
            onValueChange={setCheck}
          />
          <Text onPress={()=>setCheck(!check)}>I am doctor</Text>
        </View>

        <Pressable style={styles.btnLogIn} onPress={() => navigation.navigate(check ? "PagesDr" : "PagesUser")}>
          <Text style={styles.text}>Log In</Text>
        </Pressable>

        <Text
          onPress={() => navigation.navigate("ForgotPasword")}
          style={styles.forget}
        >
          Forgot your password?
        </Text>
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 39,
    paddingTop: 24,
    justifyContent: "space-evenly",
  },
  title: {
    color: "#1F1F1F",
    fontSize: 20,
    fontWeight: "600",
  },
  form:{
    display: 'flex',
    gap: 20,

  },
  logo: {
    width: 191,
    height: 54,
    alignSelf: "center",
  },
  inputContiner: {
    position: "relative",
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
  },

  checkbox: {
    width: 20,
    height: 20,
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  forget: {
    color: "#7C7C7C",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
