import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import {
  FormControl,
  IconButton,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import GKCheckbox from "../Components/GKCheckbox";
import GKSearchSelect from "../Components/GKSearchSelect";
import GKSelect from "../Components/GKSelect";
import GKTextField from "../Components/GKTextField";
import PhoneInput from "../Components/PhoneInput";

const InputStory = () => {
  const data = [
    {
      code: `<GKCheckbox />`,
      component: <GKCheckbox />,
    },
    {
      code: `<FormControl variant="standard" fullWidth>
          <GKTextField inputLabel={"Label"} />
        </FormControl>`,
      component: (
        <FormControl variant="standard" fullWidth>
          <GKTextField inputLabel={"Label"} />
        </FormControl>
      ),
    },
    {
      code: `<GKSearchSelect
          options={["Red", "Yellow", "Pink"]}
          renderInput={(props) => <TextField {...props} />}
        />`,
      component: (
        <GKSearchSelect
          options={["Red", "Yellow", "Pink"]}
          renderInput={(props) => <TextField {...props} />}
        />
      ),
    },
    {
      code: ` <GKSelect value={"Item 1"}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </GKSelect>`,
      component: (
        <GKSelect value={"Item 1"}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </GKSelect>
      ),
    },
    {
      code: `<PhoneInput />`,
      component: <PhoneInput />,
    },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Inputs</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow>
              <TableCell>{d.component}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(d.component));
                  }}
                >
                  <ContentPasteOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InputStory;
