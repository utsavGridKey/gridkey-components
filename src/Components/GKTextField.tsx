import {
  InputLabel,
  Skeleton,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { ThemeContainer } from "../Utils/Theme";

interface GKTextFieldProps {
  inputLabel?: string | any;
  requiredField?: boolean;
  loading?: boolean;
  placeholder?: string;
}

const BootstrapInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: 8,
  "label + &": {
    marginTop: "20px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
  },
  // "& .MuiOutlinedInput-notchedOutline": {
  //   border: "1px solid",
  //   borderColor: "#006580",
  // },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    fontSize: 12,
    padding: "12px",
    "&::placeholder": {
      textTransform: "capitalize",
    },
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  "& .MuiFormHelperText-root ": {
    margin: 0,
    color: theme.palette.error.main,
    fontWeight: 400,
  },
}));

const GKTextField = (props: GKTextFieldProps & TextFieldProps) => {
  const { theme } = ThemeContainer();
  const { inputLabel, id, name, loading, requiredField, type, placeholder } =
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
          animation="wave"
          variant="rectangular"
          sx={{
            marginTop: "20px",
            height: 46,
            borderRadius: 2,
          }}
        />
      ) : (
        <BootstrapInput
          {...props}
          placeholder={placeholder || inputLabel || "Enter"}
          onWheel={(e: any) => e.target.blur()}
          autoComplete="off"
          fullWidth
          type={type || ""}
        />
      )}
    </>
  );
};

export default GKTextField;
