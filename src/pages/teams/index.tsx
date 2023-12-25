import type { NextPage } from "next";
import React, { useState } from "react";
import {
  HeaderCard,
  TeamCard,
  ImageCard,
  YearBar,
} from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";
import { SignalCellularNullOutlined } from "@mui/icons-material";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "TEAMS",
    content: "Explore the teams that work together to make GDSC Waseda special",
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
      image: "project_lead.jpg",
      image2: null,
      multiple: false,
      link: "/project",
      color: "green",
    },
    {
      name: "Backend",
      image: "backend_lead.jpg",
      image2: null,
      multiple: false,
      link: "/backend",
      color: "blue",
    },
    {
      name: "Frontend",
      image: "frontend_lead.jpg",
      image2: null,
      multiple: false,
      link: "/frontend",
      color: "yellow",
    },
    {
      name: "Education",
      image: "education_lead1.jpg",
      image2: "education_lead2.jpg",
      multiple: true,
      link: "/education",
      color: "blue",
    },
    {
      name: "Agile",
      image: "agile_lead.jpg",
      image2: null,
      multiple: false,
      link: "/agile",
      color: "yellow",
    },
    {
      name: "Outreach",
      image: "outreach_lead.jpg",
      image2: null,
      multiple: false,
      link: "/outreach",
      color: "red",
    },
    {
      name: "Operations",
      image: "operations_lead.jpg",
      image2: null,
      multiple: false,
      link: "/operations",
      color: "green",
    },
    {
      name: "Marketing",
      image: "marketing_lead.jpg",
      image2: null,
      multiple: false,
      link: "/marketing",
      color: "red",
    },
    {
      name: "Finance",
      image: "finance_lead.jpg",
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

  const [selectedYear, setSelectedYear] = useState("GDSC 23/24");

  const teamLeadersByYear: Record<
    string,
    Array<{
      name: string;
      image: string;
      image2: string | null;
      multiple: boolean;
      link: string;
      color: string;
    }>
  > = {
    "GDSC 23/24": teamLeaders,
    "GDSC 22/23": [teamLeaders[0], teamLeaders[1], teamLeaders[5]],
    "GDSC 21/22": [teamLeaders[6], teamLeaders[3]],
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  const filteredTeamLeaders = teamLeadersByYear[selectedYear] || [];

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

      <YearBar
        years={Object.keys(teamLeadersByYear)}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />

      <div className="team-leaders-container">
        {filteredTeamLeaders.map((teamCard, index) => (
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
