import React from 'react'
import BaseTemplate from './baseTemplate'
import Curriculum, {
  TargetAudienceList,
} from 'src/components/curriculum/workshops/CurriculumReactFoundation'
import {
  REACT_FUNDAMENTALS,
  REACT_BOOTCAMP,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_FOUNDATION_ID,
} from 'src/config/data'

export const crossSellTypes = [REACT_FUNDAMENTALS, REACT_BOOTCAMP]

const Page = props => (
  <BaseTemplate
    {...props}
    trainingId={REACT_WORKSHOP_FOUNDATION_ID}
    crossSellTypes={crossSellTypes}
    trainingType={TRAINING_TYPE_WORKSHOP}
    targetAudienceList={TargetAudienceList}
    curriculum={Curriculum}
    curriculumProps={{
      section: { isOpen: true },
    }}
  />
)

export default Page
