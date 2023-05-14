import React from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const ExportButton = ({ histogramData }) => {
  const handleExport = () => {
    const csvData = Papa.unparse(histogramData);

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    saveAs(blob, 'histogram_data.csv');
  };

  return (
    <div>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportButton;
