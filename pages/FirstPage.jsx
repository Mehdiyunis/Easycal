import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  PixelRatio,
} from "react-native";
// import global from "../styles";

export default function FirstPage({ navigation }) {
  // console.log(global.Montserrat)
  return (
    <View style={styles.continer}>
      <View style={styles.textContainer}>
        <Text style={styles.textWelcome}>Welcome</Text>
        <Text style={styles.textLogSign}>Log in or sign up</Text>
      </View>
      <Image
        style={styles.logSignImg}
        source={require("../assets/imgs/LoginImg.png")}
      />
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btnLogIn}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.text}>Log In</Text>
        </Pressable>

        <Pressable
          style={styles.btnSignUp}
          onPress={() => navigation.navigate("CreateUserAccount")}
        >
          <Text style={styles.textOther}>Sign Up</Text>
        </Pressable>

        <Pressable
          style={styles.btnSignUp}
          onPress={() => navigation.navigate("CreateDrAccount")}
        >
          <Text style={styles.textOther}>Sign up (For doctors)</Text>
        </Pressable>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  continer: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 34,
    backgroundColor: "#F7F7F7",
  },
  textWelcome: {
    color: "#1F1F1F",
    fontSize: 22,
    fontWeight: "600",
  },
  textLogSign: {
    color: "#7C7C7C",
    fontSize: 22,
    fontWeight: "700",
  },
  textContainer: {
    paddingTop: 32,
    alignItems: "center",
    display: "flex",
    gap: PixelRatio.getPixelSizeForLayoutSize(20),
    // gap: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  logSignImg: {
    width: 360,
    objectFit: "cover",
    height: 360,
  },

  btnContainer: {
    display: "flex",
    gap: 20,
    paddingBottom: 33,
    width: 315,
  },

  btnLogIn: {
    backgroundColor: "#10B584",
    borderRadius: 4,
    paddingVertical: 18,
  },

  btnSignUp: {
    backgroundColor: "#eee",
    borderRadius: 4,
    paddingVertical: 18,
  },

  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },

  textOther: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#10B584",
  },
});
