import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {
  CartItem,
  getCartSnapshot,
  getCartTotal,
  removeFromCartStore,
  clearCartStore,
} from '../features/cart/store/cartStore';

export function CartScreen() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const refresh = useCallback(() => {
    setItems(getCartSnapshot());
    setTotal(getCartTotal());
  }, []);

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koszyk</Text>

      {items.length === 0 ? (
        <Text>Koszyk jest pusty</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={item => item.product.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <View style={styles.info}>
                  <Text style={styles.name}>
                    {item.product.name}
                  </Text>
                  <Text style={styles.meta}>
                    {item.quantity} × {item.product.price} zł
                  </Text>
                </View>

                <Pressable
                  style={styles.removeBtn}
                  onPress={() => {
                    removeFromCartStore(item.product.id);
                    refresh();
                  }}
                >
                  <Text style={styles.removeText}>
                    Usuń
                  </Text>
                </Pressable>
              </View>
            )}
          />

          <Text style={styles.total}>
            Suma: {total} zł
          </Text>

          <Pressable
            style={styles.clearBtn}
            onPress={() => {
              clearCartStore();
              refresh();
            }}
          >
            <Text style={styles.clearText}>
              Wyczyść koszyk
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  meta: {
    color: '#666',
    marginTop: 2,
  },
  removeBtn: {
    backgroundColor: '#d32f2f',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeText: {
    color: '#fff',
    fontWeight: '600',
  },
  total: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
  },
  clearBtn: {
    marginTop: 10,
    backgroundColor: '#455a64',
    padding: 12,
    borderRadius: 6,
  },
  clearText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
