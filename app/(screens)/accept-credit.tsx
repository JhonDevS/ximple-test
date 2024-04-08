import { RootState } from "@/store/store";
import { generalStyles } from "@/styles/GeneralStyles";
import { Button } from "@/theme/components/Button";
import { Text } from "@/theme/components/Text";
import { View } from "@/theme/components/View";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function AcceptCreditScreen() {
  const credits = useSelector((state: RootState) => state.credits.data);

  return (
    <View style={generalStyles.container}>
      <SafeAreaView>
        <View>
          <Text style={generalStyles.title}>Acepta tu credito</Text>
          <Text style={generalStyles.subtitle}>
            Confirma que has seleccionado el crédito deseado.
          </Text>
          <Text style={generalStyles.creditSelectedLabel}>
            Crédito seleccionado:
          </Text>
          <View style={generalStyles.creditOptionDisabled}>
            <Text style={generalStyles.creditOptionName}>
              Credito {credits[0].id}
            </Text>
            <Text style={generalStyles.creditOptionPrice}>
              {credits[0].amount}
            </Text>
          </View>
          <Button title="" disabled={false} onPress={() => {}}>
            <Text style={generalStyles.buttonLabel}>Contratar</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
