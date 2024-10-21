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