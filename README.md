Histogram TTT project

This project contains the source code for a React application that displays a histogram of word counts from a text file.

## Components

The project consists of the following components:

- `App.js`: The main component that renders the entire application.
- `Histogram.js`: A component responsible for fetching data, processing it, and rendering the histogram using the Chart.js library.
- `ExportButton.js`: A component that provides a button to export the histogram data as a CSV file using the file-saver and PapaParse libraries.

## Libraries and Plugins Used

The project uses the following libraries and plugins:

- React: A JavaScript library for building user interfaces.
- react-chartjs-2: A React wrapper for Chart.js, which provides interactive and customizable charts.
- chart.js/auto: A plugin for Chart.js that automatically includes required chart components based on the chart type.
- axios: A library for making HTTP requests to fetch data from a URL.
- file-saver: A library for saving files on the client-side.
- papaparse: A library for parsing and manipulating CSV data.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Akarsh2606/TerriblyTinyTales.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your browser at `http://localhost:3000`
