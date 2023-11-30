import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  margin: 10px;
`

const StyledLabel = styled.label`
  font-size: 1.2rem;
  margin: 10px 0px 0px 50px;
`

const Selector = () => {
  const [selectedLink, setSelectedLink] = useState(null)

  const handleSelectChange = (event) => {
    setSelectedLink(event.target.value)
  }

  return (
    <div>
      <StyledLabel htmlFor="linkSelector">Select a Dataset</StyledLabel>
      <StyledSelect id="linkSelector" onChange={handleSelectChange} value={selectedLink}>
        <option >Men</option>
        <option>Women</option>
      </StyledSelect>
    </div>
  )
}

export default Selector
