import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface ICureentUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  profilePhoto?: string;
  iat?: number;
  exp?: number;
};
