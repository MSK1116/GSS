import React, { useState } from "react";

const Convert = () => {
  const [json, setJson] = useState(null);

  const handleFile = (event) => {
    const inputFile = event.target.files[0];
    if (!inputFile) {
      alert("Please select a file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setJson(JSON.stringify(jsonData, null, 2));
    };

    reader.readAsArrayBuffer(inputFile);
  };

  return (
    <div>
      <h1>Excel to JSON Converter</h1>
      <input type="file" onChange={handleFile} />
      {json && <pre>{json}</pre>}
    </div>
  );
};

export default Convert;
