// We import two React features that we need in order to update our site with the Google Sheets data
import { useState, useEffect } from 'react'

// Import our Papa Parse package in order for us to use it
import Papa from "papaparse";

function Calendar() {

  // The link given by the Google Sheet itself when you go to File > Share > Publish to Web
  // Make sure to publish as a CSV to make it into a useable format
  const sheetURL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQeZibHLW1SoDp0jv4NgJdSbGE0cNrVaoV_a1dNxO5QauNp23L0cyXfBQzseTYAvW3swmh_M3jLi9uJ/pub?output=csv`;

  // This is a promise, a more modern way of working with asynchronous code
  // A promise works by stating that something will eventually be defined but is initially undefined, in this case filePhrasing()
  // The "thing" becomes defined whenever you invoke the resolve() function, passing in whatever data you want to be the value of your "thing"
  // We use a promise since we have to fetch data from the Google Sheet as an API, which is an asynchronous action (we have to pull data from somewhere else on the web and that takes time)
  const fileParsing = () =>
    new Promise((resolve) => {
      // Here, we call on our papaparse library (in papaparse.min.js) and use it to convert (parse) our Google Sheet CSV string into a more convenient JSON format
      // We invoke papaparse's "parse()" method and pass it the URL of our Google Sheet from above as the first argument
      // The second argument (the Javascript Object or {}) is papaparse specific and represents a custom configuration for how parse() will execute
      Papa.parse(sheetURL, {
        // This indicates that the "thing" at our sheetURL is a file and that papaparse needs to download it to obtain the data
        download: true,
        // This is a bit more complicated to explain but it basically means that the all the objects in the JSON will have their key names based on the first row of the table
        // i.e. The first key of each object will be named "event" (based on our Google Sheet), the second will be "month", third "date", etc. You can see this more clearly console.log() the data in getData()
        header: true,
        // This is a function that executes once the CSV data is finished being parsed
        // It receives the resulting information ("results") and the CSV file ("file") if the CSV was a local file. We don't need the file so we don't use it
        complete: function (results, file) {
          // This is the key component of the Javascript promise, we tell the promise to resolve with the data from the Papa.parse() result
          // This then sends the JSON back into our "data" const in the getData() function below so that we can use it to render our page
          resolve(results.data);
        },
      });
    });

  // In order to use promises and asynchronous functionality you have declare the function as async with the keyword "async" before the ()
  const getData = async () => {
    // This is what allows us to use asynchronous data. Normally, const data would try to immediately set it's value to fileParsing()
    // However, this won't work since we have to pull data from somewhere else and that has a response time, even though it's a few milliseconds (Technically it will work but the value of data would be undefined)
    // So we tell Javascript to wait for fileParsing() to resolve and then, and only then, will the rest of the function execute
    const sheetData = await fileParsing();
    console.log("data", sheetData);
    return sheetData;
  };

  const [data, setData] = useState([]);
  useEffect( () => {  
    getData().then((res)=> setData([...res]))
  }, []
  );

  // //The function below creates a <div> for every row in our Google Sheet, or every separate club event
  // //the backticks (``) allow us to combine HTML with dynamically pulled in data
  // //the words 'event' and 'month' within those square brackets represent what column's data we are putting in the tag

  // const generateHTML = (rowData) => {
  //   return `
  //   <div>
  //     <h1>${rowData["event"]}</h1>
  //     <h2>${rowData["month"]} ${rowData["date"]}</h2>
  //     <div>${rowData["description"]}</div>
  //     <a href="${rowData["link1"]}">${rowData["link1"]}</a>
  //   </div>
  // `;
  // };

  // //The above function renders HTML elements for just one row, but this function asynchronously renders + updates the HTMl to reflect the data of the sheet

  // const renderData = async () => {
  //   const data = await getData();
  //   //This defines our output container (where our generated HTML goes on the page) as the element with the ID 'output-container-calendar)
  //   const outputContainer = document.getElementById(
  //     "output-container-calendar"
  //   );

  //   //This redefines generateHTMl as a sum of all the rows of data in the sheet
  //   let generatedHTML = "";
  //   data.forEach((rowData) => {
  //     generatedHTML += generateHTML(rowData);
  //   });

  //   outputContainer.innerHTML = generatedHTML;
  // };

  // // ^What Alex said
  // renderData();

  return (
    <>
      <div>
        Calendar Imported Successfull
      </div>

    </>
  );
}

export default Calendar;
