import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { useAuth } from '../auth/AuthContext';
import { TabsNavigator } from './TabsNavigator/TabsNavigator';
import { AdminNavigator } from './AdminNavigator';


export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Admin: undefined;
  Home: undefined;
  Products: undefined;
  ProductDetails: { productId: string };
  Gallery: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const { isLoggedIn, role } = useAuth();

  return (
  <Stack.Navigator>
    {!isLoggedIn ? (
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    ) : role === 'ADMIN' ? (
      <Stack.Screen
        name="Admin"
        component={AdminNavigator}
        options={{ headerShown: false }}
      />
    ) : (
      <Stack.Screen
        name="Main"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    )}
  </Stack.Navigator>
);
}