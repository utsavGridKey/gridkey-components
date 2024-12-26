import { Button, Grid, TableContainer } from "@mui/material";
import { DataGridPro, DataGridProProps } from "@mui/x-data-grid-pro";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { LuSearch, LuTable2 } from "react-icons/lu";
import { ThemeContainer } from "../Utils/Theme";
import GKTextField from "./GKTextField";
import { Show } from "./Show";

interface Props {
  headerComponent?: any;
  showSearch?: boolean;
  columnsButton?: boolean;
  filterButton?: boolean;
  searchPlaceholder?: string;
  showFilters?: boolean;
  ref?: any;
  CustomPagination?: any;
  exportCsv?: any;
  maxHeight?: any;
  showHeaderGrid?: any;
  zeroHolding?: boolean;
  setTableFilter?: any;
  minHeight?: any;
  tableFilter?: any;
  height?: string;
  tableName?: string;
  name: string;
  headerFilter?: any;
}

const GKDataGrid = (props: DataGridProProps & Props) => {
  const { theme } = ThemeContainer();

  const {
    rows,
    headerComponent,
    showSearch = true,
    loading,
    ref,
    columnsButton = true,
    exportCsv,
    maxHeight,
    onRowClick,
    height,
    minHeight,
    tableName,
    headerFilter,
    columns,
  } = props;

  const [searchText, setSearchText] = useState("");

  return (
    <Grid
      container
      sx={{
        "& .MuiTableContainer-root": {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        },
      }}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"space-between"}
          p={1}
          alignItems={"center"}
          ref={ref}
          border={`solid 1px ${theme.palette.grey[300]}`}
          borderBottom={`solid 0px ${theme.palette.grey[300]}`}
          sx={{
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: 10,
              width: "100%",
            }}
          >
            <Grid xs={6}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Show.When isTrue={showSearch}>
                  <GKTextField
                    style={{ width: 180 }}
                    placeholder="Search"
                    sx={{
                      "& .MuiInputBase-root ": {
                        height: "35px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #E3E8EF",
                      },
                    }}
                    value={searchText}
                    onChange={(event: any) => {
                      setSearchText(event.target.value);
                    }}
                    type="search"
                    InputProps={{
                      startAdornment: (
                        <LuSearch size={22} color={theme.palette.grey[500]} />
                      ),
                    }}
                  />
                </Show.When>
                <Show.When isTrue={tableName}>
                  <Button
                    style={{
                      padding: "6px 10px",
                      color: "#697586",
                      border: "1px solid #E3E8EF",
                    }}
                    startIcon={<IoFilter size={16} />}
                  >
                    Filter
                  </Button>
                </Show.When>
                <Show.When isTrue={exportCsv}>
                  {exportCsv && exportCsv()}
                </Show.When>
                <Show.When isTrue={columnsButton}>
                  <Button
                    style={{
                      padding: "6px 10px",
                      color: "#697586",
                      border: "1px solid #E3E8EF",
                    }}
                    startIcon={<LuTable2 size={16} />}
                  >
                    Columns
                  </Button>
                </Show.When>
              </span>
            </Grid>
            <Grid xs={6} display={"flex"} justifyContent={"flex-end"}>
              <Show.When isTrue={headerComponent}>{headerComponent}</Show.When>{" "}
            </Grid>
          </div>
          {headerFilter && (
            <Grid container display={"flex"} alignItems={"center"} mt={1}>
              {headerFilter}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <DataGridPro
            {...props}
            getDetailPanelHeight={() => "auto"}
            sortingMode="server"
            filterMode="server"
            keepNonExistentRowsSelected
            disableRowSelectionOnClick
            loading={loading}
            rows={loading ? [] : rows || []}
            columns={columns}
            sx={{
              "& .MuiDataGrid-virtualScroller": {
                maxHeight: maxHeight || "calc(100vh - 256px)",
                minHeight: minHeight || "10px",
              },
              "&.MuiDataGrid-root .MuiTablePagination-root": {
                padding: "0 8px",
              },
              "& .MuiDataGrid-row": {
                "&:hover": {
                  cursor: onRowClick ? "pointer" : "",
                },
              },
              minHeight: height,
              maxHeight: height,
            }}
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default GKDataGrid;
