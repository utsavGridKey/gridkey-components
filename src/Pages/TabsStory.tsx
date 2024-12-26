import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import {
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
} from "@mui/material";
import { useState } from "react";

const TabsStory = () => {
  const [tabs, seTabs] = useState(0);
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tab Preview</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                  <Divider />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(` <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                  <Divider />`);
                    }}
                  >
                    <ContentPasteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    TabIndicatorProps={{
                      style: {
                        display: "none",
                      },
                    }}
                    value={tabs}
                    variant="standard"
                    className="light"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(`  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                      TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
                    value={tabs}
                    variant="standard"
                    className="gridkey"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>`);
                    }}
                  >
                    <ContentPasteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="standard"
                    className="gridkey"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(`  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="standard"
                    className="gridkey"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>`);
                    }}
                  >
                    <ContentPasteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="fullWidth"
                    className="gridkey"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(`  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="fullWidth"
                    className="gridkey"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>`);
                    }}
                  >
                    <ContentPasteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="fullWidth"
                    className="gridkey-light"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(`  <Tabs
                    onChange={(_, val) => {
                      seTabs(val);
                    }}
                    value={tabs}
                    variant="fullWidth"
                    className="gridkey-light"
                  >
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                    <Tab label="Item 4" />
                  </Tabs>`);
                    }}
                  >
                    <ContentPasteOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  );
};

export default TabsStory;
