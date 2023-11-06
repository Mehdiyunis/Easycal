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

  const companys = [
    { key: 1, value: "West" },
    { key: 2, value: "Hosbital" },
    { key: 3, value: "Shamakhinkha" },
    { key: 4, value: "Ataturk" },
    { key: 6, value: "Prime" },
  ];

  const doctors = [
    { key: 1, value: "Mehdi Quluzadeh" },
    { key: 2, value: "Islam Salamzade" },
    { key: 3, value: "Tunzale Majidova" },
    { key: 4, value: "Ziya Niyazli" },
  ];

  const date = [
    { key: 1, value: "1 Noyabr" },
    { key: 2, value: "2 Noyabr" },
    { key: 3, value: "3 Noyabr" },
    { key: 4, value: "4 Noyabr" },
    { key: 5, value: "5 Noyabr" },
    { key: 6, value: "6 Noyabr" },
    { key: 7, value: "7 Noyabr" },
    { key: 8, value: "8 Noyabr" },
    { key: 9, value: "9 Noyabr" },
    { key: 10, value: "10 Noyabr" },
    { key: 11, value: "11 Noyabr" },
  ];
  const hours = [
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
          <DropDown icon={require("../../assets/imgs/prison.png")} data={companys} placeholder={"Select company"}/>
          <DropDown icon={require("../../assets/imgs/dr.png")} data={doctors} placeholder={"Select doctor"}/>
          <DropDown icon={require("../../assets/imgs/date.png")} data={date} placeholder={"Select date"}/>
          <DropDown icon={require("../../assets/imgs/hours.png")} data={hours} placeholder={"Select hour"}/>
        </ScrollView>
        <Pressable
          style={styles.btnLogIn}
          onPress={() =>alert("Operation Completed Successfully")}
        >
          <Text style={styles.text}>Sign up for a queue</Text>
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
