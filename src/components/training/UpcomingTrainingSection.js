import React, { useState } from 'react'

import Section from '../layout/Section'
import { Col, Row } from '../layout/Grid'
import { H2Ref, P } from '../text'
import UpcomingTrainings from './UpcomingTrainings'
import Link from '../navigation/Link'
import selectUpcomingTrainings from './selectUpcomingTrainings'
import { GREY } from '../../config/styles'
// import { Tabs, TabList, TabItem, TabContent, ContentItem } from '../layout/Tabs'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  REACT_PART_TIME,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_WORKSHOP,
  MEETUP,
  GRAPHQL_PART_TIME,
} from '../../config/data'
import Flex from '../layout/Flex'

const CorporateCrossSell = ({ to }) => (
  <Flex alignSelf="self-start">
    <Link to={to} px={3} py={1} border={`3px dotted`} borderColor={GREY}>
      <P>
        <strong>Corporate team training</strong>
      </P>
      Find out more
    </Link>
  </Flex>
)

export const UpcomingTrainingTabs = ({ trainings, limit = 15 }) => {
  // const [activeTab, setActiveTab] = useState(REACT_BOOTCAMP)
  const allTrainings = selectUpcomingTrainings({
    trainings,
    limit,
    types: [
      REACT_BOOTCAMP,
      ADVANCED_REACT,
      REACT_PART_TIME,
      REACT_WORKSHOP,
      REACT_FUNDAMENTALS,
      GRAPHQL_BOOTCAMP,
      GRAPHQL_API,
      GRAPHQL_WORKSHOP,
      GRAPHQL_PART_TIME,
      MEETUP,
    ],
  })

  //   const meetups = selectUpcomingTrainings({
  //     trainings,
  //     limit,
  //     types: [MEETUP],
  //   })

  return (
    // <Tabs active={activeTab} onChange={setActiveTab}>
    //   <TabList>
    //     <TabItem className="upcoming-events" name={TRAINING}>
    //       Courses
    //     </TabItem>
    //     <TabItem className="upcoming-events" name={REACT_BOOTCAMP}>
    //       React Courses
    //     </TabItem>
    //     <TabItem className="upcoming-events" name={GRAPHQL_BOOTCAMP}>
    //       GraphQL Courses
    //     </TabItem>
    //     <TabItem className="upcoming-events" name={MEETUP}>
    //       Meetups
    //     </TabItem>
    //   </TabList>
    //   <TabContent>
    //     <ContentItem name={REACT_BOOTCAMP}>
    <Row>
      <UpcomingTrainings
        className="upcoming-courses-all-courses"
        trainings={allTrainings}
      />
      <CorporateCrossSell to="/react/training/corporate/" />
    </Row>
    //     </ContentItem>

    //     <ContentItem name={GRAPHQL_BOOTCAMP}>
    //       <Row>
    //         <UpcomingTrainings trainings={graphqlTrainings} />
    //         <CorporateCrossSell to="/graphql/training/corporate/" />
    //       </Row>
    //     </ContentItem>

    //     <ContentItem name={MEETUP}>
    //       <Row>
    //         <UpcomingTrainings trainings={meetups} />
    //       </Row>
    //     </ContentItem>
    //   </TabContent>
    // </Tabs>
  )
}

export const UpcomingTrainingSection = ({ trainings, limit = 15 }) => (
  <Section>
    <Row>
      <Col md={11} mdOffset={1}>
        <H2Ref>
          Upcoming - All Events
          <Link to="#upcoming" name="upcoming">
            #
          </Link>
        </H2Ref>
        <UpcomingTrainingTabs trainings={trainings} limit={limit} />
      </Col>
    </Row>
  </Section>
)

export default UpcomingTrainingSection
