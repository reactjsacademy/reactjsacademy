import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { FONT_FAMILY } from '../../styles'

export const Logo = styled.span`
  width: 35px;
  height: 35px;
  float: left;
  margin-top: ${props => (props.menu ? 0 : -8)}px;
  margin-right: 8px;
  background-image: url('data:image/png;base64,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');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  -ms-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
`

const LinkLogo = styled(Link)`
  margin-top: 15px;
  display: inline-block;
  text-decoration: none;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${FONT_FAMILY};
`

const RJALogo = props => (
  <LinkLogo to="/">
    <FlexContainer>
      <Logo menu={props.menu} />
      <span style={{ color: 'white' }}>ReactJS Academy</span>
    </FlexContainer>
  </LinkLogo>
)

export default RJALogo
