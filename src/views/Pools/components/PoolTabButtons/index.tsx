import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Toggle, Text } from '@123swap/uikit'
import useI18n from 'hooks/useI18n'

const PoolTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle scale="sm" checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text color="textMenu" style={{fontSize: "14px"}}> {TranslateString(999, 'Staked only')}</Text>
      </ToggleWrapper>
      <StyledButtonMenuWrapper>
        <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle">
          <ButtonMenuItem as={Link} to={`${url}`}>
            {TranslateString(1198, 'Live')}
          </ButtonMenuItem>
          <ButtonMenuItem as={Link} to={`${url}/history`}>
            {TranslateString(388, 'Finished')}
          </ButtonMenuItem>
        </ButtonMenu>
      </StyledButtonMenuWrapper>
    </Wrapper>
  )
}

export default PoolTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const StyledButtonMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 50px;
  padding: 2px;
  & a {
    color: ${({ theme }) => theme.colors.contrast};
    font-size: 14px;
    padding: 0px 10px;
    height: 24px;
    border-radius: 50px;
    border: 0 !important;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
