import React from 'react'
import styled from 'styled-components'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@123swap/uikit'

const StyledTag = styled(Tag)`
  border: solid 1px #EB5757;
  color: #EB5757;
  font-size: 10px !important;
  & svg {
    height: 14px;
  }
`


const CoreTag = (props) => (
  <StyledTag variant="secondary" outline startIcon={<VerifiedIcon color="#EB5757" />} {...props}>
    Core
  </StyledTag>
)

const CommunityTag = (props) => (
  <StyledTag variant="textSubtle" outline startIcon={<CommunityIcon color="#EB5757" />} {...props}>
    Community
  </StyledTag>
)

const BinanceTag = (props) => (
  <StyledTag variant="binance" outline startIcon={<BinanceIcon color="#EB5757" />} {...props}>
    Binance
  </StyledTag>
)

const DualTag = (props) => (
  <StyledTag variant="textSubtle" outline {...props}>
    Dual
  </StyledTag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag }
