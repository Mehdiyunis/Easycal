import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

export default DropDown = ({ icon }) => {
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
  ];

  return (
    <Pressable
      style={styles.inputContiner}
      onPress={() => setOpenDropDown(!openDropDown)}
    >
      <View>
        <Image style={styles.absoluteImg} source={icon} />

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
              fontFamily : "mrt-sbold",
            }}
          >
            {item.value}
          </Text>
        ))}
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputContiner: {
    position: "relative",
    marginBottom: 20,
    justifyContent: "flex-end",
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
    fontFamily : "mrt-sbold",
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
});
