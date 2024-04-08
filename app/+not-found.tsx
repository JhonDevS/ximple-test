import { generalStyles } from '@/styles/general-styles';
import { Text } from '@/theme/components/Text';
import { View } from '@/theme/components/View';
import { Link, Stack } from 'expo-router';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={generalStyles.container}>
        <Text style={generalStyles.title}>This screen doesn't exist.</Text>
        <Link href="/" style={generalStyles.link}>
          <Text style={generalStyles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}


