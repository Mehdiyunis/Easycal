import { View, Image, Text, StyleSheet, Pressable } from "react-native";

export default ProfileDr = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: "My profile",
      image: require("../../assets/imgs/personImg.jpeg"),
      url: "OnlineQueue",
    },
    {
      id: 2,
      title: "Notifications",
      image: require("../../assets/imgs/notif.jpeg"),
      url: "OnlineQueue",
    },
    {
      id: 3,
      title: "Settings",
      image: require("../../assets/imgs/sett.jpeg"),
      url: "Clinics",
    },

  ];

  return (
    <View style={styles.continer}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          color: "#10B584",
          textAlign: "center",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        Profile
      </Text>

      <View style={{ flexDirection: "row", gap: 14, alignItems: "center" }}>
        <Image
          source={require("../../assets/imgs/isiImg.png")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            objectFit: "cover",
          }}
        />

        <View style={{ justifyContent: "center" }}>
          <Text style={{ color: "#1F1F1F", fontSize: 20, fontWeight: "bold" }}>
            John Doe
          </Text>
          <Text style={{ color: "#7C7C7C", fontSize: 12, fontWeight: "500" }}>
            islam.salamzade.191@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.cards}>
        {data.map((item) => (
          <View key={item.id} style={{width: '50%', height: 230, paddingHorizontal: 5, paddingVertical: 15}}>
            <Pressable
              onPress={() => navigation.navigate(item.url)}
             
              style={styles.card}
            >
              <Text style={styles.cardText}>{item.title}</Text>
              <Image style={styles.cardImg} source={item.image} />
            </Pressable>
          </View>
        ))}
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
  cards: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 25
  },
  card: {
    backgroundColor: "#FFFFFF",
    fontSize: "16px",
    width: "100%",
    height: "100%",
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
    objectFit: "contain",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
});
