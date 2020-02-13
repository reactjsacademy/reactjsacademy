import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import withLazyLoad from './withLazyLoad'
import {Box} from '@leanjs/academy-ui'

const Image = withLazyLoad()(styled(Box)`
  ${({ circle }) => (circle ? `border-radius: 50%;` : null)};
  ${({ objectFit }) => (objectFit ? `object-fit: ${objectFit}` : '')}
`)
Image.defaultProps = {
  box: 'img',
}
const StyledGatsbyImage = props => <Box box={GatsbyImage} {...props} />

export default props => {
  const Component = !(props.fluid || props.fixed) ? Image : StyledGatsbyImage

  return <Component {...props} />
}
