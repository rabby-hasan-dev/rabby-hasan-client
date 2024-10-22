import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};



export interface ICureentUser {
  userId: string;
  name: string
  username: string;
  email: string;
  role: string;
  profilePicture?: string;
  status: string;
  phoneNumber: string;

}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}