import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Our Teams",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };
  const teamLeaders: Array<{ name: string; image: string; link: string; color: string}> = [
    {
      name: "Project",
      image: "project_lead.png",
      link: "/project",
      color: "#00a150",
    },
    {
      name: "Backend",
      image: "backend_lead.png",
      link: "/backend", 
      color: "#4283f3",
    },
    {
      name: "Frontend",
      image: "frontend_lead.png",
      link: "/frontend",
      color: "#fabb08",
    },
    {
      name: "Education",
      image: "education_lead1.png",
      link: "/education",
      color: "#4283f3",
    },
    {
      name: "Agile",
      image: "agile_lead.png",
      link: "/agile",
      color: "#fabb08",
    },
    {
      name: "Outreach",
      image: "outreach_lead.png",
      link: "/outreach",
      color: "#e94336",
    },
    {
      name: "Operations",
      image: "operations_lead.png",
      link: "/operations",
      color: "#00a150",
    },
    {
      name: "Marketing",
      image: "marketing_lead.png",
      link: "/marketing",
      color: "#e94336",
    },
    {
      name: "Finance",
      image: "finance_lead.png",
      link: "/finance",
      color: "#fabb08",
    },
  ];

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
            <a className="team-leader-link" href={`/teams/${teamCard.link}`}>
              <img
                className="team-leader-image"
                src={`/tempImg/${teamCard.image}`}
                style={{
                  border: `5px solid ${teamCard.color}`,
                }}
                alt="team leader"
              />
              <div className="team-leader-name">{teamCard.name}</div>
            </a>
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
