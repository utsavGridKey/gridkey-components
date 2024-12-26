import { Divider, Typography } from "@mui/material";
import { useState } from "react";
import { phoneList } from "../Utils/phoneJSON";
import GKSearchSelect from "./GKSearchSelect";
import GKTextField from "./GKTextField";

interface Props {
  onSelectChange?: any;
  onSelectValue?: any;
  textFieldProps?: any;
  fieldName?: string;
  selectProps?: any;
  onTextChange?: any;
  onTextValue?: any;
  inputLabel?: any;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  requiredField?: boolean;
  disabled?: boolean;
}

const PhoneInput = (props: Props) => {
  const {
    textFieldProps,
    selectProps,
    onSelectChange,
    onSelectValue,
    fieldName,
    onTextChange,
    onTextValue,
    inputLabel,
    placeholder,
    requiredField,
    error,
    disabled,
  } = props;

  const [isInputFocused, setIsInputFocused] = useState(false);

  const [hasError, setHasError] = useState(false);

  return (
    <GKTextField
      {...textFieldProps}
      type="number"
      onBlur={() => {
        setIsInputFocused(false);
        const foundObj = phoneList?.find(
          (da: any) => da?.callingCodes === onSelectValue
        );

        if (foundObj?.phoneLength !== onTextValue?.length) {
          setHasError(true);
        }
      }}
      onFocus={() => {
        setIsInputFocused(true);
        setHasError(false);
      }}
      requiredField={requiredField || false}
      inputLabel={inputLabel || "Phone Number"}
      placeholder={placeholder || inputLabel || "Phone Number"}
      name={fieldName}
      onChange={onTextChange}
      disabled={disabled}
      value={onTextValue}
      error={(!isInputFocused && hasError) || error}
      helperText={
        ((!isInputFocused && hasError) || error) &&
        "Please enter a valid phone number"
      }
      InputProps={{
        readOnly: disabled,
        startAdornment: (
          <div
            style={{
              display: "flex",
            }}
          >
            <GKSearchSelect
              {...selectProps}
              disabled={disabled}
              onBlur={() => {
                setIsInputFocused(false);
                const foundObj = phoneList?.find(
                  (da: any) => da?.callingCodes === onSelectValue
                );

                if (foundObj?.phoneLength !== onTextValue?.length) {
                  setHasError(true);
                }
              }}
              onFocus={() => {
                setIsInputFocused(true);
                setHasError(false);
              }}
              options={phoneList}
              onChange={onSelectChange}
              value={onSelectValue}
              forcePopupIcon={false}
              defaultValue="+91"
              sx={{
                width: "40px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              slotProps={{
                paper: {
                  style: {
                    width: "300px",
                  },
                },
              }}
              placeholder="Code"
              getOptionLabel={(params) => params?.callingCodes || params}
              renderInput={(params) => {
                return <GKTextField placeholder="Code" {...params} />;
              }}
              renderOption={(props, option) => {
                return (
                  <li
                    {...props}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <img
                      onError={({ currentTarget }) => {
                        currentTarget.src =
                          "https://gridkey.in/Logos/iconLogo.png";
                      }}
                      width={30}
                      src={option?.flags?.png}
                      alt=""
                      style={{
                        borderRadius: 6,
                      }}
                    />
                    &nbsp;
                    <Typography whiteSpace={"nowrap"} fontWeight={600}>
                      {`[${option?.callingCodes}] ${option?.name}`}
                    </Typography>
                  </li>
                );
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                height: "40px",
                mx: 2,
              }}
            />
          </div>
        ),
      }}
    />
  );
};

export default PhoneInput;
