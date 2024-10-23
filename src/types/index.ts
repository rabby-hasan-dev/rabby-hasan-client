import { SVGProps } from "react";
import { IExperience, IProject, ITechnology } from "./project.types";

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

export type TUserName = {
  firstName: string;
  lastName: string;
};

export interface IUser {
  _id?: String;
  name?: TUserName;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: string;
  isVerified: boolean;
  status: string;
  profilePicture: string;
  bio: string;
  phone: string;
  address: string;
  website?: string;
  linkedIn?: string;
  github?: string;
  profilePictureUrl?: string;
  projects: IProject[];
  experience: IExperience[];
  technologies: ITechnology[];
  isDeleted: boolean;
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