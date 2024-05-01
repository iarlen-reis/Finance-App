import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import { TextField } from "@/components/TextField";

interface ControlledInputProps extends TextInputProps {
  control: Control<any>;
  name: string;
}

export function ControlledInput({
  control,
  name,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "O campo é obrigatório." }}
      render={({ field: { onChange, value } }) => (
        <TextField.Input value={value} onChangeText={onChange} {...rest} />
      )}
    />
  );
}
