import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

import { HeaderCard, MediaCard } from 'components/Cards/index'
import CommonMeta from 'components/CommonMeta'
import { HeaderCardProps, MediaCardProps } from '~/types'

const EventsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: '',
    title: 'Events',
    content: '“Alone  we can do so little; together we can do so much.”'
  }

  const eventsCard: MediaCardProps[] = [
    {
      size: 'm',
      title: '#1 Python for Babies',
      open: true,
      canOpen: false
    },
    {
      size: 'm',
      title: '#1 Python for Babies',
      open: true,
      canOpen: false
    },
    {
      size: 'm',
      title: '#1 Python for Babies',
      open: true,
      canOpen: false
    },
    {
      size: 'm',
      title: '#1 Python for Babies',
      open: true,
      canOpen: false
    }
  ]

  const [showCard, setShowCard] = useState(3)

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
            {eventsCard.map((eventCard, index) => {
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
              )
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
          {eventsCard.map((eventCard, index) => {
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
            )
          })}
        </div>
      </div>
    </>
  )
}

export default EventsPage
