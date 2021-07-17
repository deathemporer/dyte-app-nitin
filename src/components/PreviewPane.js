import { useState } from "react";
import "./PreviewPane.css";

const PreviewPane = (props) => {
  return (
    <div className="preview-pane">
      <iframe 
      title="preview"
      srcDoc={props.web}
      className='live-preview'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
      />
    </div>
  );
};

export default PreviewPane;
