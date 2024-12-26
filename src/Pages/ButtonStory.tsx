/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import {
  Button,
  Divider,
  Grid2,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ButtonStory = () => {
  const [tabs, setTabs] = useState(0);

  const variantData = ["contained", "text", "outlined", "lightBg", "link"];
  const sizeData = ["extraSmall", "small", "medium", "large"];
  const colorData = [
    "primary",
    "secondary",
    "success",
    "error",
    "dark",
    "info",
    "warning",
  ];

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Tabs onChange={(_, val) => setTabs(val)} value={tabs}>
          <Tab label="Size" />
          <Tab label="Variants" />
          <Tab label="Colors" />
        </Tabs>
        <Divider />
      </Grid2>
      {tabs === 0 && (
        <Grid2 size={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Button Preview</TableCell>
                  <TableCell>Button Name</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sizeData?.map((d: any) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Button variant={"contained"} size={d}>
                          {d}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Typography textTransform={"capitalize"}>
                          {d}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `<Button size={"${d}"} variant="contained">Button</Button>`
                            );
                          }}
                        >
                          <ContentPasteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      )}
      {tabs === 1 && (
        <Grid2 size={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Button Preview</TableCell>
                  <TableCell>Button Name</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {variantData?.map((d: any) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Button variant={d}>{d}</Button>
                      </TableCell>
                      <TableCell>
                        <Typography textTransform={"capitalize"}>
                          {d}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `<Button variant={"${d}"}>Button</Button>`
                            );
                          }}
                        >
                          <ContentPasteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      )}
      {tabs === 2 && (
        <Grid2 size={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Button Preview</TableCell>
                  <TableCell>Button Name</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colorData?.map((d: any) => {
                  return (
                    <TableRow>
                      <TableCell>
                        <Button variant="contained" color={d}>
                          {d}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Typography textTransform={"capitalize"}>
                          {d}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `<Button color={"${d}"}>Button</Button>`
                            );
                          }}
                        >
                          <ContentPasteOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      )}
    </Grid2>
  );
};

export default ButtonStory;
