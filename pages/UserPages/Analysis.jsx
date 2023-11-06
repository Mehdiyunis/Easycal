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

export default Analysis = ({ navigation }) => {
  const data = [
    {
      id: 1,
      date: "18/12/2014",
      nameDr: "Q.Mehdi",
      nameCompany: "Ege clinic",
    },
    {
      id: 2,
      date: "18/12/2014",
      nameDr: "Q.Mehdi",
      nameCompany: "Ege clinic",
    },
    {
      id: 3,
      date: "18/12/2014",
      nameDr: "Q.Mehdi",
      nameCompany: "Ege clinic",
    },
    {
      id: 4,
      date: "18/12/2014",
      nameDr: "Q.Mehdi",
      nameCompany: "Ege clinic",
    },
  ];

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
          source={require("../../assets/imgs/analysisBg.png")}
        />
      </View>

      <View style={{ width: "100%", position: "relative", marginVertical: 30 }}>
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
            fontFamily: "mrt-bold",
          }}
        >
          Analysis
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.tableHead}>
          <View style={styles.headItem}>
            <Image
              style={styles.date}
              source={require("../../assets/imgs/date.png")}
            />
            <Text style={styles.headTitle}>Date</Text>
          </View>
          <View style={styles.headItem}>
            <Image
              style={styles.date}
              source={require("../../assets/imgs/dr.png")}
            />
            <Text style={styles.headTitle}>Doctor</Text>
          </View>
          <View style={styles.headItem}>
            <Image
              style={styles.date}
              source={require("../../assets/imgs/home_icon.png")}
            />
            <Text style={styles.headTitle}>Company</Text>
          </View>
          <View style={styles.headItem}>
            <Image
              style={styles.date}
              source={require("../../assets/imgs/doc.png")}
            />
            <Text style={styles.headTitle}>Doc</Text>
          </View>
        </View>

        {data.map((item) => (
          <View key={item.id} style={styles.appointmentContainer}>
            <Text style={styles.appointData}>{item.date}</Text>
            <Text style={styles.appointPasient}>{item.nameDr}</Text>
            <Text style={styles.appointPasient}>{item.nameCompany}</Text>
            <Image source={require('../../assets/imgs/download.png')} style={styles.appointDown}/>
          </View>
        ))}
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
    paddingHorizontal: 5,
    gap: 30,
    marginBottom: 12,
    justifyContent: 'center'
  },
  appointData: {
    color: "#1F1F1F",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center",
    fontFamily: "mrt-medium",
  },
  appointPasient: {
    color: "#1F1F1F",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17,
    textAlign: "center",
    fontFamily: "mrt-medium",
  },
  appointDown: {
    width: 17,
    height: 17,
    objectFit: 'cover'
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
  tableHead: {
    marginBottom: 12,
    flexDirection: "row",
    gap: 15,
    backgroundColor: "rgba(238, 238, 238, 0.93)",
    paddingVertical: 17,
    justifyContent: "center",
    borderRadius: 6,
  },
  headItem: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "baseline",
  },
  headTitle: {
    color: "#1F1F1F",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 17,
    fontFamily: "mrt-sbold",
  },
});
