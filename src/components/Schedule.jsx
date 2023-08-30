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

    return sheetData;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => response.filter((item) => item.status === "upcoming"))
      .then((filtered) => setData(filtered));
  }, []);

  const handleShowAllEvents = () => {
    const allEvents = document.getElementById("all-events");
    const bodyWrapper = document.getElementById("body-wrapper");
    allEvents.classList.toggle("hidden");
    bodyWrapper.classList.toggle("hidden");
    bodyWrapper.classList.toggle("flex");

    document.querySelector("body").classList.toggle("no-scroll");
  };

  const generateDescriptive = (entry) => {
    const template = `
      <div  class="selected-event">
        <div class="event-details">
          <h1 class="selected-title">${entry["event"]}</h1>
          <h4 class="selected-type">Format: ${entry["type"]}</h4>
          <h4 class="selected-subject">About: ${entry["subject"]}</h4>
          <div class="selected-description">${entry["description"]}</div>
          <div class="selected-links">
            <a href=${entry["link1"]}>${entry["link1"]}</a>
            <a href=${entry["link2"]}>${entry["link2"]}</a>
          </div>
        </div>
        <div class="selected-date">
          <div class="event-month">${entry["month"]}</div>
          <div class="event-day"> ${entry["date"]}</div>
        </div>
      </div>
    `
    return template
 
    ;
  };

  const loadArticle = (event) => {
    handleShowAllEvents();
    document.getElementById("all-events").innerHTML = generateDescriptive(data[parseInt(event.target.dataset.index)]);
  };

  const hide = () => {
    handleShowAllEvents();
    document.querySelector("body").classList.remove("no-scroll");
  };

  const toggleShowChildren = () => {
    document.getElementById('filtered-events').classList.toggle('hide-children')

    const hideButton = document.getElementById('show-more');

    if (hideButton.innerHTML === "More") {
      hideButton.innerHTML = "Less"
    } else {
      hideButton.innerHTML = "More"
    }
  }

  return (
    <>
      <h2 className="section-title">Upcoming Events:</h2>
      <div id="filtered-events" className="hide-children">
        {data.map((item, index) => (
          <div key={index} data-index={index} className="event" onClick={loadArticle}>
            <div data-index={index} className="event-details">
              <h2 data-index={index} className="event-title">{item["event"]}</h2>
              <div data-index={index} className="event-type">
                {item["type"]} • {item["subject"]}
              </div>

              <div data-index={index} className="event-links">
                <a data-index={index} className="event-link" href={item["link1"]}>
                  {item["link1"]}
                </a>
                <a data-index={index} className="event-link" href={item["link2"]}>
                  {item["link2"]}
                </a>
              </div>
            </div>
            <div data-index={index} className="event-date">
              <div data-index={index} className="event-month">{item["month"]}</div>
              <div data-index={index} className="event-day"> {item["date"]}</div>
            </div>
          </div>
        ))}
      </div>
      <div id="button-wrapper">
        <button id="show-more" onClick={toggleShowChildren}>More</button>
      </div>
      <div id="body-wrapper" onClick={hide} className="hidden">
        <div id="all-events" className="hidden"></div>
      </div>
    </>
  );
}

export default Schedule;
