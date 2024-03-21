import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#d1d5db"
      className="h-14 w-full rounded border border-green-950 p-4 font-regular text-base text-green-950"
      {...rest}
    />
  );
}
