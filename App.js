import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Component, useState } from "react";
import Manager from "./Manager";
import About from "./About";

const Stack = createNativeStackNavigator();
const Home = (props) => {
  const nav = props.navigation;
  return (
    <View> 
      <Text>Home</Text>
      <Image 
        style = {styles.logo}
        source = {{
          uri: "https://media.istockphoto.com/id/688550958/vi/vec-to/d%E1%BA%A5u-c%E1%BB%99ng-m%C3%A0u-%C4%91en-k%C3%BD-hi%E1%BB%87u-t%C3%ADch-c%E1%BB%B1c.jpg?s=612x612&w=0&k=20&c=ZJYNJ7-s-CEFxNFaj6y4aYQmLlFe9wETgoAX5xj_wWk=",
        }}
        />
      <Button 
        title="Sang Manager"
        onPress={() => nav.navigate("Manager", {name: "Nguoi dung"})}
        />
      <Button
        title="Sang About"
        onPress={() => nav.navigate("About",{name: "Nguoi dung"})}
      />
    </View>
  )
}
const list = [
  {
    name: "bun bo",
    price: 3000,
  },
  {
    name: "Pho",
    price: 3000,
  },
  {
    name: "Com",
    price: 3000,
  },
  {
    name: "mien",
    price: 3000,
  },
  {
    name: "luon",
    price: 3000,
  },
];

  const student ={
    name: "Pham Quang Thai",
    class: "CP17301",
    id: "PH11111",
  };

export default class App extends Component {
  render() {
    const numbers = [1, 2, 3];
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Manager"
            component={Manager}
            initialParams={{ list }}
          />
          <Stack.Screen
            name="About"
            component={About}
            initialParams={{ student }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 400,
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
