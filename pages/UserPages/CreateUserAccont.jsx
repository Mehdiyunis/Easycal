
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";

import { signUp, signIn } from "../../src/config/firebase";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CreateUserAccount({ navigation }) {
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");
  const [password2, setPassword2Value] = useState("");
  const [name, setNameValue] = useState("");

  return (
    <KeyboardAwareScrollView style={{ flex: 1, flexGrow: 1 }} contentContainerStyle={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.headText}>Create new account</Text>

        <ScrollView contentContainerStyle={{ rowGap: 24 }}>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/mail.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Enter your e-mail"
              value={email}
              onChangeText={(text) => setEmailValue(text)}
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/person.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => setNameValue(text)}
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/person.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your surname"
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/scan_person.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter your id number"
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/phone.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter your mobile number"
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/lock_green.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPasswordValue(text)}
            />
          </View>
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/lock_red.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password2}
              onChangeText={(text) => setPassword2Value(text)}
            />
          </View>

        </ScrollView>

        <Pressable style={styles.joinUs} onPress={() => {
          if (password === password2) {
              signUp(name, email, password).then(() => navigation.navigate("PagesUser")).catch(
                (e) => {
                  console.log(e);
                }
              );
            };
        }}>
          <Text style={styles.text}>Join us</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    flex: 1,
    paddingHorizontal: 39,
    paddingTop: 24

  },
  headText: {
    color: "#1F1F1F",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 50,
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
  joinUs: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginBottom: 50,
    marginTop: 20
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
