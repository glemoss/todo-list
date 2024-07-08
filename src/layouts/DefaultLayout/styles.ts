import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-800']};

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  border-radius: 8px;
`
