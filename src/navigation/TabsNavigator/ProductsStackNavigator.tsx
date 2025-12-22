import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProductsStackNavigator } from './ProductsStackNavigator';
import { ProfileScreen } from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProductsTab"
        component={ProductsStackNavigator}
        options={{
          title: 'Produkty',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
}
