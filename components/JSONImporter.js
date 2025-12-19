// components/JSONImporter.js
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setResumeData } from "@/store/resumeSlice"; // adjust path if needed

export default function JSONImporter() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setError(""); // clear previous errors
    const file = e.target.files?.[0];

    if (!file) {
      setError("No file selected");
      return;
    }

    if (!file.name.endsWith(".json")) {
      setError("Please upload a JSON file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        dispatch(setResumeData(json));
      } catch (parseError) {
        setError("Failed to parse JSON file");
      }
    };
    reader.onerror = () => {
      setError("Error reading file");
    };

    reader.readAsText(file);
  };

  return (
    <div className="json-importer">
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        data-testid="json-input"
      />

      {error && <p className="error text-red-500">{error}</p>}
    </div>
  );
}
