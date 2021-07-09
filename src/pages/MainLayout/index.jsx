import React, { useState } from "react";
import "./MainLayout.less";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import PrintIcon from "@material-ui/icons/Print";
import ImageIcon from "@material-ui/icons/Image";
import {
  TextField,
  Container,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  IconButton,
} from "@material-ui/core";

const useSteles = makeStyles((theme) => ({
  formControl: {
    minWidth: 80,
  },
}));

export const MainLayout = () => {
  const classes = useSteles();

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Container maxWidth="md">
        <div>
          <h3>Rich-Text-Editor</h3>
        </div>
        <div className="files">
          <FormControl className={classes.formControl}>
            <InputLabel>File</InputLabel>
            <Select value={value} onChange={handleChange}>
              <MenuItem value={"New Document"}>New Document</MenuItem>
              <MenuItem value={"Preview"}>Preview</MenuItem>
              <MenuItem value={"Print"} startIcon={<PrintIcon />}>
                Print
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Edit</InputLabel>
            <Select>
              <MenuItem value={"Undo"}>Undo</MenuItem>
              <MenuItem value={"Undo"}>Redo</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>View</InputLabel>
            <Select>
              <MenuItem value={"Preview"}>Preview</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Insert</InputLabel>
            <Select>
              <MenuItem value={"Image"}>Image</MenuItem>
              <MenuItem value={"Link"}>Link</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Format</InputLabel>
            <Select>
              <MenuItem value={"Bold"}>Bold</MenuItem>
              <MenuItem value={"Italic"}>Italic</MenuItem>
              <MenuItem value={"Underline"}>Underline</MenuItem>
              <MenuItem value={"Strikethrough"}>Strikethrough</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Table</InputLabel>
            <Select>
              <MenuItem value={"Row"}>Row</MenuItem>
              <MenuItem value={"Column"}>Column</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="block">
          <Tooltip title="Undo">
            <UndoIcon color="action" />
          </Tooltip>
          <Tooltip title="Redo">
            <RedoIcon color="action" />
          </Tooltip>
          <Tooltip title="Bold">
            <FormatBoldIcon color="action" />
          </Tooltip>
          <Tooltip title="Italic">
            <FormatItalicIcon color="action" />
          </Tooltip>
          <Tooltip title="Underline">
            <FormatUnderlinedIcon color="action" />
          </Tooltip>
          <Tooltip title="Strikethrough">
            <StrikethroughSIcon color="action" />
          </Tooltip>
          <Tooltip title="Left">
            <FormatAlignLeftIcon color="action" />
          </Tooltip>
          <Tooltip title="Center">
            <FormatAlignCenterIcon color="action" />
          </Tooltip>
          <Tooltip title="Right">
            <FormatAlignRightIcon color="action" />
          </Tooltip>
          <Tooltip title="Justify">
            <FormatAlignJustifyIcon color="action" />
          </Tooltip>
          <Tooltip title="Bullet list">
            <FormatListBulletedIcon color="action" />
          </Tooltip>
          <Tooltip title="Numbered list">
            <FormatListNumberedIcon color="action" />
          </Tooltip>
          <Tooltip title="Insert/edit image">
            <ImageIcon color="action" />
          </Tooltip>
        </div>
        <div className="text" contenteditable="true"></div>
      </Container>
    </div>
  );
};
