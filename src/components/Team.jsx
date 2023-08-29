import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [
    {
      headshot: "https://www.datocms-assets.com/103104/1691015804-default.png",
      name: "Graeme Mounsey",
      title: "President",
    },
    {
      headshot: "https://www.datocms-assets.com/103104/1691015804-default.png",
      name: "Alex Silva",
      title: "Vice President",
    },
    {
      headshot: "https://www.datocms-assets.com/103104/1691015804-default.png",
      name: "Lakeisha Sharonina",
      title: "Head of Design",
    },
    {
      headshot: "https://www.datocms-assets.com/103104/1691015804-default.png",
      name: "Hope Kim",
      title: "Treasurer",
    },
    {
      headshot: "https://www.datocms-assets.com/103104/1691015804-default.png",
      name: "Deeva Thomas",
      title: "Assistant",
    },
  ];

  return (
    <div id="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member-profile">
          <img
            src={member.headshot}
            alt={`Headshot of ${member.name}`}
            className="team-member-headshot"
          />
          <div className="team-member-name">{member.name}</div>
          <div className="team-member-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;
