import { InputLabel, Typography, styled } from "@mui/material";
import {
  LocalizationProvider,
  TimePicker,
  TimePickerProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { ThemeContainer } from "../Utils/Theme";

interface GKDatePickerProps {
  inputLabel?: string;
  id?: string;
  name?: string;
  requiredField?: boolean;
  error?: boolean;
  helperText?: string;
}

const CustomDatePicker = styled(TimePicker)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root .MuiInputBase-input": {
    padding: "12px 14px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {
    border: `solid 1px`,
  },
  "& .MuiOutlinedInput-root": {
    height: "42px !important",
    borderRadius: 8,
    paddingRight: "18px !important",
  },
  "& .MuiFormHelperText-root ": {
    margin: 0,
    color: theme.palette.error.main,
    fontWeight: 400,
  },
  "& .MuiButtonBase-root": {
    background: theme.palette.light.main,
    color: theme.palette.grey[600],
    "&:hover": {
      color: theme.palette.primary.main,
      background: `${theme.palette.light.main}`,
      borderColor: theme.palette.light.main,
    },
  },
}));

const GKTimePicker = (props: GKDatePickerProps & TimePickerProps<any>) => {
  const { theme } = ThemeContainer();
  const { inputLabel, id, name, requiredField, helperText, error } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem
        label={
          inputLabel && (
            <InputLabel
              style={{
                color: "#000000",
                fontSize: "18px",
                fontFamily: "Inter !important",
                textTransform: "capitalize",
              }}
              shrink
              htmlFor={name || id}
            >
              {inputLabel}
              {requiredField && (
                <span
                  style={{
                    color: theme.palette.error.main,
                  }}
                >
                  *
                </span>
              )}
            </InputLabel>
          )
        }
      >
        <CustomDatePicker
          {...props}
          sx={{
            marginTop: inputLabel ? "20px !important" : 0,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error
                ? theme.palette.error.main
                : theme.palette.grey[400],
            },
          }}
        />
        {Boolean(helperText) && (
          <Typography
            color={theme.palette.error.main}
            fontSize={12}
            fontWeight={550}
            sx={{
              marginTop: "0 !important",
            }}
          >
            {helperText}
          </Typography>
        )}
      </DemoItem>
    </LocalizationProvider>
  );
};

export default GKTimePicker;
