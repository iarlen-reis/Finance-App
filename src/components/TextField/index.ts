import styled from "styled-components/native";

import { theme } from "@/themes";

export const Root = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 12px;
  padding: 14px 12px;

  border-radius: 4px;
  border: 1px solid ${theme.colors.sub_text};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: ${theme.fontFamily.Sora_400Regular};
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.red};
`;

export const TextField = {
  Root,
  Input,
  ErrorText,
};
