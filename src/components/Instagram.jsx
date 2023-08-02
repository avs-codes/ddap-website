import React, { useState, useEffect } from "react";

const InstagramProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://www.instagram.com/parsonscodelab/?__a=1" // The URL to fetch the Instagram data directly (without the need for an access token)
        );
        const data = await response.json();
        setProfileData(data.graphql.user);
      } catch (error) {
        console.error("Error fetching Instagram profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { username, edge_owner_to_timeline_media } = profileData;
  const posts = edge_owner_to_timeline_media.edges;

  return (
    <div>
      <h1>{username}</h1>
      <p>Total Posts: {edge_owner_to_timeline_media.count}</p>
      <div>
        {posts.map((post) => (
          <div key={post.node.id}>
            <img
              src={post.node.thumbnail_src}
              alt={post.node.accessibility_caption}
            />
            <p>{post.node.accessibility_caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramProfile;
