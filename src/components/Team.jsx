import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [
    {
      headshot:
        "https://www.datocms-assets.com/99382/1694644825-polaroid-graeme.png",
      name: "Graeme Mounsey",
      title: "President",
      id: "pic1",
    },
    {
      headshot:
        "https://www.datocms-assets.com/99382/1694644786-polaroid-alex.png",
      name: "Alex Silva",
      title: "Vice President",
      id: "pic2",
    },
    {
      headshot:
        "https://www.datocms-assets.com/99382/1694644843-polaroid-lakeisha.png",
      name: "Lakeisha Sharonina",
      title: "Head of Design",
      id: "pic3",
    },
    {
      headshot: "https://www.datocms-assets.com/99382/1695264457-hope.png",
      name: "Hope Kim",
      title: "Treasurer",
      id: "pic4",
    },
    {
      headshot:
        "https://www.datocms-assets.com/99382/1694644807-polaroid-deeva.png",
      name: "Deeva Thomas",
      title: "Coordinator",
      id: "pic5",
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
            id={member.id}
          />
          <div className="team-member-name">{member.name}</div>
          <div className="team-member-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;
