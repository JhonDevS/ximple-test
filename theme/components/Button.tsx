import { generalStyles } from "@/styles/general-styles";
import { ButtonProps } from "@/types/ThemeProps";
import { Button as NativeButton, View } from "react-native";

export function Button(props: ButtonProps) {
  return (
    <View style={generalStyles.container}>
      <NativeButton
        onPress={props.onPress}
        title={props.title}
        accessibilityLabel={props.accessibilityLabel}
      />
    </View>
  );
}
