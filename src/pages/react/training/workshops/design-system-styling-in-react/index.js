import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2Ref, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import CurriculumStylingAndAdvUI from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI'
import { Card } from 'src/components/elements'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training'
import { Link, Breadcrumb } from 'src/components/navigation'
import { REACT_WORKSHOP } from 'src/config/data'
import { LIST_TWO_COL } from 'src/components/curriculum/selectCurriculumLayout'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import NextTrainingButton from 'src/components/training/NextTrainingButton'

const metas = {
  title: 'Design System Workshop | React GraphQL Academy',
  description:
    'Interested in Design Systems? React GraphQL Academy offers Design Systems in React workshops, focussing on the design part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

export const WORKSHOP_TRAINING_ID = '5cd2c86daa5e8f0a07b924fb'

const StylingDesignSystemWorkshop = ({ path }) => (
  <Layout>
    {({ trainings }) => {
      const nextTraining = getNextTrainingByTrainingId({
        trainings,
        trainingId: WORKSHOP_TRAINING_ID,
      })
      console.log('ddddd', nextTraining, trainings)
      return (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              { to: '/react', label: 'React' },
              { to: '/react/training/', label: 'Training' },
              { to: '/react/training/workshops', label: 'Workshops' },
              {
                to: path,
                label: 'Styling in React using design systems',
              },
            ]}
          />
          <Header
            titleLines={['Styling in React using design systems']}
            subtitle="See how React can look gorgeous and encourage design consistency"
            links={[
              { text: 'Workshop Agenda', to: '#curriculum' },
              { text: 'Is this right for me?', to: '#target-audience' },
            ]}
            bgImageName={BOOTCAMP}
            type={REACT_WORKSHOP}
          />
          <TopSection top>
            <Card>
              <Row>
                <Col lg={10} lgOffset={1}>
                  <CurriculumStylingAndAdvUI layout={LIST_TWO_COL} />
                </Col>
              </Row>
            </Card>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <AttendeeQuote
                  quote="With React, everything is inter-connected which can be difficult to understand. But I see it clearly now [after the course]."
                  fullname="Rafa Fraga"
                  job="Software Engineer"
                  youtubeId="9QpAWAtZy6M"
                />
              </Col>
              <Col md={4} lgOffset={1}>
                <H2Ref>
                  Is this one day workshop right for me? Are you...{' '}
                  <Link to="#target-audience" name="target-audience">
                    #
                  </Link>
                </H2Ref>
                <Ul>
                  <Li>
                    A developer or designer with experience building React
                    components and using CSS?
                  </Li>
                  <Li>
                    A developer or designer interested in building scalable and
                    reusable UIs for big React projects?
                  </Li>
                  <Li>
                    Not satisfied with the Designer/Developer handover in
                    real-world React projects?
                  </Li>
                  <Li>
                    A designer that builds React components and interacts with
                    developers.
                  </Li>
                </Ul>
                <P>
                  If you've said 'yes' to these, this workshop could be for you!
                </P>
                <H3>Not for React beginners!</H3>
                <NextTrainingButton type="workshop" training={nextTraining} />
              </Col>
            </Row>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default StylingDesignSystemWorkshop
