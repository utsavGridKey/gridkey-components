import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import {
  Grid2,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BiLineChart } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import {
  FiHelpCircle,
  FiMoreVertical,
  FiPlusSquare,
  FiTrash2,
} from "react-icons/fi";
import { HiOutlineFilter } from "react-icons/hi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import {
  LuAlignStartHorizontal,
  LuArchive,
  LuArrowDownUp,
  LuArrowLeft,
  LuArrowRight,
  LuCalendarDays,
  LuChevronDown,
  LuClipboardList,
  LuClock3,
  LuDownload,
  LuEye,
  LuEyeOff,
  LuMail,
  LuPhone,
  LuPlus,
  LuRefreshCw,
  LuRotateCcw,
  LuSearch,
  LuSend,
  LuSettings,
  LuSettings2,
  LuStar,
  LuTable2,
  LuUndo2,
  LuUsers,
} from "react-icons/lu";
import {
  MdClose,
  MdOutlineCandlestickChart,
  MdOutlineInfo,
} from "react-icons/md";
import { PiDownload } from "react-icons/pi";
import { RiMoneyRupeeCircleLine, RiWhatsappLine } from "react-icons/ri";
import { TbPigMoney, TbSmartHome } from "react-icons/tb";

const IconStory = () => {
  const iconData = [
    { name: "FiTrash2", icon: <FiTrash2 size={29} /> },
    { name: "TbSmartHome", icon: <TbSmartHome size={29} /> },
    { name: "LuDownload", icon: <LuDownload size={29} /> },
    { name: "LuStar", icon: <LuStar size={29} /> },
    { name: "LuArchive", icon: <LuArchive size={29} /> },
    { name: "LuSettings2", icon: <LuSettings2 size={29} /> },
    { name: "LuSearch", icon: <LuSearch size={29} /> },
    { name: "LuUndo2", icon: <LuUndo2 size={29} /> },
    { name: "LuRotateCcw", icon: <LuRotateCcw size={29} /> },
    { name: "LuSettings", icon: <LuSettings size={29} /> },
    { name: "LuClipboardList", icon: <LuClipboardList size={29} /> },
    { name: "TbPigMoney", icon: <TbPigMoney size={29} /> },
    { name: "LuCalendarDays", icon: <LuCalendarDays size={29} /> },
    { name: "LuRefreshCw", icon: <LuRefreshCw size={29} /> },
    { name: "LuSend", icon: <LuSend size={29} /> },
    { name: "LuArrowRight", icon: <LuArrowRight size={29} /> },
    { name: "LuArrowLeft", icon: <LuArrowLeft size={29} /> },
    { name: "LuChevronDown", icon: <LuChevronDown size={29} /> },
    { name: "LuTable2", icon: <LuTable2 size={29} /> },
    {
      name: "LuAlignStartHorizontal",
      icon: <LuAlignStartHorizontal size={29} />,
    },
    { name: "LuPhone", icon: <LuPhone size={29} /> },
    { name: "LuMail", icon: <LuMail size={29} /> },
    { name: "LuClock3", icon: <LuClock3 size={29} /> },
    { name: "LuEye", icon: <LuEye size={29} /> },
    { name: "LuEyeOff", icon: <LuEyeOff size={29} /> },
    { name: "LuArrowDownUp", icon: <LuArrowDownUp size={29} /> },
    { name: "LuArchive", icon: <LuArchive size={29} /> },
    { name: "LuPlus", icon: <LuPlus size={29} /> },
    { name: "LuArrowLeft", icon: <LuArrowLeft size={29} /> },
    { name: "LuUsers", icon: <LuUsers size={29} /> },
    { name: "LuPenSquare", icon: <HiMiniPencilSquare size={29} /> },
    { name: "RiWhatsappLine", icon: <RiWhatsappLine size={29} /> },
    { name: "MdOutlineInfo", icon: <MdOutlineInfo size={29} /> },
    { name: "FiHelpCircle", icon: <FiHelpCircle size={29} /> },
    {
      name: "RiMoneyRupeeCircleLine",
      icon: <RiMoneyRupeeCircleLine size={29} />,
    },
    { name: "BiLineChart ", icon: <BiLineChart size={29} /> },
    { name: "FiMoreVertical ", icon: <FiMoreVertical size={29} /> },
    { name: "HiOutlineFilter", icon: <HiOutlineFilter size={29} /> },
    { name: "CgFileDocument", icon: <CgFileDocument size={29} /> },
    {
      name: "MdOutlineCandlestickChart ",
      icon: <MdOutlineCandlestickChart size={29} />,
    },
    { name: "MdClose", icon: <MdClose size={29} /> },
    { name: "PiDownload", icon: <PiDownload size={29} /> },
    { name: "FiPlusSquare ", icon: <FiPlusSquare size={29} /> },
  ];

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Icon Preview</TableCell>
                <TableCell>Icon Name</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {iconData?.map((d) => {
                return (
                  <TableRow>
                    <TableCell>{d.icon}</TableCell>
                    <TableCell>
                      <Typography textTransform={"capitalize"}>
                        {d.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `<${d.name} size={18} />`
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
    </Grid2>
  );
};

export default IconStory;
