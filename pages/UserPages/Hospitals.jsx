import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Hospitals = ({ navigation, route }) => {
  const hospital = route.params.item;

  const [selected, setSelected] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const iconTransform = openDropDown ? [] : [{ rotate: "180deg" }];

  const data = [
    { key: 1, value: "Doctors" },
    { key: 2, value: "Facilities" },
    { key: 3, value: "Contact" },
  ];

  const doctors = [
    {
      id: 1,
      imgURL: require("../../assets/imgs/userPhoto1.png"),
      name: "Mehdi Quluzadeh",
      specialty: "Surgeon",
      star: [true, true, true, true, false],
    },
    {
      id: 2,
      imgURL: require("../../assets/imgs/userPhoto2.png"),
      name: "Islam Salamzade",
      specialty: "Dermatologist",
      star: [true, true, true, false, false],
    },
    {
      id: 3,
      imgURL: require("../../assets/imgs/userPhoto3.png"),
      name: "Tunzale Majidova",
      specialty: "Surgeon",
      star: [true, true, false, false, false],
    },
    {
      id: 4,
      imgURL: require("../../assets/imgs/userPhoto4.png"),
      name: "Ziya Niyazli",
      specialty: "Ophthalmology",
      star: [true, true, true, true, false],
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
          source={require("../../assets/imgs/infoBg.png")}
        />
      </View>

      <View style={{ width: "100%", position: "relative", marginVertical: 30 }}>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("Clinics")}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            style={styles.leftArrow}
          />
        </Pressable>

        <Text style={styles.headText}>{hospital.name}</Text>
      </View>

      <Pressable
        style={styles.inputContiner}
        onPress={() => setOpenDropDown(!openDropDown)}
      >
        <View>
          <Image
            style={styles.absoluteImg}
            source={require("../../assets/imgs/iIcon.png")}
          />

          <TextInput
            editable={false}
            style={styles.input}
            keyboardType="ascii-capable"
            placeholder={"Select your company"}
            value={selected}
          />

          <Image
            style={[styles.rightImg, { transform: iconTransform }]}
            source={require("../../assets/imgs/up_icon.png")}
          />
        </View>

        <View
          nestedScrollEnabled={true}
          style={{
            display: openDropDown ? "block" : "none",
            paddingTop: 6,
          }}
        >
          {data.map((item) => (
            <Text
              key={item.key}
              onPress={() => {
                setSelected(item.value);
                setOpenDropDown(!openDropDown);
              }}
              style={styles.dropValue}
            >
              {item.value}
            </Text>
          ))}
        </View>
      </Pressable>

      {selected == "Doctors" ? (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {doctors.map((item) => (
            <View key={item.id} style={{ width: "50%", padding: 5 }}>
              <TouchableOpacity style={styles.card}>
                <Image source={item.imgURL} style={styles.cardImg} />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.specialty}</Text>
                <View style={{ flexDirection: "row" }}>
                  {item.star.map((st, i) =>
                    st ? (
                      <Image
                        key={i}
                        source={require("../../assets/imgs/starFull.png")}
                        style={styles.star}
                      />
                    ) : (
                      <Image
                        key={i}
                        source={require("../../assets/imgs/starEmpty.png")}
                        style={styles.star}
                      />
                    )
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : selected == "" ? (
        ""
      ) : (
        <Text style={styles.coming}>Coming soon ;{")"}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 34,
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
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

  headText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#10B584",
    textAlign: "center",
    fontFamily: "mrt-bold",
  },
  inputContiner: {
    position: "relative",
    marginBottom: 20,
    justifyContent: "flex-end",
  },
  absoluteImg: {
    position: "absolute",
    display: "flex",
    height: "100%",
    alignItems: "center",
    objectFit: "contain",
    zIndex: 1,
    top: 0,
    left: 12,
  },
  input: {
    backgroundColor: "#eee",
    paddingVertical: 18,
    paddingLeft: 38,
    paddingRight: 8,
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 4,
    color: "#1F1F1F",
    fontFamily: "mrt-sbold",
  },
  rightImg: {
    position: "absolute",
    display: "flex",
    height: "100%",
    alignItems: "center",
    objectFit: "contain",
    zIndex: 1,
    top: 0,
    right: 20,
    transform: [{ rotate: "180deg" }],
  },
  dropValue: {
    padding: 11,
    fontSize: 14,
    fontWeight: "600",
    backgroundColor: "#eee",
    color: "#1F1F1F",
    marginBottom: 2,
    borderRadius: 4,
    fontFamily: "mrt-sbold",
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 12,
    gap: 6,
  },

  cardImg: {
    width: 72,
    height: 72,
    objectFit: "cover",
    borderRadius: 50,
    marginBottom: 4,
  },

  title: {
    color: "#1F1F1F",
    fontSize: 14,
    fontFamily: "mrt-sbold",
  },

  text: {
    color: "#7C7C7C",
    fontSize: 12,
    fontFamily: "mrt-medium",
  },

  star: {
    width: 14,
    height: 14,
    objectFit: "contain",
  },
  coming: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "mrt-sbold",
    color: "#7C7C7C",
  },
});
