import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function RecentsScreen() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Text variant="headlineMedium">Recents</Text>
    </View>
  );
}