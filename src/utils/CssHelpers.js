import { css } from 'styled-components'

// CSS Helper
export const flexProps = css`
  display: flex;
  ${({ flexDirection }) => (flexDirection ? `flex-direction: ${flexDirection};` : null)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : null)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : null)}
  ${({ alignContent }) => (alignContent ? `align-content: ${alignContent};` : null)}
`

export const marginProps = css`
  ${({ margin }) => (margin ? `margin: ${margin};` : null)}
`
