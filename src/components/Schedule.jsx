import { useState, useEffect } from "react";
import Papa from "papaparse";

function Schedule() {

  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQeZibHLW1SoDp0jv4NgJdSbGE0cNrVaoV_a1dNxO5QauNp23L0cyXfBQzseTYAvW3swmh_M3jLi9uJ/pub?output=csv";

  const fileParsing = () =>
  new Promise((resolve) => {
    Papa.parse(sheetURL, {
      download: true,
      header: true,
      complete: function (results, file) {
        resolve(results.data);
      },
    });
  });

  const fetchData = async () => {
    const sheetData = await fileParsing();

    return sheetData
  };

  const filterData = (data) => {
    const filtered = data.filter((item) => item.status === 'upcoming');
    const combined = {
      filtered: filtered,
      whole: data
    }

    return combined
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetchData().then((response) => setData(response))
    
  }, []);

  const generateFiltered = (entry, index) => {
    return (
      <div key={index}>
        <h2>
          {entry["month"]} {entry["date"]}
        </h2>
        <h2>{entry["event"]}</h2>
      </div>
    );
  };

  const generateWhole = (entry, index) => {
    return (
      <div key={index} className={entry["status"]}>
        <h1>{entry["event"]}</h1>
        <h2>
          {entry["month"]} {entry["date"]}
        </h2>
        <div>{entry["description"]}</div>
        <a href={entry["link1"]}>{entry["link1"]}</a>
      </div>
    );
  };



  const handleShowAllEvents = () => {
    const allEvents = document.getElementById('all-events');
    const bodyWrapper = document.getElementById('body-wrapper');

    allEvents.classList.toggle('hidden')
    bodyWrapper.classList.toggle('hidden')

    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <>
    <h2>Upcoming Events:</h2>
      <div id="filtered-events">
          {
          data.filter((item) => item.status === 'upcoming').splice(0,3).map((item, index) => generateFiltered(item, index))
          }
      </div>
      <button id="open-all"  onClick={handleShowAllEvents}>More</button>
      <div id='body-wrapper' onClick={handleShowAllEvents} className='hidden'>
        <div id="all-events" className='hidden'>
            {data.filter((item) => item.status != 'none').map((item, index) => generateWhole(item, index))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
