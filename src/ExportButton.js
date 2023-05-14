import React from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const ExportButton = ({ histogramData }) => {
  const handleExport = () => {
    // Convert histogram data to CSV format using PapaParse library
    const csvData = Papa.unparse(histogramData);

    // Create a new Blob with the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Use the file-saver library to save the Blob as a CSV file
    saveAs(blob, 'histogram_data.csv');
  };

  return (
    <div>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportButton;
