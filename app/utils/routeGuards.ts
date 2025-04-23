import AsyncStorage from '@react-native-async-storage/async-storage';

export const requireAuth = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return !!token;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

export const setAuth = async (token: string) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.error('Error setting authentication:', error);
  }
};

export const removeAuth = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    console.error('Error removing authentication:', error);
  }
};
