import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Button, useModal, IconButton, AddIcon, MinusIcon } from '@123swap/uikit'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import { useFarmUser } from 'state/hooks'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import useI18n from 'hooks/useI18n'
import { useApprove } from 'hooks/useApprove'
import { getBep20Contract } from 'utils/contractHelpers'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getBalanceNumber } from 'utils/formatBalance'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import useWeb3 from 'hooks/useWeb3'

import DepositModal from '../../DepositModal'
import WithdrawModal from '../../WithdrawModal'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

const IconButtonWrapper = styled.div`
  display: flex;
`

const Staked: React.FunctionComponent<FarmWithStakedValue> = ({ pid, lpSymbol, lpAddresses, quoteToken, token }) => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const web3 = useWeb3()

  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={lpSymbol} addLiquidityUrl={addLiquidityUrl} />,
  )
  const [onPresentWithdraw] = useModal(<WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={lpSymbol} />)

  const lpContract = getBep20Contract(lpAddress, web3)

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const StyledButton = styled(Button)`
    height: 28px; 
    padding: 0 30px;
    border-radius: 4px;
  `
  const StyledActionContainer = styled(ActionContainer)`
  border: solid 1px ${({ theme }) => theme.colors.textMenu};
  border-radius: 8px;
  padding: 8px;
  margin-left: 10px;
  height: 70px;
`
const StyledActionTitles = styled(ActionTitles)`
  & span {
  color: ${({ theme }) => theme.colors.textMenu};
  }
`

  if (!account) {
    return (
      <StyledActionContainer>
        <StyledActionTitles>
          <Subtle>{TranslateString(999, 'Start farming')}</Subtle>
        </StyledActionTitles>
        <ActionContent>
          <UnlockButton width="100%" padding="0" height="28px" />
        </ActionContent>
      </StyledActionContainer>
    )
  }

  if (isApproved) {
    if (rawStakedBalance) {
      return (
        <StyledActionContainer>
          <StyledActionTitles>
            <Title>{lpSymbol} </Title>
            <Subtle>{TranslateString(999, 'Staked')}</Subtle>
          </StyledActionTitles>
          <ActionContent>
            <div>
              <Earned>{displayBalance}</Earned>
            </div>
            <IconButtonWrapper>
              <IconButton variant="primary" onClick={onPresentWithdraw} mr="6px" padding="0" height="28px">
                <MinusIcon color="primary" width="14px" />
              </IconButton>
              <IconButton variant="primary" onClick={onPresentDeposit} padding="0" height="28px">
                <AddIcon color="primary" width="14px" />
              </IconButton>
            </IconButtonWrapper>
          </ActionContent>
        </StyledActionContainer>
      )
    }

    return (
      <StyledActionContainer>
        <StyledActionTitles>
          <Subtle>{TranslateString(999, 'Stake')} </Subtle>
          <Title>{lpSymbol}</Title>
        </StyledActionTitles>
        <ActionContent>
          <Button width="100%" onClick={onPresentDeposit} variant="primary" padding="0" height="28px">
            {TranslateString(999, 'Stake LP')}
          </Button>
        </ActionContent>
      </StyledActionContainer>
    )
  }

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Subtle>{TranslateString(999, 'Enable farm')}</Subtle>
      </ActionTitles>
      <ActionContent>
        <StyledButton width="100%" disabled={requestedApproval} onClick={handleApprove} variant="primary">
          {TranslateString(999, 'Enable')}
        </StyledButton>
      </ActionContent>
    </StyledActionContainer>
  )
}

export default Staked
