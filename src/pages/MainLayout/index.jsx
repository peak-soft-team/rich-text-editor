import { convertToRaw } from "draft-js";
import React, { useState } from "react";
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { set_data } from "../../store/actions/auth.js";

export const Editor = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state);
  console.log(dataUser);
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
      <button onClick={save}>Save</button>
    </div>
  );
};
