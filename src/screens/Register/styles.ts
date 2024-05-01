import { Link } from "@react-navigation/native";
import styled from "styled-components/native";

import { theme } from "@/themes";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  gap: 50px;
`;

const Header = styled.View`
  align-items: center;
  justify-content: center;
  gap: 36px;

  padding-top: 100px;
`;

const Logo = styled.Image`
  width: 160px;
  height: 100px;
`;

const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;

  font-family: ${theme.fontFamily.Sora_400Regular};
`;

const Form = styled.View`
  gap: 20px;
  padding: 0 8px;
`;

const RegisterButton = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: ${theme.colors.errie_black};
`;

const RegisterButtonText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.white};
`;

const ExistAccountContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const ExistAccountText = styled.Text`
  font-size: 13px;
  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.errie_black};
`;

const ExistAccountLink = styled(Link)`
  font-size: 13px;
  letter-spacing: 1px;
  font-family: ${theme.fontFamily.Sora_400Regular};

  color: ${theme.colors.red};
`;

export const Styles = {
  Container,
  Header,
  Logo,
  TitleContainer,
  Title,
  Form,
  RegisterButton,
  RegisterButtonText,
  ExistAccountContainer,
  ExistAccountText,
  ExistAccountLink,
};
