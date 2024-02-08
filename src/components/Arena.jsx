import { useEffect, useState } from "react";
export default function Arena () {
  const API_KEY = import.meta.env.VITE_ARENA_API_KEY;
  const CHANNEL_ID = 'visual-garden-vyzzojtoycg';
  const ARENA_API_CHANNEL_URL = `https://api.are.na/v2/channels/${CHANNEL_ID}`;
  const ARENA_CHANNEL_THUMB_URL = ARENA_API_CHANNEL_URL + '/thumb';

  async function fetchData () {
    const fetchRequest = await fetch(ARENA_CHANNEL_THUMB_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });

    if (!fetchRequest.ok ) {
      throw new Error('API response didnt work :(');
    }

    return await fetchRequest.json()
  }

  const [arenaData, setData] = useState([]);

  useEffect( () => {
    fetchData()
      .then((response) => setData(response.contents))
  })

  return (
    <>
      <h2 className="section-title">Are.na Channel</h2>
      <div id="arena-container">
        {arenaData.map((item) => (
          <a key={item['connection_id']} href={'https://www.are.na/block/' + item['id']} className="arena-child">
            <img className="arena-img" src={item['image']['square']['url']}/>
          </a>
        ))}
      </div>
    </>
  )
}
