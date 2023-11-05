import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Appointments = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <View style={styles.bgContainer}>
        <Image
          style={{
            width: 400,
            height: 290,
            objectFit: "cover",
            opacity: 0.2,
          }}
          source={require("../../assets/imgs/backgroundAppoint.png")}
        />
      </View>

      <View style={{ width: "100%", position: "relative", marginVertical: 30 }}>
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
            fontFamily : "mrt-bold"
          }}
        >
          Appointments
        </Text>
      </View>

      <ScrollView style={{ flex: 1, gap: 12 }}>
        <View
          style={{
            marginBottom: 12,
            flexDirection: "row",
            backgroundColor: "rgba(238, 238, 238, 0.93)",
            paddingVertical: 17,
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 4,
              justifyContent: "flex-end",
              alignItems : "baseline"
            }}
          >
            <Image
              style={styles.date}
              source={require("../../assets/imgs/date.png")}
            />
            <Text
              style={{
                color: "#1F1F1F",
                fontSize: 14,
                fontWeight: "600",
                lineHeight: 17,
                fontFamily : "mrt-sbold"
              }}
            >
              Date
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems : "baseline"
            }}
          >
            <Image
              style={styles.date}
              source={require("../../assets/imgs/person.png")}
            />
            <Text
              style={{
                color: "#1F1F1F",
                fontSize: 14,
                fontWeight: "600",
                lineHeight: 17,
                fontFamily : "mrt-sbold"
              }}
            >
              Pasient
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 4,
              justifyContent: "flex-start",
              alignItems : "baseline"
            }}
          >
            <Image
              style={styles.date}
              source={require("../../assets/imgs/hours.png")}
            />
            <Text
              style={{
                color: "#1F1F1F",
                fontSize: 14,
                fontWeight: "600",
                lineHeight: 17,
                fontFamily : "mrt-sbold"
              }}
            >
              Hour
            </Text>
          </View>
        </View>

        <View style={styles.appointmentContainer}>
          <Text style={styles.appointData}>18/12/2014</Text>
          <Text style={styles.appointPasient}>Q.Mehdi</Text>
          <Text style={styles.appointHous}>19:00</Text>
        </View>
      </ScrollView>
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

  date: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },
  appointmentContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 17,
    borderRadius: 6,
    paddingHorizontal: 40,
    gap: 20,
  },
  appointData: {
    color: "#1F1F1F",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    flex: 1,
    textAlign: "right",
    fontFamily : "mrt-medium"
  },
  appointPasient: {
    color: "#1F1F1F",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    flex: 1,
    textAlign: "center",
    fontFamily : "mrt-medium"
  },
  appointHous: {
    color: "#1F1F1F",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 17,
    flex: 1,
    fontFamily : "mrt-bold"
  },
  bgContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 34,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
});
