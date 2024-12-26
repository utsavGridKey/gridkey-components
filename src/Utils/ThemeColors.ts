import { createTheme } from "@mui/material";

export const paletteLightTheme = createTheme({
  palette: {
    primary: {
      main: "#01657F",
      light: "#01657F44",
    },
    secondary: {
      main: "#7CA392",
    },
    error: {
      main: "#E84141",
    },
    success: {
      main: "#408140",
    },
    bgColor: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
      dark: "#FFFFFF",
    },
    light: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
      dark: "#FFFFFF",
    },
    dark: {
      main: "#000000",
      light: "#000000",
      contrastText: "#000000",
      dark: "#000000",
    },
    border: {
      main: "#E2E8F0",
      light: "#E2E8F0",
      contrastText: "#E2E8F0",
      dark: "#E2E8F0",
    },
    evenRow: {
      main: "#f4f4f4",
      light: "#f4f4f4",
      contrastText: "#f4f4f4",
      dark: "#f4f4f4",
    },
  },
});

export const paletteDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#328399",
      light: "#1E2B2F",
    },
    secondary: {
      main: "#489F84",
    },
    error: {
      main: "#DE3E32",
    },
    success: {
      main: "#5DAB60",
    },
    bgColor: {
      main: "#1E1E1E",
      contrastText: "#1E1E1E",
      dark: "#1E1E1E",
      light: "#1E1E1E",
    },
    light: {
      main: "#1E1E1E",
      contrastText: "#1E1E1E",
      dark: "#1E1E1E",
      light: "#1E1E1E",
    },
    dark: {
      main: "#ffffff",
      contrastText: "#ffffff",
      dark: "#ffffff",
      light: "#ffffff",
    },
    border: {
      main: "#00465955",
      contrastText: "#00465955",
      dark: "#00465955",
      light: "#00465955",
    },
    evenRow: {
      main: "#1E2B2F",
      contrastText: "#1E2B2F",
      dark: "#1E2B2F",
      light: "#1E2B2F",
    },
  },
});
