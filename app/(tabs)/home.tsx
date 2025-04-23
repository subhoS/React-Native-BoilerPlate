import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { removeAuth } from "../utils/routeGuards";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const router = useRouter();

  const handleLogout = async () => {
    await removeAuth();
    router.replace("/(auth)/login");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.logoutContainer}>
        <Button mode="contained-tonal" onPress={handleLogout} icon="logout">
          Logout
        </Button>
      </View>
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
  logoutContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  },
  subtitle: {
    marginTop: 16,
    opacity: 0.7,
  },
});

export default memo(HomeScreen);
