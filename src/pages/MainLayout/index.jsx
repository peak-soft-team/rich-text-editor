import { convertToRaw } from "draft-js";
import React, { useState } from "react";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { set_data, log_out } from "../../store/actions/auth.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const Editor = () => {
  // this is for button to style
  const classes = useStyles();
  // this is redux hooks
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const dataUser = useSelector((state) => state);
  console.log(dataUser);

  // this is for pushing into welcome page
  const history = useHistory();
  if (success) {
    history.push("/welcome");
  }

  const config = {
    editor: {
      style: {
        border: "1px solid #6d6285",
        backgroundColor: "#f1f1e9",
        height: "70vh",
      },
    },
  };
  const [editorState, setEditorState] = useState(MUIEditorState.createEmpty());
  const onChange = (newState) => {
    setEditorState(newState);
  };
  const save = () => {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    // localStorage.setItem("draftRaw", JSON.stringify(rawContent));
    alert("Saved");
    dispatch(set_data(rawContent));
  };
  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "30px 0" }}>
      <MUIEditor
        editorState={editorState}
        onChange={onChange}
        config={config}
      />
      <Button
        variant="contained"
        color="default"
        size="medium"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={save}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="default"
        size="medium"
        className={classes.button}
        onClick={() => dispatch(log_out(history.push("/welcome")))}
      >
        Log out
      </Button>
    </div>
  );
};
