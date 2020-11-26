import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Header } from '../components'
import { flexProps, mediaAbove } from '../utils/css-helpers'
import { GlobalStyle } from '../utils/global-styles'
import '../utils/font-awesome'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ${flexProps}
  max-width:1200px;
  margin: 0 auto;
  padding: 2rem;
  ${mediaAbove.mediumScreen`
  padding: 1rem;
`}
`
const Layout = ({ children, flexDirection, justifyContent, alignItems }) => (
  <>
    <GlobalStyle />
    <Header>
      <Header.Title>Portfolio</Header.Title>
      <Nav>
        <Nav.List>
          <Nav.Item>
            <Nav.Link activeClassName="active" to="/">
              <Nav.Text>Home</Nav.Text>
              <FontAwesomeIcon size="2x" icon="home" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeClassName="active" to="/about">
              <Nav.Text>About me</Nav.Text>
              <FontAwesomeIcon size="2x" icon="user" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeClassName="active" to="/projects">
              <Nav.Text>Projects</Nav.Text>
              <FontAwesomeIcon size="2x" icon="folder" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeClassName="active" to="/resume">
              <Nav.Text>Resume</Nav.Text>
              <FontAwesomeIcon size="2x" icon="file" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeClassName="active" to="/contact">
              <Nav.Text>Contact</Nav.Text>
              <FontAwesomeIcon size="2x" icon="envelope" />
            </Nav.Link>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </Header>

    <Main flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Main>
  </>
)

export default Layout
