import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Navigation } from '../components'
import { flexProps } from '../utils/CssHelpers'
import { GlobalStyle } from '../utils/GlobalStyles'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ${flexProps}
  max-width:1200px;
  margin: 0 auto;
  padding: 1rem;
`
const Layout = ({ children, flexDirection, justifyContent, alignItems }) => (
  <>
    <GlobalStyle />
    <Navigation />
    <Main flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Main>
  </>
)

export default Layout
