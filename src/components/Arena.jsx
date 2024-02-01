import { useEffect, useState } from "react";
export default function Arena () {
  const API_KEY = import.meta.env.VITE_ARENA_API_KEY;
  const CHANNEL_ID = 'visual-garden-vyzzojtoycg';
  const ARENA_API_CHANNEL_URL = `https://api.are.na/v2/channels/${CHANNEL_ID}`;
  const ARENA_CHANNEL_THUMB_URL = ARENA_API_CHANNEL_URL + '/thumb';

  console.log(ARENA_API_CHANNEL_URL)
  
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

  const [data, setData] = useState([]);

  useEffect( () => {
    fetchData()
      .then((response) => console.log(response))
  })

  return (
    <div>
    </div>
  )
}
