import { useThemeColor } from "@/hooks/useThemeColor";
import { ViewProps } from "@/types/ThemeProps";
import { View as DefaultView } from 'react-native';

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}