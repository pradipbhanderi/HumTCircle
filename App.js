import React from "react";
import { Phone } from "./src/screens/phone";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Otp } from "./src/screens/otp";
import { Register } from "./src/screens/register";
import { DashBord } from "./src/screens/dashbord";
import { MyQueriesScreen } from "./src/screens/myQueriesScreen";
import { Location } from "./src/screens/location";
import { Comment } from "./src/screens/comment";

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={"phone"} component={Phone} />
        <Stack.Screen name={"otp"} component={Otp} />
        <Stack.Screen name={"register"} component={Register} />
        <Stack.Screen name={"dashBord"} component={DashBord} />
        <Stack.Screen name={"myQueriesScreen"} component={MyQueriesScreen} />
        <Stack.Screen name={"location"} component={Location} />
        <Stack.Screen name={"comment"} component={Comment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
