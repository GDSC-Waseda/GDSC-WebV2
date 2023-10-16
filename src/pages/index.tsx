import type { NextPage } from "next";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { ImageIcon } from "components/ImageIcon";
import { imageIconData } from "constants/index";
import { ImageCardProps } from "~/types";

const Home: NextPage = () => {
  const topCard: ImageCardProps = {
    title: "",
    image: "gdsc-top.png",
    imagePosition: "right",
  };

  const secondCard: ImageCardProps = {
    title: "",
    image: "group-highfive.png",
    imagePosition: "left",
  };

  const about_contents = [
    "Google Developer Student Clubs are university-based community groups supported by Google Developers intending to empower student developers and strengthen their leadership skills",
    "Here at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on.",
  ];
  return (
    <>
      <CommonMeta pageTitle="Home" />
      <div className="home-page">
        <div className="home-page__top">
          <div className="home-page__top__container">
            <ImageCard props={topCard}>
              <div className="home-page__top__title">
                Innovate<br></br>Empower <br></br>for the future
              </div>
            </ImageCard>
          </div>
          <p>Trusted by the World's Best Companies</p>
        </div>
      </div>
    </>
  );
};

export default Home;
