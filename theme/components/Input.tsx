import { generalStyles } from "@/styles/general-styles";
import { TextInput, View } from "react-native";

export function Input(props: TextInput) {
  return (
    <View style={generalStyles.container}>
      <TextInput
        style={generalStyles.input}
        placeholder={props.props.placeholder}
        onChangeText={props.props.onChangeText}
        value={props.props.value}
      />
    </View>
  );
}
