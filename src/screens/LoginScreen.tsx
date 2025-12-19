import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../auth/AuthContext';

export function LoginScreen() {
  const { login } = useAuth();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="ZALOGUJ (DEMO)"
        onPress={login}
      />
    </View>
  );
}
