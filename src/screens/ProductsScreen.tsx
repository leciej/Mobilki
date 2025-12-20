import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { mockProducts, Product } from '../features/products/mockProducts';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export function ProductsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produkty</Text>

      <FlatList
        data={mockProducts}
        keyExtractor={(item: Product) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('ProductDetails', {
                productId: item.id,
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.price} zł</Text>
          </Pressable>
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
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
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
