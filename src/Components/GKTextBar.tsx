import {
  FormControl,
  InputLabel,
  Skeleton,
  TextareaAutosizeProps,
  Typography,
  styled,
} from "@mui/material";
import { ThemeContainer } from "../Utils/Theme";

interface GKTextAreaProps {
  inputLabel?: string;
  loading?: boolean;
  helperText?: any;
  error?: boolean;
  requiredField?: boolean;
  rows?: number;
}

const BootstrapInput = styled("textarea")(({ theme }) => ({
  background: `${theme.palette.light?.main}`,
  borderRadius: "8px",
  fontSize: 12,
  padding: 12,
  marginTop: "20px",
  "&:focus-visible": {
    outline: "none",
  },
}));

const GKTextArea = (props: GKTextAreaProps & TextareaAutosizeProps) => {
  const {
    inputLabel,
    id,
    name,
    helperText,
    loading,
    error,
    requiredField,
    rows,
  } = props;
  const { theme } = ThemeContainer();
  return (
    <FormControl variant="standard" fullWidth>
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
          variant="rectangular"
          animation="wave"
          sx={{
            height: 40,
            marginTop: "20px",
            borderRadius: 2,
          }}
        />
      ) : (
        <BootstrapInput
          {...props}
          rows={rows || 3}
          placeholder={inputLabel || "enter"}
          sx={{
            border: `1px solid ${theme.palette.grey[400]}`,
            fontFamily: "Inter",
            borderColor: error
              ? theme.palette.error.main
              : theme.palette.grey[400],
          }}
        />
      )}
      {helperText && (
        <Typography
          fontWeight={500}
          fontSize={12}
          color={theme.palette.error.main}
        >
          {helperText}
        </Typography>
      )}
    </FormControl>
  );
};

export default GKTextArea;
