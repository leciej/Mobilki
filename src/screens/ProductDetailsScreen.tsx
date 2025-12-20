import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { mockProducts } from '../features/products/mockProducts';
import { Button } from 'react-native';
import { addToCart } from '../features/cart/commands/addToCart';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export function ProductDetailsScreen({ route }: Props) {
  const { productId } = route.params;
  const product = mockProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Nie znaleziono produktu</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} zł</Text>
      <Text style={styles.desc}>
        Piękna akwarela, ręcznie malowana 🎨
      </Text>
      <Button
        title="Dodaj do koszyka"
        onPress={() => addToCart(product)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    color: '#555',
  },
});
