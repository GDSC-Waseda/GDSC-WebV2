import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

import { HeaderCard, MediaCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, MediaCardProps } from "~/types";

// testing prettier

const EventsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Events",
    content: "“Alone  we can do so little; together we can do so much.”",
  };

  const eventsCard_UpComing: MediaCardProps[] = [
    {
      size: "m",
      title: "Lunch Time Workshop",
      image: "event-android-dev-p1.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Mini Solutions Challenge",
      image: "event-solutions-challenge.png",
      open: true,
      canOpen: false,
    },
  ];

  const eventsCard_Past: MediaCardProps[] = [
    {
      size: "m",
      title: "Web3 Speaker Session",
      image: "event-web3.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Flutter Study Jams",
      image: "event-flutter.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Networking Session",
      image: "event-networking.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "WTM International",
      image: "event-international-womans-day.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Android Dev. Part 1",
      image: "event-android-dev-p1.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Cybersecurity on Wheels",
      image: "event-cyber-security.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "GDSC Solution Challenge",
      image: "event-solutions-challenge.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Graphic Design 101",
      image: "event-photoShop.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Speaker Session / Tech Talk",
      image: "event-waseda-time.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "ML Study Jams 1",
      image: "event-ML-study-jams.png",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Info Session",
      image: "event-info-session.png",
      open: true,
      canOpen: false,
    },

  ];

  const [showCard, setShowCard] = useState(3);

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
          <div className="events__body__container">
            {eventsCard_UpComing.map((eventCard, index) => {
              return (
                <MediaCard props={eventCard} key={index}>
                  <div className="media-card__tags">
                    <div className="media-card__tag">Python</div>
                    <div className="media-card__tag">Beginner</div>
                  </div>
                  <div className="media-card__date">2021/11/26 Fri 18:30~</div>
                  <div className="media-card__details">
                    Sample Details of the Events.
                  </div>
                </MediaCard>
              );
            })}
            <div className="events__body__button">
              <Button variant="outline-dark" disabled className="button">
                <Link href="/forms">More Events</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="events__body__past">
          <div className="events__body__header">
            <span>Past</span>
          </div>
          {eventsCard_Past.map((eventCard, index) => {
            return (
              <MediaCard props={eventCard} key={index}>
                <div className="media-card__tags">
                  <div className="media-card__tag">Python</div>
                  <div className="media-card__tag">Beginner</div>
                </div>
                <div className="media-card__date">2021/11/26 Fri 18:30~</div>
                <div className="media-card__details">
                  Sample Details of the Events.
                </div>
              </MediaCard>
            );
          })}
          <div className="events__body__button">
            <Button variant="outline-dark" disabled className="button">
              <Link href="/forms">More Events</Link>
            </Button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default EventsPage;
