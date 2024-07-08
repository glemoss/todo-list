import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-700']};
  display: flex;
  justify-content: center;

  padding: 1.25rem 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  img {
    width: 3rem;
    border-radius: 50%;
  }
`
