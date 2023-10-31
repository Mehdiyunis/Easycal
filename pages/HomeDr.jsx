import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";


export default Home = () => {


  const data = [
    {
      id: 1,
      title: "Add analyze",
      image: require("../assets/imgs/drservice1.png"),
    },
    {
      id: 2,
      title: "Appointments",
      image: require("../assets/imgs/drservice2.jpeg"),
    },
  ];

  return (
    <View style={styles.continer}>
      <Image style={styles.logo} source={require("../assets/imgs/logo.png")} />

      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.welcome}>Welcome back, </Text>
          <Text style={styles.userName}>Tünzalə!</Text>
        </View>

        <View style={styles.cards}>
          {data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Image style={styles.cardImg} source={item.image} />
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 34,
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
  },

  logo: {
    width: 191,
    height: 54,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 40,
  },
  welcome: {
    color: "#10B584",
    fontSize: 20,
    fontWeight: "600",
  },
  userName: {
    color: "#1F1F1F",
    fontSize: 20,
    fontWeight: "600",
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 25,
    columnGap: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: 200,
    display: "flex",
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardText: {
    color: "#10B584",
    fontSize: 25,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  cardImg: {
    width: "70%",
    height: "70%",
    objectFit: "cover",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },

});