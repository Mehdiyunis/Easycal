import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function CreateDrAccount({ navigation }) {
  const [selected, setSelected] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const iconTransform = openDropDown ? [] : [{ rotate: "180deg" }];

  const data = [
    { key: 1, value: "West" },
    { key: 2, value: "Hosbital" },
    { key: 3, value: "Shamakhinkha" },
    { key: 4, value: "Ataturk" },
    { key: 5, value: "Heyder Eliyev" },
    { key: 6, value: "Prime" },
    { key: 7, value: "Prime" },
    { key: 8, value: "Prime" },
    { key: 9, value: "Prime" },
    { key: 10, value: "Prime" },
    { key: 11, value: "Prime" },
    { key: 12, value: "Prime" },
    { key: 13, value: "Prime" },
    { key: 14, value: "Prime" },
    { key: 15, value: "Prime" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Create new account</Text>

      <ScrollView contentContainerStyle={{ rowGap: 24 }}>
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

        <Pressable
          style={styles.inputContiner}
          onPress={() => setOpenDropDown(!openDropDown)}
        >
          <View>
            <Image
              style={styles.absoluteImg}
              source={require("../assets/imgs/home_icon.png")}
            />

            <TextInput
              editable={false}
              style={styles.input}
              keyboardType="email-address"
              placeholder={"Select your company"}
              value={selected}
            />

            <Image
              style={[styles.rightImg, { transform: iconTransform }]}
              source={require("../assets/imgs/up_icon.png")}
            />
          </View>

          <ScrollView
            nestedScrollEnabled={true}
            style={{
              display: openDropDown ? "block" : "none",
              paddingTop: 6,
              height: 200,
            }}
          >
            {data.map((item) => (
              <Text
                key={item.key}
                onPress={() => {
                  setSelected(item.value);
                  setOpenDropDown(!openDropDown);
                }}
                style={{
                  padding: 11,
                  fontSize: 14,
                  fontWeight: "600",
                  backgroundColor: "#eee",
                  color: "#1F1F1F",
                  marginBottom: 2,
                  borderRadius: 4,
                }}
              >
                {item.value}
              </Text>
            ))}
          </ScrollView>
        </Pressable>
        <View style={styles.inputContiner}>
          <Image
            style={styles.absoluteImg}
            source={require("../assets/imgs/lock_green.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder="Enter your сompany pin"
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputContiner}>
          <Image
            style={styles.absoluteImg}
            source={require("../assets/imgs/person.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder="Enter your name"
          />
        </View>
        <View style={styles.inputContiner}>
          <Image
            style={styles.absoluteImg}
            source={require("../assets/imgs/person.png")}
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
            source={require("../assets/imgs/scan_person.png")}
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
            source={require("../assets/imgs/phone.png")}
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
            source={require("../assets/imgs/lock_green.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContiner}>
          <Image
            style={styles.absoluteImg}
            source={require("../assets/imgs/lock_red.png")}
          />
          <TextInput
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
      </ScrollView>

      <Pressable style={styles.joinUs} onPress={() => navigation.navigate("HomeDr")}>
        <Text style={styles.text}>Join us</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 39,
    paddingTop: 24,
    backgroundColor: "#F7F7F7",
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
  rightImg: {
    position: "absolute",
    display: "flex",
    height: "100%",
    alignItems: "center",
    objectFit: "contain",
    zIndex: 1,
    top: 0,
    right: 20,
    transform: [{ rotate: "180deg" }],
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
  },
  joinUs: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
    marginBottom: 50,
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
