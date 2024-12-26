import { Radio, RadioProps } from "@mui/material";
import { RiRadioButtonFill } from "react-icons/ri";
import { paletteLightTheme } from "../Utils/ThemeColors";

const GKRadio = (props: RadioProps) => {
  return (
    <Radio
      {...props}
      checkedIcon={
        <RiRadioButtonFill
          size={22}
          color={paletteLightTheme.palette.primary.main}
        />
      }
    />
  );
};

export default GKRadio;
