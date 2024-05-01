import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

import { ControlledInput } from "@/components/ControlledInput";
import { TextField } from "@/components/TextField";
import { Styles } from "@/screens/Login/styles";
import { theme } from "@/themes";

interface FormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSignIn = (data: FormData) => {
    console.log(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <Styles.Container>
        <Styles.Header>
          <Styles.Logo
            resizeMode="contain"
            source={require("../../assets/logo.png")}
          />
          <Styles.TitleContainer>
            <Styles.Title>Uma conta</Styles.Title>
            <Styles.Title>múltiplas possibilidades</Styles.Title>
          </Styles.TitleContainer>
        </Styles.Header>
        <Styles.FormContainer
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextField.Root>
            <MaterialIcons
              name="email"
              size={21}
              color={theme.colors.sub_text}
            />
            <ControlledInput
              name="email"
              control={control}
              placeholder="E-mail"
            />
            {errors.email && (
              <TextField.ErrorText>{errors.email.message}</TextField.ErrorText>
            )}
          </TextField.Root>
          <TextField.Root>
            <MaterialIcons
              size={21}
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
              <TextField.ErrorText>
                {errors.password.message}
              </TextField.ErrorText>
            )}
          </TextField.Root>
          <Styles.FogotPasswordContainer>
            <Styles.FogotPassword>Esqueceu a senha?</Styles.FogotPassword>
          </Styles.FogotPasswordContainer>
          <Styles.LoginButton
            activeOpacity={0.8}
            onPress={handleSubmit(handleSignIn)}
          >
            <Styles.LoginButtonText>Fazer login</Styles.LoginButtonText>
          </Styles.LoginButton>
          <Styles.NotExistAccountContainer>
            <Styles.NotExistAccountText>
              Não possui uma conta?
            </Styles.NotExistAccountText>
            <Styles.NotExistAccountLink to="/register">
              Criar conta
            </Styles.NotExistAccountLink>
          </Styles.NotExistAccountContainer>
        </Styles.FormContainer>
      </Styles.Container>
    </TouchableWithoutFeedback>
  );
}
