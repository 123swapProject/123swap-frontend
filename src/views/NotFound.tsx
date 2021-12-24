import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@123swap/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondBackground};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-sizing: border-box;
  border-radius: 16px;
  padding: 40px;
  min-width: 350px;
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      
      <StyledNotFound>
        <StyledWrapper>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xxl">404</Heading>
        <Text mb="16px">{TranslateString(1122, 'Oops, page not found.')}</Text>
        <Button as="a" href="/" scale="sm">
          {TranslateString(1124, 'Back Home')}
        </Button>
        </StyledWrapper>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
