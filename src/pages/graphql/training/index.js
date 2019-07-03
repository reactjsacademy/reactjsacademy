import React from 'react'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import Grid, { Col, Row } from 'src/components/layout/Grid'
import { H2, P, H3 } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import { CallToActionRow } from '../../../components/layout/CallToActionNextTrainings'
import { FullCurriculumsGraphQL } from '../../../components/curriculum'
import Header from 'src/components/layout/Header'
import {
  AttendeeQuote,
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'

import { Card, Image } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { GRAPHQL_BOOTCAMP, CONVINCE_THE_BOSS_PDF } from 'src/config/data'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'

const metas = {
  title: 'GraphQL Training (NEW) | React GraphQL Academy',
  description:
    'Looking for a GraphQL training? Look no more - take your development career to the next level with our GraphQL training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const TrainingPage = props => (
  <Layout>
    {({ trainings }) => {
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
              {
                to: '/graphql',
                label: 'GraphQL',
              },
              {
                to: '/graphql/training',
                label: 'Training',
              },
            ]}
          />
          <Header
            titleLines={['GraphQL Training']}
            subtitle="Take your development career to the next level with our GraphQL training"
            bgImageName={BOOTCAMP}
            links={[
              {
                text: 'Curriculum',
                to: '#curriculum',
              },
              {
                text: 'Upcoming Courses',
                to: '#upcoming-courses',
              },
              {
                text: 'Free Learning Resources',
                to: '#free-learning-resources',
              },
              {
                text: 'Corporate Training',
                to: '#corporate-training',
              },
              {
                text: 'Student Outcomes',
                to: '#student-outcomes',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Grid>
              <CallToActionRow>
                <Col sm={4}>
                  <LinkButton
                    variant="primary"
                    to="/graphql/training/bootcamp"
                    children="GraphQL Bootcamp"
                  />
                </Col>
                <Col sm={4}>
                  <LinkButton
                    to="/graphql/training/corporate"
                    children="Corporate Team Training"
                    variant="secondary"
                  />
                </Col>
                <Col sm={4}>
                  <LinkButton
                    to="/graphql/training/api"
                    children="GraphQL API training"
                    variant="secondary"
                  />
                </Col>
              </CallToActionRow>
              <Card border="shadow">
                <FullCurriculumsGraphQL trainings={trainings} />
              </Card>
            </Grid>
          </TopSection>
          <Section>
            <Grid>
              <Row>
                <Col md={6}>
                  <AttendeeQuote
                    small
                    quote="I think whatever business you're in, [the courses will] enhance your work. It helped my confidence and boosted me to be in line for a promotion!"
                    fullname="Lara Ramey"
                    job="Software Developer"
                    company="Meredith Corporation"
                    videoUrl="4NY7HCRPhWA"
                  />
                </Col>
                <Col md={5} mdOffset={1}>
                  <Link to="#student-outcomes" name="student-outcomes" />
                  <H2>What students get from a our training</H2>
                  <Ul>
                    <Li>
                      <strong>Build production ready</strong> apps.
                    </Li>
                    <Li>
                      Discuss <strong>real-world projects</strong>.
                    </Li>
                    <Li>
                      Learn <strong>best practices</strong>.
                    </Li>
                    <Li>
                      <strong>Mentoring</strong> by our expert coaches.
                    </Li>
                    <Li>
                      <strong>Stay tech-relevent</strong> in modern development.
                    </Li>
                  </Ul>
                  <LinkButton pdf to={CONVINCE_THE_BOSS_PDF}>
                    Download: Why Devs Should Learn With Us
                  </LinkButton>
                  <H3>Not for beginner devs!</H3>
                  <P>
                    <strong>We do not run learn-to-code bootcamps</strong>. If
                    you want to learn to code, we recommend checking out{' '}
                    <Link to="https://learn.freecodecamp.org/front-end-libraries/react/">
                      Free Code camps
                    </Link>
                    .
                  </P>
                  <Link to="/blog/are-you-the-perfect-react-graphql-student/">
                    Blog: Are YOU the Perfect React Student?
                  </Link>
                </Col>
              </Row>
            </Grid>
          </Section>
          <TrustedBySection />

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )
    }}
  </Layout>
)

export default TrainingPage
