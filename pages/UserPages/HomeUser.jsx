import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Pressable,
  PixelRatio,
} from "react-native";


export default Home = ({navigation}) => {

/*   const user = firebase.auth().currentUser;
  const userName = user.displayName; */


  const data = [
    {
      id: 1,
      title: "Analysis",
      image: require("../../assets/imgs/services1.jpg"),
      url:"Analysis",
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
      image: require("../../assets/imgs/services3.png"),
      url:"Clinics",
    },
    {
      id: 4,
      title: "Check-up",
      image: require("../../assets/imgs/services4.jpg"),
      url:"",
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
    justifyContent : "space-between"
  },
  card: {
    backgroundColor: "#FFFFFF",
    fontSize : "16px",
    width: "48%",
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
