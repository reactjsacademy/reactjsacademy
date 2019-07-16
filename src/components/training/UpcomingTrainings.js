import React from 'react'
import { Query } from 'react-apollo'

import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  REACT_NATIVE,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  ONE_DAY_WORKSHOP,
  REACT_WORKSHOP,
  GRAPHQL_CLIENT,
  GRAPHQL_API,
  MEETUP,
} from '../../config/data'

import {
  LISBON_LOCATION,
  LONDON_LOCATION,
  BARCELONA_LOCATION,
  AMSTERDAM_LOCATION,
  BERLIN_LOCATION,
  DEFAULT_INFOBOX,
} from '../../config/images'

import GET_UPCOMING_TRAINING from './UpcomingTrainings.graphql'

const createTrainingPath = ({ type, city = '', index, id, slug }) => {
  const i = index > 1 ? index : ''
  switch (type) {
    case PART_TIME:
      return `/react/training/part-time-course/${city.toLowerCase()}/${i}`
    case REACT_BOOTCAMP:
      return `/react/training/bootcamp/${city.toLowerCase()}/${i}`
    case REACT_FUNDAMENTALS:
      return `/react/training/react-fundamentals/${city.toLowerCase()}/${i}`
    case REACT_NATIVE:
      return `/react/training/react-native/${city.toLowerCase()}/${i}`
    case ADVANCED_REACT:
      return `/react/training/advanced/${city.toLowerCase()}/${i}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql/training/bootcamp/${city.toLowerCase()}/${i}`
    case GRAPHQL_API:
      return `/graphql/training/api/${city.toLowerCase()}/${i}`
    case GRAPHQL_CLIENT:
      return `/graphql/training/workshops/graphql-apollo-client/${city.toLowerCase()}/${i}`
    case ONE_DAY_WORKSHOP:
      return `/react/training/workshops/${slug}/${city.toLowerCase()}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${city.toLowerCase()}`
    default:
      return '/'
  }
}

const selectLocationImage = ({ city = '' }) => {
  switch (city) {
    case 'London':
      return LONDON_LOCATION
    case 'Amsterdam':
      return AMSTERDAM_LOCATION
    case 'Lisbon':
      return LISBON_LOCATION
    case 'Barcelona':
      return BARCELONA_LOCATION
    case 'Berlin':
      return BERLIN_LOCATION
    default:
      return DEFAULT_INFOBOX
  }
}

export const selectNthTraining = ({ trainings, type, nth = 1 }) => {
  const typeTrainings = type
    ? trainings.filter(trainingByType(type))
    : trainings
  return typeTrainings.length ? typeTrainings[nth - 1] : undefined
}
const trainingByType = type => training => !type || training.type === type
const trainingByTypes = types => training =>
  !types || !types.length || types.find(type => type === training.type)

const trainingByCity = city => training => !city || training.city === city

export const getNextTrainingByTrainingId = ({ trainings, trainingId }) =>
  trainings.find(training => training.training.id === trainingId)

// export const getUpcomingTrainingsByType = ({
//   trainings,
//   types = [],
//   first,
//   excludeTrainingId,
// }) => {
//   const filteredTrainings = types
//     .flatMap(type => trainings.filter(trainingByType(type)))
//     .filter(
//       ({ training = {} }) => !training.id || training.id !== excludeTrainingId
//     )
//   return first ? filteredTrainings.slice(0, first) : filteredTrainings
// }

export const selectTrainingByInstanceId = ({ trainings, id }) =>
  trainings.find(training => training.id === id)

export const excludeByTrainingId = trainingId => ({ training = {} }) =>
  !training.id || training.id !== trainingId

// TODO ADD TYPES, FIRST AND EXCLUDE  TO THIS AND REMOVE getUpcomingTrainingsByType ??
export const selectUpcomingTrainings = ({
  // type,
  city,
  types,
  type,
  excludeTrainingId,
  trainings = [],
  limit = 6,
}) => {
  // const filteredTrainings = types
  //   .flatMap(type => trainings.filter(trainingByType(type)))
  //   .filter(trainingByCity(city))
  //   .filter(
  //     ({ training = {} }) => !training.id || training.id !== excludeTrainingId
  //   )

  return trainings
    .filter(trainingByTypes(types || [type]))
    .filter(trainingByCity(city))
    .filter(excludeByTrainingId(excludeTrainingId))
    .slice(0, limit)
  // return filteredTrainings
}

function formatMeetup({ node }) {
  return {
    ...node,
    type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
    image: selectLocationImage({ city: node.city }),
  }
}

const UpcomingTrainings = ({ type, city, limit, children }) => (
  <Query query={GET_UPCOMING_TRAINING} variables={{ city }}>
    {({ loading, error, data }) => {
      const cityIndex = {}
      const formatTraining = ({ node }) => {
        const { type, slug, description } = node.training || {}
        const { title = '' } = description || {}
        const { city = '', id } = node
        const key = `${city}${type}`
        cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

        return {
          ...node,
          title,
          type,
          toPath: createTrainingPath({
            type,
            city,
            index: cityIndex[key],
            id,
            slug,
          }),
          image: selectLocationImage({ city }),
        }
      }

      const trainings =
        !error && !loading && data.trainingInstancesConnection
          ? data.trainingInstancesConnection.edges.map(formatTraining)
          : []

      const meetups =
        !error && !loading && data.eventsConnection
          ? data.eventsConnection.edges.map(formatMeetup)
          : []

      return children({
        trainings: selectUpcomingTrainings({
          trainings: [...trainings, ...meetups],
          type,
          city,
          limit,
        }),
        trainingLoading: loading,
        trainingError: error,
      })
    }}
  </Query>
)

export default UpcomingTrainings
