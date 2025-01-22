import { Grid2, IconButton, TableContainer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { BiTrash } from "react-icons/bi";

const ImagesStory = () => {
  const { data, refetch } = useQuery({
    queryKey: ["GET_ALL_IMAGES"],
    queryFn: () =>
      axios.get(`${import.meta.env.VITE_BASE_URL}/frontend-images/`),
  });

  const { mutate } = useMutation({
    mutationKey: ["UPLOAD_IMAGES"],
    mutationFn: (dataItem: any) =>
      axios.post(`${import.meta.env.VITE_BASE_URL}/frontend-images/`, dataItem),
    onSuccess: () => {
      refetch();
    },
  });
  const { mutate: handleDelete } = useMutation({
    mutationKey: ["UPLOAD_IMAGES"],
    mutationFn: (dataItem: any) =>
      axios.delete(
        `${import.meta.env.VITE_BASE_URL}/frontend-images/${dataItem}/`,
      ),
    onSuccess: () => {
      refetch();
    },
  });

  console.log("🚀 ~ ImagesStory ~ data:", data?.data);
  return (
    <Grid2 container spacing={1}>
      <Grid2
        size={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FileUploader
          multiple={true}
          handleChange={(file: any) => {
            console.log("file", file);
            const formData = new FormData();
            formData.append("file", file[0]);
            mutate(formData);
          }}
          name="file"
          types={["JPEG", "PNG", "GIF"]}
        />
      </Grid2>
      <Grid2 size={12}>
        <TableContainer>
          <DataGrid
            rows={data?.data || []}
            columns={[
              {
                field: "file",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <img src={params.row.file} width={40} height={"auto"} />
                  );
                },
              },
              {
                field: "actions",
                align: "right",
                headerAlign: "right",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <IconButton
                      color="error"
                      onClick={() => {
                        handleDelete(params.row.id);
                      }}
                    >
                      <BiTrash />
                    </IconButton>
                  );
                },
              },
            ]}
            pagination
          />
        </TableContainer>
      </Grid2>
    </Grid2>
  );
};

export default ImagesStory;
