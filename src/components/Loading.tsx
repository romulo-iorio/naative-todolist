import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export const Loading = () => (
  <View className="flex-1 items-center justify-center bg-gray-600">
    <ActivityIndicator color={colors.white} />
  </View>
);
