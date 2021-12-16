import React from 'react'
import { Button, useWalletModal } from '@123swap/uikit'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'
import useNetwork from "../hooks/useNetwork";

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { network, setNetwork } = useNetwork()
  const { onPresentConnectModal } = useWalletModal(login, logout, network, setNetwork)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
