import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

import { HeaderCard, MediaCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, MediaCardProps } from "~/types";

const EventsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Events",
    content: "“Alone  we can do so little; together we can do so much.”",
  };

  const eventsCard_UpComing: MediaCardProps[] = [];

  const eventCard_Past_Preview: MediaCardProps[] = [
    {
      size: "m",
      title: "Mini Solution Challenge",
      image: "event-solutionchallenge.png",
      tags: ["Solution Challenge", "Demo Day"],
      date: "July 14, 2023 @Google Japan",
      description: "2023 Mini-Solution Challenge by GDSC Waseda",
      link: "/events/details/miniSolutionChallenge",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Lunchtime Workshop",
      image: "event-hashmarks-background.png",
      tags: ["Workshop", "Study Group"],
      date: "July 11, 2023",
      description: "Lunchtime workshop planning session 2023-24",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Web3 Speaker Session",
      image: "event-hashmarks-background.png",
      tags: ["Speaker Session", "Tech Talk"],
      date: "June 15, 2023",
      description: "Embracing the Future: Web3 and NFTs",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Flutter Study Jam 4",
      image: "event-flutter.png",
      tags: ["Workshop", "Study Group"],
      date: "June 8, 2023",
      description: "Flutter Study Jam 4: material design",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Flutter Study Jam 3",
      image: "event-flutter.png",
      tags: ["Workshop", "Study Group"],
      date: "June 1, 2023",
      description: "Introduction to Flutter Study Jam 3 (offline)",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Flutter Study Jam 2",
      image: "event-flutter.png",
      tags: ["Workshop", "Study Group"],
      date: "May 25, 2023",
      description: "Introduction to Flutter Study Jam 2",
      link: "/404",
      open: true,
      canOpen: false,
    },
  ];

  const eventsCard_Past: MediaCardProps[] = [
    {
      size: "m",
      title: "Flutter Study Jam 1",
      image: "event-flutter.png",
      tags: ["Workshop", "Study Group"],
      date: "May 18, 2023",
      description: "Introduction to Flutter Study Jam 1",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Networking Event",
      image: "event-hashmarks.png",
      tags: ["Speaker Session", "Tech Talk"],
      date: "May 6, 2023",
      description: "GDSC Waseda Networking Event",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "International Women's Day Event",
      image: "event-international-womans-day.png",
      tags: ["Speaker Session", "Tech Talk"],
      date: "April 28, 2023",
      description: "WTM International Women's Day 2023",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Andriod Dev. Kotlin Workshop",
      image: "event-hashmarks-background.png",
      tags: ["Workshop", "Study Group"],
      date: "April 15, 2023",
      description: "Android Dev. Part 1",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Cybersecurity on Wheels",
      image: "event-cyber-security.png",
      tags: ["Speaker Session", "Tech Talk"],
      date: "March 8, 2023",
      description: "Safeguarding the Future of Automotive Tech",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "GDSC Solution Challenge",
      image: "event-solutionchallenge.png",
      tags: ["Solution Challenge"],
      date: "February 7, 2023",
      description: "GDSC Solution Challenge Info Session",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Graphic Design 101",
      image: "event-photoShop.png",
      tags: ["Workshop", "Study Group"],
      date: "January 7 2023",
      description: "An Introduction to Photoshop",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Waseda Time Speaker Session",
      image: "event-waseda-time.png",
      tags: ["Speaker Session", "Tech Talk"],
      date: "December 23 2022",
      description: "Meet The Student Team Behind WasedaTime",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "ML Study Jam 1",
      image: "event-ML-study-jams.png",
      tags: ["Workshop", "Study Group"],
      date: "November 22, 2022",
      description: "Machine Learning Study Jams Session 1",
      link: "/404",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "GDSC Info Session",
      image: "event-info-session.png",
      tags: ["GDSC", "Recruitment"],
      date: "October 14, 2022",
      description: "All You Need To Know About GDSC Waseda",
      link: "/404",
      open: true,
      canOpen: false,
    },
  ];

  const [showCard, setShowCard] = useState(3);

  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  const togglePastEvents = () => {
    setShowAllPastEvents((prevState) => !prevState);
  };

  return (
    <>
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="events"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />
      <div className="events__body">
        <div className="events__body__upcoming">
          <div className="events__body__header">
            <span>Upcoming</span>
          </div>
          {eventsCard_UpComing.length === 0 ? (
            <div className="no-events">
              <p>
                There are currently no upcoming events. We'll be back with more.
              </p>
            </div>
          ) : (
            <div className="events__body__container">
              {eventsCard_UpComing.map((eventCard, index) => {
                return (
                  <Link
                    href={eventCard.link}
                    key={index}
                    className="a"
                  >
                    <a>
                      <MediaCard props={eventCard} />
                    </a>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="events__body__past">
          <div className="events__body__header">
            <span>Past</span>
          </div>
          {(showAllPastEvents
            ? [...eventCard_Past_Preview, ...eventsCard_Past]
            : eventCard_Past_Preview
          ).map((eventCard, index) => (
            <Link href={eventCard.link} key={index}>
              <a>
                <MediaCard props={eventCard} />
              </a>
            </Link>
          ))}
          <div className="events__body__button">
            <Button
              variant="outline"
              onClick={togglePastEvents}
              className="button"
            >
              {showAllPastEvents ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
