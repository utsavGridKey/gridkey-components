import { Grid2, IconButton, TableContainer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import { BiDownload, BiTrash } from "react-icons/bi";

const ImagesStory = () => {
  const userRole = localStorage.getItem("userRole") || "guest";

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
            const formData = new FormData();
            formData.append("file", file[0]);
            mutate(formData);
          }}
          name="file"
          types={[
            "JPEG",
            "PNG",
            "GIF",
            "PDF",
            "DOCX",
            "DOC",
            "XLSX",
            "XLS",
            "PPTX",
            "PPT",
            "TXT",
            "CSV",
            "MP4",
            "MP3",
            "AVI",
            "MKV",
            "FLV",
            "MOV",
            "WMV",
            "WEBM",
            "OGG",
            "WAV",
            "FLAC",
            "MPG",
            "MPEG",
            "M4V",
            "3GP",
            "3G2",
            "WEBP",
            "JPG",
            "JSON",
          ]}
        />
      </Grid2>
      <Grid2 size={12}>
        <TableContainer>
          <DataGrid
            rows={data?.data || []}
            paginationMode="client"
            pageSizeOptions={[10, 100, 1000]}
            columns={[
              {
                field: "fileImage",
                renderCell: (params) => {
                  return (
                    <img src={params.row.file} width={40} height={"auto"} />
                  );
                },
              },
              {
                field: "file",
                flex: 1,
                renderCell: (params) => {
                  return (
                    <div>{params.row.file.split("/").pop().split("?")[0]}</div>
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
                    <div>
                      {userRole === "admin" && (
                        <IconButton
                          color="error"
                          disabled={userRole !== "admin"}
                          onClick={() => {
                            handleDelete(params.row.id);
                          }}
                        >
                          <BiTrash />
                        </IconButton>
                      )}
                      <IconButton href={params.row.file} target="_blank">
                        <BiDownload />
                      </IconButton>
                    </div>
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
