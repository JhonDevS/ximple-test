import { useThemeColor } from "@/hooks/useThemeColor";
import { TextProps } from "@/types/ThemeProps";
import { Text as DefaultText } from 'react-native';

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}