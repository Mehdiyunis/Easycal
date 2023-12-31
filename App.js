import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import FirstPage from "./pages/FirstPage";
import CreateUserAccount from "./pages/UserPages/CreateUserAccont";
import CreateDrAccount from "./pages/DrPages/CreateDrAcount";
import LogIn from "./pages/LogIn";
import ForgotPasword from "./pages/ForgotPasword";
import Verification from "./pages/Verification";
import NewPass from "./pages/NewPass";
import PassUpdated from "./pages/PassUpdated";
import HomeUser from "./pages/UserPages/HomeUser";
import HomeDr from "./pages/DrPages/HomeDr";
import OnlineQueue from "./pages/UserPages/OnlineQueue";
import Clinics from "./pages/UserPages/Clinics";
import AddAnalyze from "./pages/DrPages/AddAnalyze";
import Appointments from "./pages/DrPages/Appointments";
import ProfileUser from "./pages/UserPages/ProfileUser";
import ProfileDr from "./pages/DrPages/ProfileDr";
import NotificationsDr from "./pages/DrPages/NotificationsDr";
import NotificationsUser from "./pages/UserPages/NotificationsUser";
import Analysis from "./pages/UserPages/Analysis";
import Hospitals from "./pages/UserPages/Hospitals";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 90,
    position: "absoute",
    backgroundColor: "#F7F7F7",
    left: 0,
    right: 0,
    elevation: 0,
    borderTopWidth: 0,
    paddingHorizontal: 80,
  },
};

function HomeUserPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeUser"
        component={HomeUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Analysis"
        component={Analysis}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnlineQueue"
        component={OnlineQueue}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Clinics"
        component={Clinics}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hospitals"
        component={Hospitals}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function HomeDrPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDr"
        component={HomeDr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAnalyze"
        component={AddAnalyze}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function ProfileUserPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsUser"
        component={NotificationsUser}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function ProfileDrPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileDr"
        component={ProfileDr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsDr"
        component={NotificationsDr}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function PagesUser() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeUserPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#10B584" : "#B2B2B2"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "mrt-sbold",
                  color: focused ? "#10B584" : "#B2B2B2",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileUserPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Octicons
                name="person-fill"
                size={24}
                color={focused ? "#10B584" : "#B2B2B2"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "mrt-sbold",
                  color: focused ? "#10B584" : "#B2B2B2",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function PagesDr() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeDrPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#10B584" : "#B2B2B2"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "mrt-sbold",
                  color: focused ? "#10B584" : "#B2B2B2",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrPages}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Octicons
                name="person-fill"
                size={24}
                color={focused ? "#10B584" : "#B2B2B2"}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "mrt-sbold",
                  color: focused ? "#10B584" : "#B2B2B2",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [fontsLoaded] = useFonts({
    "mrt-mid": require("./assets/Montserrat/static/Montserrat-Medium.ttf"),
    "mrt-bold": require("./assets/Montserrat/static/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/Montserrat/static/Montserrat-ExtraBold.ttf"),
    "mrt-sbold": require("./assets/Montserrat/static/Montserrat-SemiBold.ttf"),
    "mrt-regular": require("./assets/Montserrat/static/Montserrat-Regular.ttf"),
    "mrt-light": require("./assets/Montserrat/static/Montserrat-Light.ttf"),
    "mrt-medium": require("./assets/Montserrat/static/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateUserAccount"
          component={CreateUserAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateDrAccount"
          component={CreateDrAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasword"
          component={ForgotPasword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PassUpdated"
          component={PassUpdated}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PagesUser"
          component={PagesUser}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PagesDr"
          component={PagesDr}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
