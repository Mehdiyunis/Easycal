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
      title: "Add analyze",
      image: require("../../assets/imgs/drservice1.png"),
      url:"AddAnalyze"
    },
    {
      id: 2,
      title: "Appointments",
      image: require("../../assets/imgs/drservice2.jpeg"),
      url:"Appointments"
    },
  ];

  return (
    <View style={styles.continer}>
      <Image style={styles.logo} source={require("../../assets/imgs/logo.png")} />

      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.welcome}>Welcome back, </Text>
          <Text style={styles.userName}>Tünzalə!</Text>
        </View>

        <View style={styles.cards}>
          {data.map((item) => (
            <Pressable key={item.id} style={styles.card} onPress={() => navigation.navigate(item.url)}>
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
    fontFamily : "mrt-sbold",
  },
  userName: {
    color: "#1F1F1F",
    fontSize: 20,
    fontWeight: "600",
    fontFamily : "mrt-sbold",
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
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
    fontFamily : "mrt-sbold",
  },
  cardImg: {
    width: "70%",
    height: "70%",
    objectFit: "contain",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },

});
