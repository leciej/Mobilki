import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import { getCart } from '../features/cart/queries/getCart';
import { getCartTotal } from '../features/cart/queries/getCartTotal';
import { addToCart } from '../features/cart/commands/addToCart';
import { decreaseFromCart } from '../features/cart/commands/decreaseFromCart';
import { removeFromCart } from '../features/cart/commands/removeFromCart';
import type { CartItem } from '../features/cart/cartStore';

export function CartScreen() {
  const [version, setVersion] = useState(0);
  const refresh = () => setVersion(v => v + 1);

  const cartItems = getCart();
  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Koszyk jest pusty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koszyk</Text>

      <FlatList
        data={cartItems}
        extraData={version}
        keyExtractor={(item: CartItem) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>
              Ilość: {item.quantity} • {item.price} zł
            </Text>

            <View style={styles.row}>
              <Button
                title="-"
                onPress={() => {
                  decreaseFromCart(item.id);
                  refresh();
                }}
              />
              <Button
                title="+"
                onPress={() => {
                  addToCart(item);
                  refresh();
                }}
              />
              <Button
                title="Usuń"
                onPress={() => {
                  removeFromCart(item.id);
                  refresh();
                }}
              />
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>Suma: {total.toFixed(2)} zł</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  item: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  total: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
  },
});
