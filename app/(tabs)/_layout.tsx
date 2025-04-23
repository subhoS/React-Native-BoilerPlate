import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer, IconButton, Text, Divider } from "react-native-paper";
import { useRouter } from "expo-router";
import { removeAuth } from "../utils/routeGuards";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Modal, Portal } from "react-native-paper";

export default function TabLayout() {
  const theme = useTheme();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleLogout = async () => {
    await removeAuth();
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <Modal
          visible={isDrawerOpen}
          onDismiss={() => setIsDrawerOpen(false)}
          contentContainerStyle={[
            styles.drawer,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <SafeAreaView style={styles.drawerContent}>
            <View style={styles.drawerHeader}>
              <Text variant="headlineSmall" style={styles.drawerTitle}>
                Menu
              </Text>
            </View>
            <Divider style={styles.divider} />
            <Drawer.Section>
              <Drawer.Item
                icon="cog"
                label="Settings"
                onPress={() => {
                  setIsDrawerOpen(false);
                  router.push("/(pages)/settings");
                }}
                style={styles.drawerItem}
              />
              <Drawer.Item
                icon="help-circle"
                label="Support"
                onPress={() => {
                  setIsDrawerOpen(false);
                  router.push("/(pages)/support");
                }}
                style={styles.drawerItem}
              />
              <Drawer.Item
                icon="logout"
                label="Logout"
                onPress={() => {
                  setIsDrawerOpen(false);
                  handleLogout();
                }}
                style={styles.drawerItem}
              />
            </Drawer.Section>
          </SafeAreaView>
        </Modal>
      </Portal>

      <Tabs
        screenOptions={{
          headerLeft: () => (
            <IconButton
              icon="menu"
              onPress={() => setIsDrawerOpen(true)}
              style={{ marginLeft: 8 }}
            />
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.outline,
          tabBarStyle: { backgroundColor: theme.colors.surface },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "heart" : "heart-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="albums"
          options={{
            title: "Albums",
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "folder-multiple" : "folder-multiple-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="recents"
          options={{
            title: "Recents",
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "history" : "history"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "bell" : "bell-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    width: "80%",
    maxWidth: 300,
    height: "100%",
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "white",
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  drawerTitle: {
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 8,
  },
  drawerItem: {
    paddingVertical: 12,
  },
});
