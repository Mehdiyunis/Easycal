import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";


export default Home = ({navigation}) => {


  const data = [
    {
      id: 1,
      title: "Analysis",
      image: require("../../assets/imgs/servicesOne.jpeg"),
      url:"OnlineQueue",
    },
    {
      id: 2,
      title: "Online queue",
      image: require("../../assets/imgs/services2.png"),
      url:"OnlineQueue",
    },
    {
      id: 3,
      title: "Clinics",
      image: require("../../assets/imgs/services3.jpeg"),
      url:"Clinics",
    },
    {
      id: 4,
      title: "Check-up",
      image: require("../../assets/imgs/services4.jpeg"),
      url:"OnlineQueue",
    },
  ];

  return (
    <View style={styles.continer}>
      <Image style={styles.logo} source={require("../../assets/imgs/logo.png")} />

      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.welcome}>Welcome back, </Text>
          <Text style={styles.userName}>Mehdi!</Text>
        </View>

        <View style={styles.cards}>
          {data.map((item) => (
            <Pressable onPress={() => navigation.navigate(item.url)} key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Image style={styles.cardImg} source={item.image} />
            </Pressable>
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
    width: 170,
    height: 200,
    display: "flex",
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
  },
  cardText: {
    color: "#10B584",
    fontSize: 16,
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
