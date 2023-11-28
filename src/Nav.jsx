import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    background: lightblue;
    padding: 10px;
`

export default function Nav() {
    return (
        <Header>
            <h1>
                D3 in React
            </h1>
        </Header>
    )
}
