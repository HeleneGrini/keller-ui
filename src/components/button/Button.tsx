import * as React from "react";
import { classes } from "./button.styles";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = (props: Props) => {
  return <button className={classes.button}>Hello </button>;
};
