import { generalStyles } from '@/styles/general-styles';
import { Text } from '@/theme/components/Text';
import { View } from '@/theme/components/View';

export default function SearchCreditScreen() {
  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.title}>Tab One</Text>
      <View style={generalStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
