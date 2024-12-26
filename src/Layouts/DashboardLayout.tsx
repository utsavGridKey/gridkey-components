import { Box } from "@mui/material";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <DashboardLayout sidebarExpandedWidth={200}>
      <Box sx={{ m: 2, overflow: "auto" }}>
        <Outlet />
      </Box>{" "}
    </DashboardLayout>
  );
}
