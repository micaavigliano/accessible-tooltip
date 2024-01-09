import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";
import { ContentCopy } from "@mui/icons-material";

interface ICopyToClipboard {
  text?: string;
  type?: "text" | "input";
}

const CopyToClipboard: React.FC<ICopyToClipboard> = ({ text, type }) => {
  const [copyText, setCopyText] = useState<string>("Copiar al portapapeles");
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const handleCopyText = () => {
    navigator.clipboard.writeText(text || inputValue).then(() => {
      setCopyText("Copiado");
      setTimeout(() => {
        setCopyText("Copiar al portapapeles");
      }, 5000);
    });
  };

  const handleChange = () => {
    if (inputRef.current) {
      setInputValue(inputRef.current.value);
    }
  };

  return (
    <div className="bg-gray-300 p-2 rounded w-2/5 flex items-center justify-between">
      {type === "text" && (
        <span className="mr-2 text-black bg-white w-full p-2 rounded">
          {text}
        </span>
      )}
      {type === "input" && (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="p-2 w-full mr-2 rounded"
          placeholder="Escribí algo!"
        />
      )}
      <Tooltip text={copyText} direction={"top"} id={"copyid"}>
        <button onClick={handleCopyText} aria-labelledby="copyid">
          <ContentCopy />
        </button>
      </Tooltip>
    </div>
  );
};

export default CopyToClipboard;
