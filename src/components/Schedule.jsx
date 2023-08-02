import React, { useState, useEffect } from "react";

const Schedule = () => {
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQeZibHLW1SoDp0jv4NgJdSbGE0cNrVaoV_a1dNxO5QauNp23L0cyXfBQzseTYAvW3swmh_M3jLi9uJ/pub?output=csv";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(sheetURL);
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData, {
          download: false,
          header: true,
        });
        setData(parsedData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const generateHTML = (rowData) => {
    return (
      <div key={rowData["event"]}>
        <h1>{rowData["event"]}</h1>
        <h2>
          {rowData["month"]} {rowData["date"]}
        </h2>
        <div>{rowData["description"]}</div>
        <a href={rowData["link1"]}>{rowData["link1"]}</a>
      </div>
    );
  };

  return (
    <div id="output-container-calendar">
      {data.map((rowData) => generateHTML(rowData))}
    </div>
  );
};

export default Schedule;
