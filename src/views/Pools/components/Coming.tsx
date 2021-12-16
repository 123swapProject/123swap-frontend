import React from 'react'
import styled from 'styled-components'
import { Image, Button } from '@123swap/uikit'
import { CommunityTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import Card from './Card'
import CardTitle from './CardTitle'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
`

const Label = styled.div`
  font-size: 12px;
  margin-bottom: 16px;
  background: -webkit-linear-gradient(109.32deg, #EB5757 -12.08%, #F2C94C 58.46%, #F2994A 127.54%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#353945' : '#E9EAEB')};
  padding: 24px;
`
const Coming: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card>
      <div style={{ padding: '24px 16px 16px 16px' }}>
        <CardTitle>
          {TranslateString(414, 'Your Project?')}{' '}
          <span role="img" aria-label="eyes">
            👀
          </span>
        </CardTitle>
        <Image src="/images/bunny-question.svg" width={64} height={64} alt="Your project here" />
        <Balance>???</Balance>
        <Label>{TranslateString(416, 'Create a pool for your token')}</Label>
        <Button
          style={{height: "29px", borderRadius: "4px"}}
          variant="primary"
          as="a"
          href="#"
          external
          width="100%"
          mb="16px"
        >
          {TranslateString(418, 'Apply Now')}
        </Button>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>{TranslateString(736, 'APR')}:</div>
          <Value>??</Value>
        </DetailPlaceholder>
        <DetailPlaceholder>
          <div style={{ flex: 1 }}>
            {TranslateString(384, 'Your Stake')}:
          </div>
          <Value>??? 123b</Value>
        </DetailPlaceholder>
      </div>
      <Footer>
        <CommunityTag />
      </Footer>
    </Card>
  )
}

export default Coming
