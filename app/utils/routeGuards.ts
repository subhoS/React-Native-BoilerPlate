import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const AUTH_KEY = "auth_token";

export const requireAuth = async () => {
  try {
    const token = await AsyncStorage.getItem(AUTH_KEY);
    if (!token) {
      router.replace("/(auth)/login");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Auth check failed:", error);
    router.replace("/(auth)/login");
    return false;
  }
};

export const setAuth = async (token: string) => {
  await AsyncStorage.setItem(AUTH_KEY, token);
};

export const removeAuth = async () => {
  await AsyncStorage.removeItem(AUTH_KEY);
};

export const getAuth = async () => {
  return await AsyncStorage.getItem("auth-token");
};

// Add default export
export default {
  setAuth,
  removeAuth,
  getAuth,
};
