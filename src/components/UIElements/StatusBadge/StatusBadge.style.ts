import styled from 'styled-components'
import { palette } from 'styled-theme'

const colors = {
  red: palette('error', 0),
  yellow: palette('warning', 0),
  green: palette('success', 0),
}

type Props = {
  color: 'red' | 'yellow' | 'green'
}

export const StatusBadgeWrapper = styled.div`
  width: 14px;
  height: 14px;
  border: none;
  border-radius: 50%;
  background-color: ${(props: Props) =>
    colors[props.color] || palette('success', 0)};
  opacity: 0.5;
`
