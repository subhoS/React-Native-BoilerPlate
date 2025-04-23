import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme, List, IconButton } from "react-native-paper";
import { Stack, useRouter } from "expo-router";

export default function SettingsScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Stack.Screen
        options={{
          title: "Settings",
          headerShown: true,
          headerLeft: () => (
            <IconButton icon="arrow-left" onPress={() => router.back()} />
          ),
        }}
      />
      <List.Section style={styles.section}>
        <List.Subheader>Account Settings</List.Subheader>
        <List.Item
          title="Profile"
          left={(props) => <List.Icon {...props} icon="account" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Notifications"
          left={(props) => <List.Icon {...props} icon="bell" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Privacy"
          left={(props) => <List.Icon {...props} icon="shield-account" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section style={styles.section}>
        <List.Subheader>App Settings</List.Subheader>
        <List.Item
          title="Language"
          description="English"
          left={(props) => <List.Icon {...props} icon="translate" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Theme"
          description="Light"
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: "white",
  },
});
