import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import ExportButton from './ExportButton';


const Histogram = () => {
  const [histogramData, setHistogramData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://www.terriblytinytales.com/test.txt'
      );
      const words = response.data.split(/\s+/);
      const wordMap = {};

      words.forEach((word) => {
        wordMap[word] = (wordMap[word] || 0) + 1;
      });

      const sortedWords = Object.entries(wordMap).sort(
        (a, b) => b[1] - a[1]
      );

      const top20Words = sortedWords.slice(0, 20);
      const labels = top20Words.map(([word]) => word);
      const data = top20Words.map(([, count]) => count);

      setHistogramData({ labels, data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      {histogramData && (
        <>
          <Bar
            data={{
              labels: histogramData.labels,
              datasets: [
                {
                  label: 'Word Count',
                  data: histogramData.data,
                  backgroundColor: 'rgba(75,192,192,0.6)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  type: 'linear',
                  beginAtZero: true,
                  ticks: {
                    precision: 0,
                  },
                },
              },
            }}
          />
          <ExportButton histogramData={histogramData} />
        </>
      )}
    </div>
  );
};

export default Histogram;