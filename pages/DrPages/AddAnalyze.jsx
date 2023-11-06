import React,{useState} from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default AddAnalyze = ({ navigation }) => {

  const [selected, setSelected] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const iconTransform = openDropDown ? [] : [{ rotate: "180deg" }];

  const data = [
    { key: 1, value: "8:00" },
    { key: 2, value: "9:00" },
    { key: 3, value: "10:00" },
    { key: 4, value: "11:00" },
    { key: 5, value: "12:00" },
    { key: 6, value: "13:00" },
    { key: 7, value: "14:00" },
    { key: 8, value: "15:00" },
    { key: 9, value: "16:00" },
    { key: 10, value: "17:00" },
    { key: 11, value: "18:00" },
  ];




  return (
    <View style={styles.continer}>
      <View style={{ width: "100%", position: "relative", marginTop: 30 }}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("HomeDr")}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            style={styles.leftArrow}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#10B584",
            textAlign: "center",
            fontFamily: "mrt-bold",
          }}
        >
          Add analyze
        </Text>

        <Image
          source={require("../../assets/imgs/onlineQueueBg.png")}
          style={styles.bg}
        />
      </View>

      <View style={{ paddingHorizontal: 19 }}>
        <ScrollView
          contentContainerStyle={{ justifyContent: "flex-end" }}
          nestedScrollEnabled={true}
        >
          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/userId.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Enter user’s id"
              secureTextEntry={false}
            />
          </View>

          <View style={styles.inputContiner}>
            <Image
              style={styles.absoluteImg}
              source={require("../../assets/imgs/choseFile.png")}
            />
            <TextInput
              style={styles.input}
              keyboardType="ascii-capable"
              placeholder="Choose the analyze file"
              secureTextEntry={false}
            />
          </View>

          <Pressable
            style={styles.inputContiner}
            onPress={() => setOpenDropDown(!openDropDown)}
          >
            <View>
              <Image style={styles.absoluteImg} source={require("../../assets/imgs/date.png")} />

              <TextInput
                editable={false}
                style={styles.input}
                keyboardType="email-address"
                placeholder={"Select your company"}
                value={selected}
              />

              <Image
                style={[styles.rightImg, { transform: iconTransform }]}
                source={require("../../assets/imgs/up_icon.png")}
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
                    fontFamily: "mrt-sbold",
                  }}
                >
                  {item.value}
                </Text>
              ))}
            </ScrollView>
          </Pressable>
        </ScrollView>
        <Pressable
          style={styles.btnLogIn}
          onPress={() => navigation.navigate("HomeDr")}
        >
          <Text style={styles.text}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 19,
    marginTop: 25,
    marginBottom: 19,
    alignSelf: "stretch",
    
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    fontFamily: "mrt-sbold",
  },

  goBack: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#eee",
    padding: 3,
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },

  leftArrow: {
    color: "#10B584",
  },

  bg: {
    position: "absolute",
    top: "100%",
    marginTop: 20,
    width: 285,
    height: 226,
    left: "50%",
    transform: [{ translateX: -142.5 }],
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
    fontFamily: "mrt-sbold",
  },
  inputContiner: {
    position: "relative",
    marginBottom: 20,
    justifyContent: "flex-end",
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
