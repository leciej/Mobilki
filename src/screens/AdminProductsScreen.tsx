import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';

import {
  mockProducts,
  Product,
} from '../features/products/mockProducts';

export function AdminProductsScreen() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = () => {
    if (!name || !price) return;

    setProducts(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name,
        price: Number(price),
      },
    ]);

    setName('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADMIN – Produkty</Text>

      <TextInput
        style={styles.input}
        placeholder="Nazwa produktu"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Cena"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Pressable style={styles.addButton} onPress={addProduct}>
        <Text style={styles.addText}>➕ Dodaj produkt</Text>
      </Pressable>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.price} zł</Text>
          </View>
        )}
      />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#2e7d32',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  addText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
});
