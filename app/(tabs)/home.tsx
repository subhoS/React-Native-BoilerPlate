import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant="headlineMedium">Welcome Home</Text>
      <Text variant="bodyLarge" style={styles.subtitle}>
        You are successfully logged in!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    marginTop: 16,
    opacity: 0.7,
  },
});

export default memo(HomeScreen);
