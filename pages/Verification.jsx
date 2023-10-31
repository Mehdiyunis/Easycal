import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Verification = ({ navigation }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];


  const handleChangeText = (text, index) => {
    if (text.length <= 1) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text.length === 1 && index < 3) {
        inputRefs[index + 1].current.focus();

      }
    }
  };



  return (
    <View style={styles.container}>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("ForgotPasword")}
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
          source={require("../assets/imgs/verify.png")}
        />
        <Text style={{ color: "#1F1F1F", fontSize: 24, fontWeight: "600" }}>
          Enter verification code
        </Text>
        <Text
          style={{
            color: "rgba(31, 31, 31, 0.80)",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Enter the 4-digit code we sent to your e-mail address.
        </Text>

        <View style={styles.inputs}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={digit ? styles.inputed : styles.input}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={inputRefs[index]}
              placeholder="-"
            />
          ))}
        </View>

        <TouchableOpacity style={styles.resendTouch}><Text  style={styles.resend}>Resend code</Text></TouchableOpacity>
      </View>

      <Pressable
        style={styles.btnLogIn}
        onPress={() => navigation.navigate("NewPass")}
      >
        <Text style={styles.text}>Continue</Text>
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

  inputs: {
    alignSelf: 'stretch',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: '#eee',
    borderRadius: 3,
  },
  inputed: {
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: '#eee',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#10B584'
  },

  resendTouch:{
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  resend:{
    color: '#10B584',
    fontSize: 18, 
    fontWeight: '600'
  }

});
