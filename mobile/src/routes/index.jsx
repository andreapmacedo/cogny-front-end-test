import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen 
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}