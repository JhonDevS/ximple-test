import { Credit } from "@/interfaces/Credit";
import { fetchCredits } from "@/store/actions/creditsActions";
import { saveSelectedCredit } from "@/store/reducers/creditsReducer";
import { RootState } from "@/store/store";
import { generalStyles } from "@/styles/GeneralStyles";
import { Button } from "@/theme/components/Button";
import { Text } from "@/theme/components/Text";
import { View } from "@/theme/components/View";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function AvailableCreditsComponent({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const credits = useSelector((state: RootState) => state.credits.data);
  const dispatch = useDispatch();
  const [selectedPlan, setSelectedPlan] = useState<Credit>();
  const router = useRouter();

  useEffect(() => {
    if (isVisible) {
      fetchCredits(dispatch);
    }
  }, [isVisible]);

  const moveToLastView = () => {
    dispatch(saveSelectedCredit([selectedPlan]));
    router.replace("/(screens)/accept-credit");
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={generalStyles.modalBackground}>
        <View style={generalStyles.modalContent}>
          <Text style={generalStyles.title}>¡Felicidades!</Text>
          <Text style={generalStyles.subtitle}>
            Encontramos estos créditos perfectos para ti:
          </Text>
          {credits.map((credit, i) => {
            return (
              <View
                key={i}
                style={
                  selectedPlan === credit
                    ? generalStyles.creditOption
                    : generalStyles.creditOptionDisabled
                }
                onTouchEnd={() => {
                  setSelectedPlan(credit);
                }}
              >
                <Text style={generalStyles.creditOptionName}>Credito {i}</Text>
                <Text style={generalStyles.creditOptionPrice}>
                  {credit.amount}
                </Text>
              </View>
            );
          })}
          <Button
            title=""
            disabled={!selectedPlan}
            onPress={() => moveToLastView()}
          >
            <Text style={generalStyles.buttonLabel}>Descubrir créditos</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
}
