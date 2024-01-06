import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { ContentCopy } from "@mui/icons-material";

interface ICopyToClipboard {
  text: string;
  type?: "text" | "input";
}

const CopyToClipboard: React.FC<ICopyToClipboard> = ({ text, type }) => {
  const [copyText, setCopyText] = useState<string>("copy");
  const handleCopyText = () => {
    navigator.clipboard.writeText(text!).then(() => {
      setCopyText("copied");
      setTimeout(() => {
        setCopyText("copy");
      }, 5000);
    });
  };
  return (
    <div className="bg-gray-300 p-2 rounded">
      {type === "text" && <span className="mr-2 text-black">{text}</span>}
      <Tooltip text={copyText} direction={"right"} id={"copyid"}>
        <button onClick={handleCopyText} aria-labelledby="copyid">
          <ContentCopy />
        </button>
      </Tooltip>
    </div>
  );
};

export default CopyToClipboard;
