import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen } from '../../screens/ProductsScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { getCartItemsCount } from '../../features/cart/store/cartStore';

export type TabsParamList = {
  Products: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export function TabsNavigator(): JSX.Element {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect((): (() => void) => {
    const interval = setInterval(() => {
      setCartCount(getCartItemsCount());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: 'Produkty',
          tabBarBadge: cartCount > 0 ? cartCount : undefined,
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
