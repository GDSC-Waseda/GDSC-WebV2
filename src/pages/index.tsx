import type { NextPage } from "next";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CommonMeta from "components/CommonMeta";
import { ImageIcon } from "components/ImageIcon";
import { imageIconData } from "constants/index";
import { ImageCardProps } from "~/types";

const Home: NextPage = () => {
  return (
    <>
      <CommonMeta pageTitle="Home" />
      <div className="home-page">
        <div className="home-page__top">
          <div className="home-page__top__container">
            <div className="content-with-image">
              <div className="text-section">
                <div className="home-page__top__title">
                  Innovate<br></br>Empower <br></br>for the future
                </div>
              </div>
              <div className="image-section">
                <img src="gdsc-top.jpg" alt="GDSC Top" />
              </div>
            </div>
          </div>
          <p>Trusted by the World's Best Companies</p>
        </div>
      </div>
    </>
  );
};

export default Home;
