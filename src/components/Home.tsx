import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { StatusBar, Text, View } from "react-native";

import { Loading } from "./Loading";
import { Input } from "./Input";

export const Home = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <View className="bg-gray-600 flex-1 justify-center items-center">
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Input />
    </View>
  );
};
