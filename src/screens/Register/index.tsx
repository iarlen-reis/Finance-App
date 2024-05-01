import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useForm } from "react-hook-form";

import { ControlledInput } from "@/components/ControlledInput";
import { TextField } from "@/components/TextField";
import { Styles } from "@/screens/Register/styles";
import { theme } from "@/themes";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleRegister = (data: FormData) => {
    console.log(data);
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Logo source={require("../../assets/logo.png")} />
        <Styles.TitleContainer>
          <Styles.Title>Crie uma conta</Styles.Title>
          <Styles.Title>gratuita</Styles.Title>
        </Styles.TitleContainer>
      </Styles.Header>
      <Styles.Form>
        <TextField.Root>
          <Feather name="user" size={20} color={theme.colors.sub_text} />
          <ControlledInput
            name="name"
            placeholder="Nome completo"
            control={control}
          />
          {errors.name && (
            <TextField.ErrorText>{errors.name.message}</TextField.ErrorText>
          )}
        </TextField.Root>
        <TextField.Root>
          <MaterialIcons name="email" size={20} color={theme.colors.sub_text} />
          <ControlledInput
            name="email"
            placeholder="E-mail"
            control={control}
          />
          {errors.email && (
            <TextField.ErrorText>{errors.email.message}</TextField.ErrorText>
          )}
        </TextField.Root>
        <TextField.Root>
          <MaterialIcons
            size={20}
            name="password"
            color={theme.colors.sub_text}
          />
          <ControlledInput
            name="password"
            secureTextEntry
            control={control}
            placeholder="Senha"
          />
          {errors.password && (
            <TextField.ErrorText>{errors.password.message}</TextField.ErrorText>
          )}
        </TextField.Root>
        <Styles.RegisterButton
          activeOpacity={0.8}
          onPress={handleSubmit(handleRegister)}
        >
          <Styles.RegisterButtonText>Criar conta</Styles.RegisterButtonText>
        </Styles.RegisterButton>
        <Styles.ExistAccountContainer>
          <Styles.ExistAccountText>
            Ja possui uma conta?
          </Styles.ExistAccountText>
          <Styles.ExistAccountLink to="/login">
            Faça login
          </Styles.ExistAccountLink>
        </Styles.ExistAccountContainer>
      </Styles.Form>
    </Styles.Container>
  );
}
