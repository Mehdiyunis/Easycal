import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import DropDown from "../../components/DropDown";
import { Ionicons } from "@expo/vector-icons";

export default OnlineQueue = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <View style={{ width: "100%", position: "relative", marginTop: 30 }}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("HomeUser")}
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
            fontFamily : "mrt-bold",
          }}
        >
          Online Queue
        </Text>

        <Image
          source={require("../../assets/imgs/onlineQueueBg.png")}
          style={styles.bg}
        />
      </View>

      <View style={{ paddingHorizontal: 19 }}>
        <ScrollView
          style={{ gap: 20 }}
          contentContainerStyle={{ justifyContent: 'flex-end'}}
          nestedScrollEnabled={true}
        >
          <DropDown icon={require("../../assets/imgs/prison.png")} />
          <DropDown icon={require("../../assets/imgs/dr.png")} />
          <DropDown icon={require("../../assets/imgs/date.png")} />
          <DropDown icon={require("../../assets/imgs/hours.png")} />
        </ScrollView>
        <Pressable
          style={styles.btnLogIn}
          onPress={() => navigation.navigate("PassUpdated")}
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
    paddingTop: 34,
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
    fontFamily : "mrt-sbold",
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
});
