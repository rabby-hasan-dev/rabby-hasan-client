import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
  defaultValue?: string


}

export default function RHTextarea({
  name,
  label,
  variant = "bordered",
  placeholder,
  size,
  defaultValue

}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const currentValue = useWatch({ name });
  return (
    <Textarea {...register(name)}
      defaultValue={defaultValue}
      size={size}
      label={label}
      placeholder={placeholder}
      minRows={6}
      variant={variant}
    />
  );
}