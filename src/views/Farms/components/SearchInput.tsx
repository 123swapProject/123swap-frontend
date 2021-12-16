import React, { useState, useRef } from 'react'
import { Input } from '@123swap/uikit'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.inputSecondary};
  margin-left: auto;
  height: 28px;
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 123px;
    display: block;
  }
`

const Container = styled.div<{ toggled: boolean }>``

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  const [toggled, setToggled] = useState(false)
  const inputEl = useRef(null)

  return (
    <Container toggled={toggled}>
      <InputWrapper>
        <StyledInput
          ref={inputEl}
          value={value}
          onChange={onChange}
          placeholder="Search"
          onBlur={() => setToggled(false)}
        />
      </InputWrapper>
    </Container>
  )
}

export default SearchInput
