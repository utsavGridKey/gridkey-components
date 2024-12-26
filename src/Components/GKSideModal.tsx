import {
  CircularProgress,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { ThemeContainer } from "../Utils/Theme";

interface GKSideModalProps {
  children: React.ReactNode;
  setOpen?: any;
  open: boolean;
  loading?: boolean;
  width?: any;
  modalTitle: string;
  footerButton?: any;
  onClose?: any;
  titleComponent?: any;
}

const GKSideModal = (props: GKSideModalProps) => {
  const { theme } = ThemeContainer();
  const {
    children,
    setOpen,
    open,
    width,
    footerButton,
    titleComponent,
    modalTitle,
    onClose,
    loading,
  } = props;
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose || (() => setOpen(false))}
      PaperProps={{
        sx: {
          width: width,
          background: theme.palette.bgColor.main,
        },
      }}
    >
      <Grid container height={"100%"}>
        <Grid
          item
          p={1.5}
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            color={theme.palette.dark.main}
            fontSize={18}
            fontWeight={700}
            whiteSpace={"nowrap"}
          >
            {modalTitle}
          </Typography>
          <span
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {titleComponent}
            <IconButton
              onClick={() => {
                if (onClose) {
                  onClose();
                }
                setOpen(false);
              }}
              sx={{
                borderRadius: 6,
                color: "#50526D",
                background: "transparent",
                border: "none",
                "&:hover": {
                  color: "#50526D",
                  background: "transparent",
                  border: "none",
                },
              }}
            >
              <RxCross1 size={20} />
            </IconButton>
          </span>
        </Grid>

        <Grid
          item
          xs={12}
          height="calc(100vh - 126px)"
          p={1.5}
          overflow={"auto"}
        >
          {loading ? <CircularProgress /> : children}
        </Grid>

        <Grid
          item
          xs={12}
          p={1.5}
          style={{
            background: theme.palette.light?.main,
          }}
        >
          {footerButton}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default GKSideModal;
