import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 8px;
  & > * {
    min-width: 220px;
    max-width: 31.5%;
    width: 100%;
    margin-bottom: 32px;
  }
`

export default FlexLayout
