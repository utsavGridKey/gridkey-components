/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from "@mui/material/styles";
import { paletteLightTheme } from "./ThemeColors";

const paletteTheme = paletteLightTheme;

export const ThemeContainer = () => {
  const theme = createTheme({
    palette: paletteLightTheme.palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
          }
        `,
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            // backdropFilter: "blur(4px)",
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: "0 !important",
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            fontFamily: "Manrope",
            width: 32,
            height: 20,
            padding: 0,
            marginRight: 10,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 2,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: "translateX(12px)",
                color: paletteTheme.palette.light?.main,
                "& + .MuiSwitch-track": {
                  backgroundColor: paletteTheme.palette.primary.main,
                  opacity: 1,
                  border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.5,
                  background: `${paletteTheme.palette.dark.main}44`,
                },
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: paletteTheme.palette.primary.main,
                border: `6px solid ${paletteTheme.palette.border.main}`,
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color: paletteTheme.palette.grey[600],
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: paletteTheme.palette.mode === "light" ? 0.7 : 0.3,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 16,
              height: 16,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              backgroundColor: paletteTheme.palette.grey[300],
              opacity: 1,
              transition: paletteTheme.transitions.create(
                ["background-color"],
                {
                  duration: 500,
                }
              ),
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme, ownerState }: any) => {
            return {
              fontFamily: "Inter !important",
              borderRadius: 8,
              boxShadow: "none",
              textTransform: "capitalize",
              "&:hover": {
                boxShadow: "none",
              },
              ...(ownerState.variant === "lightBg" && {
                border: "none",
                background: `${theme.palette[ownerState.color].main}11`,
                color: theme.palette[ownerState.color].main,
                "&:hover": {
                  background: `${theme.palette[ownerState.color].main}22`,
                },
              }),
              ...(ownerState.color === "dark" &&
                ownerState.variant === "outlined" && {
                  borderColor: "#E3E8EF",
                  "&:hover": {
                    borderColor: "#9AA4B2",
                    background: "#F8FAFC",
                  },
                }),
              ...(ownerState.color === "dark" &&
                ownerState.variant === "contained" && {
                  color: "#E3E8EF",
                }),
              ...(ownerState.size === "large" && {
                padding: " 10px 16px",
              }),
              ...(ownerState.size === "medium" && {
                padding: " 8px 10px",
              }),
              ...(ownerState.size === "small" && {
                padding: "6px 10px !important",
              }),
              ...(ownerState.size === "extraSmall" && {
                padding: "4px 8px !important",
                lineHeight: "normal",
                minWidth: "10px",
              }),
              ...(ownerState.variant === "link" && {
                padding: 0,
                textDecoration: "underline",
                color: theme.palette[ownerState.color].main,
                minWidth: 0,
                "&:hover": {
                  background: "transparent",
                  textDecoration: "underline",
                },
              }),
              ...(ownerState.variant === "outlined" &&
                ownerState.color === "dark" && {
                  border: "1px solid #C9D5E1",
                  color: "#4B5565",
                }),
            };
          },
        },
        variants: [
          {
            props: {
              size: "large",
              variant: "outlined",
              className: "extra-large",
            },
            style: {
              padding: "14px 16px",
            },
          },
          {
            props: {
              variant: "landingBtn",
            },
            style: {
              padding: "14px 22px 14px 22px",
              background: `linear-gradient(89.61deg, #006580 0.21%, #258382 108.43%, #489F84 210.75%)`,
              transition: "all 0.3s ease-in-out",
              border: "1px solid #FFFFFF33",
              fontSize: " 15px",
              fontWeight: " 500",
              lineHeight: " 18.15px",
              letterSpacing: " -0.01em",
              "&:hover": {
                background: `linear-gradient(89.09deg, #006580 -102.26%, #258382 4.16%, #489F84 104.77%)`,
                transition: "all 0.3s ease-in-out",
              },
            },
          },
          {
            props: {
              variant: "contained",
              className: "light",
            },
            style: {
              background: `${paletteTheme.palette.border.main}33`,
              padding: "8px 10px",
              borderRadius: 8,
              color: paletteTheme.palette.primary.main,
              boxShadow: "none",
              "&:hover": {
                boxShadow: "none",
                background: `${paletteTheme.palette.border.main}22`,
              },
            },
          },
        ],
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            borderColor: paletteTheme.palette.border.main,
          },
        },
      },
      MuiListSubheader: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            backgroundColor: `${paletteTheme?.palette?.primary?.main} !important`,
            color: `${paletteTheme?.palette?.light?.main}`,
            fontWeight: 700,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            border: "solid 1px",
            borderColor: paletteTheme.palette.grey[300],
            borderRadius: "10px",
            padding: "24px",
            boxShadow: "none",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            "& .MuiTableCell-root ": {
              fontWeight: 400,
              fontSize: 12,
            },
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme, ownerState }: any) => {
            return {
              fontFamily: "Inter !important",
              alignItems: "center",
              fontSize: "12px",
              padding: "8px",
              fontWeight: 400,
              borderRadius: 10,
              color: theme.palette[ownerState?.severity].main,
              background: `${theme?.palette[ownerState?.severity]?.main}11 `,
              border: `1px solid ${theme?.palette[ownerState?.severity]?.main}`,
              "& .MuiAlert-icon": {
                padding: 0,
                marginRight: "6px",
              },
              "& .MuiAlert-message": {
                padding: 0,
              },
            };
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            border: "solid 1px",
            borderColor: paletteTheme.palette.border.main,
            borderRadius: "10px",
            width: `-webkit-fill-available !important`,
            "& .MuiDataGrid-root ": {
              flexDirection: "column",
              borderRadius: "10px",
              background: paletteTheme.palette.light?.main,
              fontSize: 14,
              border: "none",
            },
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-overlayWrapper": {
              height: "100%",
            },
            "& .MuiDataGrid-overlayWrapper .MuiDataGrid-overlayWrapperInner": {
              height: "100% !important",
            },
            "& .MuiTablePagination-actions .MuiButtonBase-root": {
              padding: 0,
              borderRadius: 6,
            },
            "& .MuiSelect-select.MuiTablePagination-select.MuiSelect-standard.MuiInputBase-input":
              {
                background: `${paletteTheme?.palette?.primary?.main}22`,
                borderRadius: 6,
                minWidth: 0,
                padding: "3px 18px 3px 4px",
                color: paletteTheme?.palette?.primary?.main,
              },
            "& .MuiPagination-ul": {
              justifyContent: "flex-end",
            },
            "& .MuiDataGrid-cellContent": {
              fontFamily: "Inter !important",
            },
            "& .MuiPaginationItem-outlined": {
              background: paletteTheme.palette.border.main,
              border: "none",
              color: paletteTheme.palette.primary.main,
              "& .MuiSvgIcon-root": {
                height: 25,
                width: 25,
              },
            },
            "& .MuiPaginationItem-page": {
              display: "none",
            },
            "& .MuiPaginationItem-ellipsis": {
              display: "none",
            },
            "& .MuiDataGrid-root .MuiDataGrid-columnHeader ": {
              outline: "none",
              borderTop: `solid 1px ${paletteTheme.palette.border.main}44`,
              borderBottom: `solid 1px ${paletteTheme.palette.border.main}44`,
              color: paletteTheme.palette.dark.main,
              background: "#FCFCFD",
            },
            "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within ": {
              outline: "none",
            },
            "& .MuiDataGrid-root .MuiDataGrid-toolbarContainer ": {
              marginLeft: "auto",
              gap: 0,
              marginBottom: "4px",
            },
            "& .MuiDataGrid-root .MuiToolbar-root  ": {
              marginLeft: "8px",
              padding: 0,
            },
            "& .MuiDataGrid-footerContainer": {
              display: "none",
              border: "none",
              borderBottom: "1px solid",
              borderColor: paletteTheme.palette.border.main,
            },
            "& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle ": {
              fontWeight: 400,
              fontSize: 12,
              color: "#6B7280",
              fontFamily: "Inter !important",
              textTransform: "capitalize",
            },
            "& .MuiDataGrid-columnHeader .MuiButtonBase-root": {
              background: "transparent",
              border: "none",
              padding: 0,
            },
            "& .MuiDataGrid-columnHeader .MuiButtonBase-root:hover": {
              background: "transparent",
              padding: 0,
              color: paletteTheme.palette.dark.main,
              border: "none",
            },
            "& .MuiDataGrid-pinnedColumns ": {
              backgroundColor: paletteTheme.palette.light?.main,
              backgroundImage: "none",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            whiteSpace: "nowrap",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            "& td,th": {
              padding: "8px",
            },
            "& th": {
              padding: "8px",
              color: "#697586",
              fontWeight: 400,
              fontSize: 12,
            },
            "& tbody > tr:last-child > td": {
              borderBottom: "none",
            },
            "& .MuiTableCell-root": {
              fontSize: 14,
              minHeight: 40,
            },
            "& .MuiTableBody-root tr:nth-of-type(odd)": {
              background: paletteTheme.palette.light?.main,
            },
            "& .MuiButtonBase-root.MuiTableSortLabel-root": {
              color: "#697586",
              minHeight: 40,
              fontWeight: 400,
              fontSize: 12,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme, ownerState }: any) => {
            return {
              fontFamily: "Inter !important",
              padding: "4px",
              background: "transparent",
              color: `#697586`,
              border: `solid 1px transparent`,
              transition: "all .3s",
              "&:hover": {
                color: `${theme?.palette[ownerState?.color]?.main}`,
                background: "transparent",
              },
            };
          },
        },
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: "filled" },
            style: {
              background: `${paletteTheme.palette.primary.main}1A`,
              "& .MuiInputBase-root:focus-visible": {
                outline: 0,
              },
              "&  input": {
                color: paletteTheme.palette.primary.main,
                border: "none !important",
              },
              "&  .MuiFilledInput-root:before": {
                border: "none !important",
              },
              "&  .Mui-focused:before": {
                border: "none !important",
                outline: "none !important",
              },
              "&  .Mui-focused:after": {
                border: "none !important",
                outline: "none !important",
                borderRadius: 10,
              },
            },
          },
          {
            props: { className: "tableInputField" },
            style: {
              borderRadius: 6,
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: 6,
                padding: "8px",
              },
              "& input": {
                borderRadius: 6,
                padding: "8px",
              },
              "& .MuiInputBase-root MuiInputBase-input::before": {
                borderBottom: "none !important",
                outline: "none !important",
              },
            },
          },
        ],
      },
      MuiAutocomplete: {
        variants: [
          {
            props: { className: "filled" },
            style: {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              "& .MuiInputBase-root ": {
                paddingTop: 0,
                paddingBottom: 0,
                background: paletteTheme.palette.border.main,
                outline: 0,
              },

              "& .MuiButtonBase-root  ": {
                border: "none",
              },
            },
          },
        ],
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            "& .MuiChip-root": {
              color: paletteTheme?.palette?.grey[600],
              background: paletteTheme?.palette?.grey[200],
              borderRadius: 2,
              fontWeight: 600,
              fontSize: 10,
              height: "20px",
              margin: "0 3px",
              "& .MuiChip-label": {
                padding: "0 4px",
              },
              "& .MuiChip-deleteIcon": {
                margin: "0 !important",
                color: paletteTheme?.palette?.grey[600],
                height: "100%",
                transition: "all .3s",
              },
              "& .MuiChip-deleteIcon:hover": {
                color: paletteTheme.palette.error.main,
                background: `${paletteTheme.palette.error.main}33`,
                transition: "all .3s",
              },
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
            "& .MuiTabs-flexContainer": {
              gap: "16px",
            },
            "& .MuiButtonBase-root": {
              padding: "16px 0",
              fontSize: "14px",
              fontWeight: 400,
            },
          },
        },
        variants: [
          {
            props: { variant: "fullWidth", className: "gridkey-light" },
            style: {
              borderRadius: "10px",
              border: "solid 0px",
              borderColor: paletteTheme.palette.border.main,
              minHeight: 0,
              transition: "all .3s ",
              background: `#F5F7FA`,
              padding: 4,
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .Mui-selected": {
                background: `#fff`,
                borderRadius: "10px",
                color: `#000 !important`,
              },
              "& button": {
                padding: "8px !important",
                minHeight: 0,
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "capitalize !important",
              },
            },
          },
          {
            props: { variant: "fullWidth", className: "gridkey" },
            style: {
              background: paletteTheme.palette.light?.main,
              borderRadius: "10px",
              minHeight: 40,
              border: "solid 1px",
              borderColor: paletteTheme.palette.border.main,
              transition: "all .3s ",
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .Mui-selected": {
                minHeight: 40,
                background: `linear-gradient(91.84deg,${paletteTheme.palette.primary.main} 0%, ${paletteTheme.palette.secondary.main} 100%)`,
                borderRadius: "10px",
                color: `#fff !important`,
                fontWeight: 700,
              },
              "& button": {
                padding: "8px !important",
                minHeight: 40,
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "capitalize !important",
              },
            },
          },
          {
            props: { variant: "standard", className: "gridkey" },
            style: {
              background: paletteTheme.palette.light?.main,
              borderRadius: "10px",
              minHeight: 36,
              minWidth: 70,
              border: `solid 1px ${paletteTheme.palette.border.main}`,
              transition: "all .3s ",
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .Mui-selected": {
                minHeight: 36,
                minWidth: 70,
                background: `linear-gradient(91.84deg,${paletteTheme.palette.primary.main} 0%, ${paletteTheme.palette.secondary.main} 100%)`,
                borderRadius: "10px",
                color: `#fff !important`,
              },
              "& button": {
                padding: "8px !important",
                minHeight: 36,
                minWidth: 70,
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "capitalize !important",
              },
            },
          },
          {
            props: { variant: "standard" },
            style: {
              minHeight: 36,
              "& .Mui-selected": {
                fontWeight: 600,
              },
              "& button": {
                padding: "0 10px",
                minHeight: 36,
                minWidth: `max-content`,
                fontWeight: 500,
                textTransform: "capitalize !important",
              },
            },
          },
          {
            props: { variant: "standard", className: "light" },
            style: {
              color: "#6B7280",
              fontSize: 14,
              fontWeight: 400,
              minHeight: "0px !important",
              borderRadius: 8,
              padding: 4,
              background: "#F3F4F6",
              "& .MuiButtonBase-root.MuiTab-root": {
                padding: "6px 10px !important",
                fontWeight: 400,
                borderRadius: 6,
                fontSize: 14,
                minHeight: "0px !important",
              },
              "& .MuiTabs-flexContainer ": {
                gap: "6px !important",
              },
              "& .MuiButtonBase-root.Mui-selected": {
                color: "#000",
                background: "#fff",
              },
            },
          },
          {
            props: { variant: "scrollable" },
            style: {
              minHeight: 36,
              "& .Mui-selected": {
                fontWeight: 600,
              },
              "& button": {
                padding: "0 10px",
                minHeight: 36,
                minWidth: `max-content`,
                fontWeight: 500,
                textTransform: "capitalize !important",
              },
            },
          },
        ],
      },
      MuiAccordion: {
        styleOverrides: {
          root: ({ ownerState }) => {
            return {
              fontFamily: "Inter !important",
              margin: "0 !important",
              "&.Mui-expanded ": {
                color: `${paletteTheme.palette.primary.main}`,
              },
              ...(ownerState.variant === "elevation" && {
                border: "1px solid",
                borderColor: paletteLightTheme.palette.border.main,
                borderRadius: "8px !important",
              }),
            };
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Inter !important",
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: 16,
          },
        },
      },
    },
    typography: {
      fontFamily: ["Inter"].join(","),
    },
  });

  return { theme };
};
