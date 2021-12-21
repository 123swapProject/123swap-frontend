import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@123swap/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import useNetwork from "../hooks/useNetwork";

const StyledButton = styled(Button)`
padding: 4px 30px;
height: 29px;
`

const StyledButton = styled(Button)`
padding: 4px 30px;
height: 29px;
`

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { network, setNetwork } = useNetwork()
  const { onPresentConnectModal } = useWalletModal(login, logout, network, setNetwork)

  return (
    <StyledButton onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </StyledButton>
  )
}

export default UnlockButton
