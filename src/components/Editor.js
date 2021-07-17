import { React, useState } from "react";
import "./Editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";

const Editor = (props) => {
    
  const title = props.title;
  const value = props.value;
  const language = props.language;
  const onChange = props.onChange;

   const handleChange = (editor, data, value) => {
    onChange(value);
   };

  return (
    <div className="editor-container">
      <div className="title-bar">{title}</div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
