import styled from 'styled-components'

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
}

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: 6rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    margin-right: 0.25rem;
  }
`
