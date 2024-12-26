import { PaletteColor } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    lightBg: true;
    secondaryDark: true;
    landingBtn: true;
    link: true;
  }
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}
declare module "@mui/material/Accordion" {
  interface AccordianPropsVariantOverrides {
    dark: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    bgColor: PaletteColor;
    light: PaletteColor;
    dark: PaletteColor;
    border: PaletteColor;
    evenRow: PaletteColor;
  }
  interface PaletteOptions {
    bgColor: PaletteColor;
    dark: PaletteColor;
    border: PaletteColor;
    light: PaletteColor;
    evenRow: PaletteColor;
  }
}
