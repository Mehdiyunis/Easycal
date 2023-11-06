import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default NotificationsDr = ({ navigation }) => {
  const [notifications, setNotifications] = useState([
    {
      imgURL: require("../../assets/imgs/userPhoto1.png"),
      name: "Mehdi",
      content: "sets appointment with you!",
      date: "18/12/2023",
      time: "1m ago",
    },
    {
      imgURL: require("../../assets/imgs/userPhoto2.png"),
      name: "Islam",
      content: "sets appointment with you!",
      date: "18/12/2023",
      time: "14m ago",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <Image
          style={{
            width: 400,
            height: 290,
            objectFit: "cover",
            opacity: 0.2,
          }}
          source={require("../../assets/imgs/notifBg.jpeg")}
        />
      </View>
      <View style={{ width: "100%", position: "relative", marginVertical: 30 }}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("ProfileDr")}
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
          Notifications
        </Text>
      </View>

      <ScrollView>
        {
          notifications ? notifications.map((item) => {
            return (
              <View style={styles.notification}>
                <Image
                  source={item.imgURL}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 50,
                  }}
                />

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 4,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#10B584",
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#1F1F1F",
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      {item.content}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#1F1F1F",
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    Date: {item.date}
                  </Text>
                </View>

                <Text
                  style={{
                    position: "absolute",
                    right: 8,
                    bottom: 8,
                    color: "#7C7C7C",
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  {item.time}
                </Text>
              </View>
            );
          }):''}
      </ScrollView>

      <View style={{ paddingHorizontal: 19 }}>
        <Pressable
          style={styles.btnLogIn}
          onPress={() => setNotifications(false)}
        >
          <Text style={styles.text}>Clear all</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  notification: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#eee",
    borderRadius: 12,
    position: "relative",
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  },
});
