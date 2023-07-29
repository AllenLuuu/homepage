import type { ButtonProps } from "naive-ui";

type ButtonThemeOverrides = NonNullable<ButtonProps["themeOverrides"]>;
export const MobileButtonOverrides: ButtonThemeOverrides = {
  textColorTextHover: "rgba(255, 255, 255, 0.82)",
};