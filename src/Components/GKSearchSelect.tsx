import {
  AutocompleteProps,
  CircularProgress,
  createFilterOptions,
  InputLabel,
  Autocomplete as MuiAutocomplete,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { ThemeContainer } from "../Utils/Theme";
import { paletteDarkTheme } from "../Utils/ThemeColors";

interface GKSearchSelectProps {
  inputLabel?: string;
  requiredField?: boolean;
}

const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  background: theme.palette.light?.main,
  borderRadius: " 8px !important",
  "& .MuiIconButton-root": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    padding: "0px !important",
  },
  "& .MuiOutlinedInput-root": {
    padding: "11px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: " 8px !important",
  },
  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: " red !important",
  },
  "& .MuiFormHelperText-contained": {
    margin: ` 0 !important`,
  },
  "& .MuiAutocomplete-endAdornment .MuiIconButton-root": {
    background: ` none !important`,
    marginTop: 2,
  },
  "& .MuiAutocomplete-endAdornment .MuiIconButton-root:hover": {
    background: `none !important`,
    border: "none !important",
    color: "unset !important",
  },
  "& input::placeholder": {
    fontSize: "12px",
  },

  "& legend": {
    lineHeight: "8px",
  },
}));

const GKSearchSelect = (
  props: GKSearchSelectProps & AutocompleteProps<any, any, any, any, any>
) => {
  const { theme } = ThemeContainer();
  const {
    inputLabel,
    id,
    requiredField,
    loading,
    getOptionLabel,
    disableClearable = true,
  } = props;

  const [initialSliceValue, setInitialSliceValue] = useState(50);

  const [searchText, setSearchText] = useState("");

  const handleScroll = (event: any) => {
    const listboxNode = event.currentTarget;
    const position = listboxNode.scrollTop + listboxNode.clientHeight;
    if (listboxNode.scrollHeight - position <= 1) {
      setInitialSliceValue((prev) => prev + 100);
    }
  };

  return (
    <>
      {inputLabel && (
        <InputLabel
          style={{
            color: "#000000",
            fontSize: "18px",
            lineHeight: "20px",
            textTransform: "capitalize",
            fontFamily: "Inter !important",
          }}
          shrink
          htmlFor={id}
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
      )}
      {loading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            height: 44,
            borderRadius: 2,
          }}
        />
      ) : (
        <Autocomplete
          {...props}
          disableClearable={disableClearable}
          getOptionLabel={getOptionLabel}
          filterOptions={createFilterOptions({
            limit: initialSliceValue,
            trim: true,
            ignoreCase: true,
            stringify: (option: any) => {
              return Object.values(option).join(" ");
            },
          })}
          inputValue={searchText}
          ListboxProps={{
            onScroll: handleScroll,
          }}
          onInputChange={(_, val) => {
            setSearchText(val);
          }}
          onKeyDown={(e) => {
            if (
              e.key === "ArrowUp" ||
              e.key === "ArrowDown" ||
              e.key === "ArrowLeft" ||
              e.key === "ArrowRight"
            ) {
              e.stopPropagation();
            }
          }}
          componentsProps={{
            popper: {
              placement: "bottom",
            },
          }}
          popupIcon={
            loading ? (
              <CircularProgress size={16} />
            ) : (
              <RiArrowDownSLine size={16} />
            )
          }
          ChipProps={{
            deleteIcon: <IoMdClose size={16} />,
          }}
          clearIcon={
            <Typography
              fontSize={10}
              fontWeight={600}
              color={paletteDarkTheme.palette.primary.main}
            >
              Clear
            </Typography>
          }
        />
      )}
    </>
  );
};

export default GKSearchSelect;
