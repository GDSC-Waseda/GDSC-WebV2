import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TagManager from "react-gtm-module";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";

import { ImageCard, HeaderCard } from "components/Cards/index";
import Carousel from "components/Carousel";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, CarouselCardProps } from "~/types";

export const AboutPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "About Us",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCard: ImageCardProps = {
    title: "Google Developer Student Clubs",
    content:
      "Google Developer Student Clubs are university-based community groups supported by Google Developers intending href empower student developers and strengthen their leadership skills\nHere at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on",
    image: "group-highfive.png",
    imagePosition: "left",
  };

  const carouselCards: Array<CarouselCardProps> = [
    {
      image: "minisch2023.png",
      subtitle: "Mini Solution Challenge 23",
      title: "JUL 17, 2022",
      old: false,
      link: "events/details/mini-solution-challenge-2023",
    },
    {
      image: "hackath.png",
      subtitle: "Bridge Hackathon 2023",
      title: "FEB 11, 2023",
      old: false,
      link: "events/details/bridge-hackathon-2023",
    },
    {
      image: "demoday.png",
      subtitle: "Mini Solution Challenge 22",
      title: "JUL 17, 2022",
      old: false,
      link: "events/details/mini-solution-challenge-2022",
    },
    {
      image: "web3sesh.png",
      subtitle: "Web3 Speaker Session",
      title: "JUN 14, 2023",
      old: false,
      link: "/404",
    },
  ];
  /*
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-AboutPage' })
  }, []) */

  return (
    <div className="about-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="about"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />
      <ImageCard props={imageCard}>
        <Stack spacing={2} direction="row" padding={2}>
          <Link href="/teams">
            <Button variant="outline-dark" className="about-page__button">
              Teams
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline-dark" className="about-page__button">
              Events
            </Button>
          </Link>
        </Stack>
      </ImageCard>
      <div className="about-page__events">
        <div className="about-page__events__container">
          <div className="about-page__events__title">
            Build Good Things, Together
          </div>
          <div className="about-page__events__description">
            Innovation never ends. Join us as we explore topics from all fields.
          </div>
        </div>

        <div className="about-page__events__carousel">
          <Carousel props={carouselCards} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
