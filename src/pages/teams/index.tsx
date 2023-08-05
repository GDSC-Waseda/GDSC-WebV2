import type { NextPage } from "next";
import TeamCard from "components/Cards/TeamCard/index";
import { MediaCard } from "components/Cards/MediaCard"; // Import the MediaCard component
import { ImageCard, HeaderCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, MediaCardProps } from "~/types";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Teams",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCard: ImageCardProps = {
    title: "Google Developer Student Clubs",
    content:
      "Google Developer Student Clubs are university-based community groups supported by Google Developers intending href empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on",
    image: "group-highfive.png",
    imagePosition: "left",
  };

  const mediaCards: MediaCardProps[] = [
    {
      size: "l",
      title: "Media Card 1",
      description: "Test",
      canOpen: true,
      open: true,
    },
    {
      size: "l",
      title: "Media Card 2",
      description: "Test",
      canOpen: false,
      open: false,
    },
    {
      size: "l",
      title: "Media Card 2",
      description: "Test",
      canOpen: false,
      open: false,
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
      <h1 className="members-title">Members</h1>

      {/* Add MediaCard components here */}
      {mediaCards.map((card, index) => (
        <MediaCard key={index} props={card}>
          {/* Add content for the MediaCard here */}
        </MediaCard>
      ))}
    </div>
  );
};

export default TeamsPage;
