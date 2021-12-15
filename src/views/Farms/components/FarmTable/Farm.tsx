import React from 'react'
import styled from 'styled-components'
import { useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { Text } from '@123swap/uikit'
import { getBalanceNumber } from 'utils/formatBalance'

export interface FarmProps {
  label: string
  pid: number
  image: string
}


const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

const Farm: React.FunctionComponent<FarmProps> = ({ label, pid }) => {
  const { stakedBalance } = useFarmUser(pid)
  const TranslateString = useI18n()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold>
          {TranslateString(999, 'FARMING')}
        </Text>
      )
    }

    return null
  }

  return (
    <Container>
      {/* <IconImage src={`/images/farms/${image}.svg`} alt="icon" width={40} height={40} mr="8px" /> */}
      <div>
        {handleRenderFarming()}
        <Text bold fontSize="14px">{label}</Text>
      </div>
    </Container>
  )
}

export default Farm
