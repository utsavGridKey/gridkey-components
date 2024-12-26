import {
  BaseSelectProps,
  CircularProgress,
  InputLabel,
  Select,
  Skeleton,
  Typography,
  styled,
} from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";
import { ThemeContainer } from "../Utils/Theme";

interface GKSelectProps {
  inputLabel?: any;
  helperText?: string;
  requiredField?: boolean;
  loading?: boolean;
}

const BootstrapInput = styled(Select)(({ theme }) => ({
  "label + &": {
    marginTop: 21,
  },

  "& .MuiInputBase-input": {
    borderRadius: "8px !important",
    position: "relative",
    border: "1px solid",
    borderColor: `${theme.palette.grey[400]}`,
    background: `${theme.palette.light.main}`,
    fontSize: 12,
    padding: "10px 12px",
  },
  "& .MuiSelect-select.MuiSelect-standard.Mui-error.MuiInputBase-input ": {
    borderColor: `${theme.palette.error.main}`,
  },
  "&  .MuiSvgIcon-root.MuiSelect-icon ": {
    marginRight: "8px !important",
    color: `#9AA4B2`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px !important",
    borderColor: `${theme.palette.grey[400]}`,
  },
}));

const GKSelect = (props: GKSelectProps & BaseSelectProps) => {
  const { theme } = ThemeContainer();
  const { inputLabel, requiredField, id, name, helperText, error, loading } =
    props;
  return (
    <>
      {inputLabel && (
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
          {inputLabel}{" "}
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
            marginTop: "20px",
            borderRadius: 2,
          }}
        />
      ) : (
        <BootstrapInput
          disableUnderline
          variant="outlined"
          {...props}
          name={name}
          id={id}
          fullWidth
          error={error}
          displayEmpty
          IconComponent={(props) =>
            loading ? (
              <CircularProgress
                {...props}
                size={15}
                style={{
                  marginRight: 10,
                }}
              />
            ) : (
              <RiArrowDownSLine
                {...props}
                color={theme.palette.primary.main}
                style={{
                  marginRight: 10,
                }}
              />
            )
          }
        />
      )}
      {helperText && (
        <Typography
          fontWeight={400}
          fontSize={10}
          color={theme.palette.error.main}
        >
          {helperText}
        </Typography>
      )}
    </>
  );
};

export default GKSelect;
