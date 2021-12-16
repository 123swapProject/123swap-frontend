import React, { useState, useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading, Text } from '@123swap/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { currentBlock } = useBlock()
  const [stakedOnly, setStakedOnly] = useState(false)

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || currentBlock > pool.endBlock),
    [currentBlock, pools],
  )
  const stakedOnlyPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )
  const TextWrapper = styled.div`
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 450px;
    }
  `
  const StyledBodyWrapper = styled.div`
    background: ${({ theme }) => theme.colors.secondBackground};
    border: solid 1px ${({ theme }) => theme.colors.borderColor};
    border-radius: 16px;
    padding: 40px;
  `
  const StyledFlexLayout = styled(FlexLayout)`
    justify-content: start;
    flex-wrap: wrap;
    & > * {
      min-width: 220px;
      max-width: 25%;
      margin: 0 5px;
      margin-bottom: 0px;
    @media (max-width: 576px) {
      min-width: auto;
      max-width: none;
    }
      
  }
  `

  return (
    <Page style={{maxWidth: "760px"}}>
      <Hero>
        <TextWrapper>
          <Heading as="h1" size="lg" color="text" mb="5px" mt="50px">
            {TranslateString(738, 'Pool')}
          </Heading>
            <Text>{TranslateString(580, 'Stake 123b to earn new tokens. ')}{TranslateString(486, 'You can unstake at any time.')}</Text>
            <Text>{TranslateString(406, 'Rewards are calculated per block.')}</Text>
        </TextWrapper>
      </Hero>
      <StyledBodyWrapper>
        <PoolTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
        <Divider />
        <StyledFlexLayout>
          <Route exact path={`${path}`}>
            <>
              {stakedOnly
                ? orderBy(stakedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
                : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
              <Coming />
            </>
          </Route>
          <Route path={`${path}/history`}>
            {orderBy(finishedPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
          </Route>
        </StyledFlexLayout>
      </StyledBodyWrapper>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  max-width: 250px;
  padding: 35px 0;
  padding-top: 0;

  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
