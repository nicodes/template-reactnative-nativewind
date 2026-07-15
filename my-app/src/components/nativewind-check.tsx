import { Text, View } from 'react-native';

export function NativeWindCheck() {
  return (
    <View className="w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
      <Text className="text-center text-xl font-bold text-emerald-700">NativeWind is working</Text>
      <Text className="mt-1 text-center text-sm text-emerald-600">
        This card is styled entirely with Tailwind classes.
      </Text>
    </View>
  );
}
