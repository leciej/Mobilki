import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../auth/AuthContext';

export function LoginScreen() {
  const { loginAsUser, loginAsAdmin } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logowanie (demo)</Text>

      <Button
        title="Zaloguj jako użytkownik"
        onPress={loginAsUser}
      />

      <View style={{ height: 12 }} />

      <Button
        title="Zaloguj jako admin"
        onPress={loginAsAdmin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
});
