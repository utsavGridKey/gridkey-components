import type { Navigation } from "@toolpad/core";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeContainer } from "./Utils/Theme";

const NAVIGATION: Navigation = [
  {
    segment: "buttons",
    title: "Button",
  },
  {
    segment: "tabs",
    title: "Tabs",
  },
  {
    segment: "iconStory",
    title: "Icons",
  },
  {
    segment: "tableStory",
    title: "Table",
  },
  {
    segment: "inputStory",
    title: "Inputs",
  },
];

const BRANDING = {
  title: "My Toolpad Core App",
};

export default function App() {
  const { theme } = ThemeContainer();

  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING} theme={theme}>
      <Outlet />
    </AppProvider>
  );
}
