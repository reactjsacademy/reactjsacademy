import React from 'react'
import { graphql } from 'gatsby'
import BaseTemplate from './baseTemplate'
import Curriculum from 'src/components/curriculum/CurriculumReactBootcamp'
import TargetAudienceList from 'src/components/curriculum/CurriculumReactBootcamp/TargetAudienceList'
import {
  REACT_FUNDAMENTALS,
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  REACT_WORKSHOP,
  REACT_TRIAL_ID,
  REACT_BOOTCAMP_ID,
} from 'src/config/data'

export const crossSellTypes = [
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  REACT_PART_TIME,
  ADVANCED_REACT,
  REACT_WORKSHOP,
]

const Page = props => (
  <BaseTemplate
    {...props}
    type={REACT_BOOTCAMP}
    trainingId={REACT_BOOTCAMP_ID}
    typeOfTraining="React Bootcamp"
    crossSellTypes={crossSellTypes}
    trialTrainingId={REACT_TRIAL_ID}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
  />
)

export const query = graphql`
  query($usernames: [String!] = []) {
    allSanityPerson(filter: { username: { current: { in: $usernames } } }) {
      nodes {
        ...CoachInstance
      }
    }
  }
`

export default Page
