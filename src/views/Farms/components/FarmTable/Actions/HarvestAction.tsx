import React, { useState, useRef, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import { Button } from '@123swap/uikit'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import { usePriceCakeBusd } from 'state/hooks'
import { useCountUp } from 'react-countup'

import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles'

const HarvestAction: React.FunctionComponent<FarmWithStakedValue> = ({ pid, userData }) => {
  const { account } = useWeb3React()
  const earningsBigNumber = userData && account ? new BigNumber(userData.earnings) : null
  const cakePrice = usePriceCakeBusd()
  let earnings = null
  let earningsBusd = 0
  let displayBalance = '?'

  if (earningsBigNumber) {
    earnings = getBalanceNumber(earningsBigNumber)
    earningsBusd = new BigNumber(earnings).multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toLocaleString()
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const TranslateString = useI18n()

  const { countUp, update } = useCountUp({
    start: 0,
    end: earningsBusd,
    duration: 1,
    separator: ',',
    decimals: 3,
  })
  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(earningsBusd)
  }, [earningsBusd, updateValue])

  const StyledButton = styled(Button)`
    height: 28px; 
    padding: 0 30px;
    background: ${({ theme }) => theme.colors.textMenu};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.inputSecondary} !important;
  `
  const StyledActionContainer = styled(ActionContainer)`
    border: solid 1px ${({ theme }) => theme.colors.textMenu};
    border-radius: 8px;
    padding: 8px;
    margin-left: 0;
  `
  const StyledActionTitles = styled(ActionTitles)`
    & span {
      color: ${({ theme }) => theme.colors.textMenu};
    }
  `

  return (
    <StyledActionContainer>
      <StyledActionTitles>
        <Title>123b </Title>
        <Subtle>{TranslateString(1072, 'EARNED')}</Subtle>
      </StyledActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          <Staked>~{countUp}$</Staked>
        </div>
        <StyledButton
          disabled={!earnings || pendingTx || !account}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }}
          ml="4px"
        >
          {TranslateString(562, 'Harvest')}
        </StyledButton>
      </ActionContent>
    </StyledActionContainer>
  )
}

export default HarvestAction
