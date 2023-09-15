import type { NextPage } from "next";
import React, { useState } from "react";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";
import { SignalCellularNullOutlined } from "@mui/icons-material";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Our Teams",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const teamLeaders: Array<{
    name: string;
    image: string;
    image2: string | null;
    multiple: boolean;
    link: string;
    color: string;
  }> = [
    {
      name: "Project",
      image: "project_lead.png",
      image2: null,
      multiple: false,
      link: "/project",
      color: "green",
    },
    {
      name: "Backend",
      image: "backend_lead.png",
      image2: null,
      multiple: false,
      link: "/backend",
      color: "blue",
    },
    {
      name: "Frontend",
      image: "frontend_lead.png",
      image2: null,
      multiple: false,
      link: "/frontend",
      color: "yellow",
    },
    {
      name: "Education",
      image: "education_lead1.png",
      image2: "education_lead2.png",
      multiple: true,
      link: "/education",
      color: "blue",
    },
    {
      name: "Agile",
      image: "agile_lead.png",
      image2: null,
      multiple: false,
      link: "/agile",
      color: "yellow",
    },
    {
      name: "Outreach",
      image: "outreach_lead.png",
      image2: null,
      multiple: false,
      link: "/outreach",
      color: "red",
    },
    {
      name: "Operations",
      image: "operations_lead.png",
      image2: null,
      multiple: false,
      link: "/operations",
      color: "green",
    },
    {
      name: "Marketing",
      image: "marketing_lead.png",
      image2: null,
      multiple: false,
      link: "/marketing",
      color: "red",
    },
    {
      name: "Finance",
      image: "finance_lead.png",
      image2: null,
      multiple: false,
      link: "/finance",
      color: "yellow",
    },
  ];

  const [teamLeaderImages, setTeamLeaderImages] = useState(
    teamLeaders.map((leader) => leader.image)
  );

  const handleSwapClick = (index: number) => {
    setTeamLeaderImages((prevImages) => {
      const newImages = [...prevImages];
      const teamLeader = teamLeaders[index];

      if (teamLeader.multiple && teamLeader.image2) {
        newImages[index] =
          newImages[index] === teamLeader.image
            ? teamLeader.image2
            : teamLeader.image;
      }

      return newImages;
    });
  };

  return (
    <div className="team-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="team"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />

      <div className="bold-text">
        <a>
          Teams are the foundation to any organization.
          <br></br>
          Explore the different teams that work together to make GDSC Waseda
          truly special.
        </a>
      </div>

      <div className="team-leaders-container">
        {teamLeaders.map((teamCard, index) => (
          <div key={index} className="team-leader">
            {teamCard.multiple == true ? (
              <div className="team-leader-swap-container">
                <a
                  className="team-leader-link"
                  href={`/teams/${teamCard.link}`}
                >
                  <img
                    className={`team-leader-image ${teamCard.color}`}
                    src={`/tempImg/leads/${teamLeaderImages[index]}`}
                    alt="team leader"
                  />
                </a>
                <button
                  className="team-leader-swap-button"
                  onClick={() => handleSwapClick(index)}
                >
                  <img
                    className="team-leader-swap"
                    src={`/tempImg/arrows-${teamCard.color}.png`}
                    alt="arrows"
                  />
                </button>
              </div>
            ) : (
              <a className="team-leader-link" href={`/teams/${teamCard.link}`}>
                <img
                  className={`team-leader-image ${teamCard.color}`}
                  src={`/tempImg/leads/${teamLeaderImages[index]}`}
                  alt="team leader"
                />
              </a>
            )}
            <div className="team-leader-name">{teamCard.name}</div>
            <a className="team-leader-link" href={`/teams/${teamCard.link}`}>
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
