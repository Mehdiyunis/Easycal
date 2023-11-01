import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstPage from "./pages/FirstPage";
import CreateUserAccount from "./pages/UserPages/CreateUserAccont";
import CreateDrAccount from "./pages/DrPages/CreateDrAcount";
import LogIn from "./pages/LogIn";
import ForgotPasword from "./pages/ForgotPasword";
import Verification from "./pages/Verification";
import NewPass from "./pages/NewPass";
import PassUpdated from "./pages/PassUpdated";
import HomeUser from "./pages/HomeUser";
import HomeDr from "./pages/HomeDr";
import OnlineQueue from "./pages/OnlineQueue";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  // tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    height: 100,
    position: 'absoute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    borderWidth: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
        name="OnlineQueue"
        component={OnlineQueue}
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
    </Stack.Navigator>
  );
}
function Profil() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={Profil}
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
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
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


