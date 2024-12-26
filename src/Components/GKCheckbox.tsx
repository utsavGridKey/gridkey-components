import { Checkbox, CheckboxProps } from "@mui/material";
import { IoCheckboxSharp } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const GKCheckbox = (
  props: CheckboxProps & { disableLeftPadding?: boolean; padding?: any }
) => {
  const { disableLeftPadding, padding } = props;
  return (
    <Checkbox
      {...props}
      icon={<MdCheckBoxOutlineBlank size={24} />}
      checkedIcon={<IoCheckboxSharp size={24} />}
      sx={{
        paddingLeft: disableLeftPadding ? 0 : padding,
      }}
    />
  );
};

export default GKCheckbox;
