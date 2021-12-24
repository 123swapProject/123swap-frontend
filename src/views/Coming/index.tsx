import React from 'react'
import { Flex, Heading, Text } from '@123swap/uikit'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.secondBackground};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-sizing: border-box;
    border-radius: 16px;
    padding: 40px;

`

const Coming = () => {
  const TranslateString = useI18n()
  

  return (
    <>
      <Page>
        <Flex alignItems="center" justifyContent="space-between" mb="32px" pt="100px">
          <Heading size="lg">{TranslateString(1040, 'Coming soon')}</Heading>
        </Flex>
        <StyledWrapper>
        <Flex alignItems="center" justifyContent="space-between" mb="14px">
        <Heading size="lg">{TranslateString(1040, 'WE ARE NEARLY COMPLETE.')}</Heading>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>{TranslateString(1040, 'Meanwhile feel free to explore our website')}</Text>
        </Flex>
        </StyledWrapper>
      </Page>
    </>
  )
}

export default Coming
