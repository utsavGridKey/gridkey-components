import { Button, Grid2 } from "@mui/material";
import GKDataGrid from "../Components/GKDataGrid";

const TableStory = () => {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <GKDataGrid
          rows={[]}
          columns={[]}
          name="table_name"
          headerComponent={
            <Button
              variant="contained"
              onClick={() => {
                navigator.clipboard.writeText(
                  `<GKDataGrid rows={[]} columns={[]} name="table_name" headerComponent={<Button variant="contained"> Copy Table</Button>} />`
                );
              }}
            >
              {" "}
              Copy Table
            </Button>
          }
        />
      </Grid2>
      <Grid2 size={12}>asd</Grid2>
    </Grid2>
  );
};

export default TableStory;
