import React, { useState } from "react";
import * as ExcelJS from "exceljs";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const Convert = ({ setJsonData }) => {
  const handleFile = async (event) => {
    setJsonData(JSON.stringify("Result will display here", null, 2));
    const inputFile = event.target.files[0];
    if (!inputFile) {
      alert("Please select a file first.");
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const reader = new FileReader();

    reader.onload = async (e) => {
      const buffer = e.target.result;
      const toastID = toast.loading("Loading...");
      await workbook.xlsx.load(buffer);

      const worksheet = workbook.getWorksheet(1); // assuming the first worksheet

      const headers = [];
      worksheet.getRow(1).eachCell((cell) => {
        headers.push(cell.value);
      });

      const jsonData = [];

      worksheet.eachRow((row, rowIndex) => {
        if (rowIndex === 1) {
          // skip header row
          return;
        }

        const rowObject = {};
        row.eachCell((cell, colIndex) => {
          rowObject[headers[colIndex - 1]] = cell.value;
        });
        jsonData.push(rowObject);
      });
      toast.remove();
      toast.success("Loaded. Please scroll down and verify the result.", { ID: toastID });
      setJsonData(JSON.stringify(jsonData, null, 2));
    };

    reader.readAsArrayBuffer(inputFile);
  };

  return (
    <div>
      <Toaster />
      <label htmlFor="file">Choose Excel (XLSX) file</label>
      <input accept=".xlsx, .xls" onChange={handleFile} id="file" type="file" className="file-input bg-gray-100 file-input-bordered file-input-success w-full " />
    </div>
  );
};

export default Convert;
