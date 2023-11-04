import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default Clinics = ({navigation}) => {

  const handleUnfocus = () => {
    Keyboard.dismiss();
  };

  return (
    <View  onStartShouldSetResponder={handleUnfocus}  accessible={true} style={styles.section}>
      <View style={styles.container}>
        <View
          style={{ width: "100%", position: "relative", marginVertical: 30 }}
        >
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
            }}
            
          >
            Clinics
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          
            <View style={styles.inputContiner}>
              <Image
                style={styles.absoluteImg}
                source={require("../../assets/imgs/search.png")}
              />
                <TextInput
                  style={styles.input}
                  keyboardType="ascii-capable"
                  placeholder="Enter clinic name"
                />   
            </View>

          <Pressable
            style={{
              width: 55,
              backgroundColor: "#10B584",
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/imgs/settings.png")}
              style={{ width: 24, height: 24, objectFit: "contain" }}
            />
          </Pressable>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              flex: 1,
              color: "#1F1F1F",
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            Results : 3 clinics found
          </Text>
          <Pressable style={{ width: 30, height: 30 }}>
            <Image
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              source={require("../../assets/imgs/vector.png")}
            />
          </Pressable>
        </View>

        <View style={{gap: 10}}>
          <View
            style={{
              padding: 20,
              backgroundColor: "white",
              borderRadius: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 , gap: 10}}>
              <Text
                style={{ color: "#1F1F1F", fontSize: 16, fontWeight: "700" }}
              >
                Medistyle hospital
              </Text>

              <View style={{display: 'flex', flexDirection: 'row' ,gap: 10}}>
                <Image source={require("../../assets/imgs/location.png")} />
                <Text
                  style={{ color: "#7C7C7C", fontSize: 13, fontWeight: "500" }}
                >
                  18A Əhməd Rəcəbli, Bakı
                </Text>
              </View>

              <View style={{display: 'flex' , flexWrap: 'wrap', flexDirection: 'row', gap: 10}}>
                <Text style={{backgroundColor: '#eee', borderRadius: 4 , overflow : "hidden", paddingVertical: 5, paddingHorizontal: 10, color: '#10B584', fontSize: 8, fontWeight: '600'}}>Urologiya</Text>
                <Text style={{backgroundColor: '#eee', borderRadius: 4 , overflow : "hidden", paddingVertical: 5, paddingHorizontal: 10, color: '#10B584', fontSize: 8, fontWeight: '600'}}>Laboratoriya</Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                borderRadius: 4,
                backgroundColor: "#10B584",
                paddingVertical: 6,
                paddingHorizontal: 12,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                View more
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 34,
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
  },
  container: {
    flex: 1,
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
  inputContiner: {
    position: "relative",
    flex: 1,
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
  },
});
