import { Link } from "@react-navigation/native";
import styled from "styled-components/native";

import { theme } from "@/themes";

const Container = styled.View`
  flex: 1;
  background: ${theme.colors.white};
  padding-top: 100px;
`;

const Header = styled.View`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const Logo = styled.Image`
  width: 160px;
  height: 100px;
`;

const TitleContainer = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};
`;

const FormContainer = styled.KeyboardAvoidingView`
  flex: 1;
  gap: 20px;
  padding: 0 8px;

  margin-top: 40px;
`;

const FogotPasswordContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const FogotPassword = styled.Text`
  font-size: 14px;

  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.red};
`;

const LoginButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 48px;
  border-radius: 4px;

  background: ${theme.colors.errie_black};
`;

const LoginButtonText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.white};
`;

const NotExistAccountContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const NotExistAccountText = styled.Text`
  font-size: 13px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.errie_black};
`;

const NotExistAccountLink = styled(Link)`
  font-size: 13px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.red};
`;

export const Styles = {
  Container,
  Header,
  Logo,
  Title,
  TitleContainer,
  FormContainer,
  FogotPasswordContainer,
  FogotPassword,
  LoginButton,
  LoginButtonText,
  NotExistAccountContainer,
  NotExistAccountText,
  NotExistAccountLink,
};
