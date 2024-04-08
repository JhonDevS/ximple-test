import { UserInfo } from "@/interfaces/UserInfo";
import { generalStyles } from "@/styles/GeneralStyles";
import { Button } from "@/theme/components/Button";
import { Input } from "@/theme/components/Input";
import { Text } from "@/theme/components/Text";
import { View } from "@/theme/components/View";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchCreditScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfo>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <View style={generalStyles.container}>
      <SafeAreaView>
        <View>
          <Text style={generalStyles.title}>Descubre tu credito</Text>
          <Text style={generalStyles.subtitle}>
            Llena el siguiente formulario para conocer los créditos que tenemos
            disponibles para ti.
          </Text>
          <Text style={generalStyles.label}>Nombre</Text>
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                onChangeText={field.onChange}
                value={field.value}
                style={generalStyles.input}
                placeholder="Nombre"
              />
            )}
            name="name"
            rules={{
              required: "Debes ingresar un nombre",
            }}
          />
          {errors.name && (
            <Text style={generalStyles.error}>{errors.name.message + ""}</Text>
          )}
          <Text style={generalStyles.label}>Correo</Text>
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                onChangeText={field.onChange}
                value={field.value}
                style={generalStyles.input}
                placeholder="Correo"
              />
            )}
            name="email"
            rules={{
              required: "Debes ingresar un correo",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Ingrese un correo electronico valido",
              },
            }}
          />
          {errors.email && (
            <Text style={generalStyles.error}>{errors.email.message + ""}</Text>
          )}
          <Button title="" disabled={!isValid} onPress={handleSubmit(onSubmit)}>
            <Text style={generalStyles.buttonLabel}>Descubrir créditos</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}
