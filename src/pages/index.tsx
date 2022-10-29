import type { NextPage } from 'next'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ImageCard } from 'components/Cards/index'
import CommonMeta from 'components/CommonMeta'
import { ImageIcon } from 'components/ImageIcon'
import { imageIconData } from 'constants/index'
import { ImageCardProps } from '~/types'

const Home: NextPage = () => {
  const topCard: ImageCardProps = {
    title: '',
    image: 'gdsc-top.png',
    imagePosition: 'right'
  }

  const secondCard: ImageCardProps = {
    title: '',
    image: 'group-highfive.png',
    imagePosition: 'left'
  }

  const about_contents = [
    'Google Developer Student Clubs are university-based community groups supported by Google Developers intending href empower student developers and strengthen their leadership skills',
    'Here at GDSC Waseda, by collaborating with Google, we will organize many exciting events such as speaker sessions, hackathons, introductory hands-on workshops, study sessions, and so on'
  ]
  return (
    <>
      <CommonMeta pageTitle="Home" />
      <div className="home-page">
        <div className="home-page__top">
          <ImageCard props={topCard}>
            <div className="home-page__top__title">Change the World</div>
            <div className="home-page__top__button">
              <Button variant="outline-dark" disabled className="button">
                <Link href="/forms">Join Us</Link>
              </Button>
            </div>
          </ImageCard>
        </div>
        <div className="home-page__about">
          <ImageCard props={secondCard}>
            <div className="home-page__about__title">About us</div>
            <div className="home-page__about__description">
              <p>{about_contents[0]}</p>
              <p>{about_contents[1]}</p>
            </div>
            <Stack spacing={2} direction="row" padding={2}>
              <Button variant="outline-dark" className="about-page__button">
                <Link href="/teams">Teams</Link>
              </Button>
              {/* TODO: remove disabled when Event Page is released */}
              <Button
                variant="outline-dark"
                className="about-page__button"
                disabled
              >
                <Link href="/events">Events</Link>
              </Button>
            </Stack>
          </ImageCard>
        </div>
        <div className="home-page__teams">
          <div className="home-page__teams__title">Teams</div>
          <div className="home-page__teams__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="home-page__teams__icons">
            <Row xs={2} md={4} className="justify-content-center">
              {imageIconData &&
                imageIconData.map((image, index) => (
                  <Col key={index}>
                    <ImageIcon props={image} />
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
