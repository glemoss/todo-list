import { styled } from 'styled-components'

export const NewTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
`

export const TaskInput = styled.input`
  width: 50%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
`

export const TaskButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const ErrorMessage = styled.p`
  height: 1rem;
  color: ${(props) => props.theme['red-500']};
  margin: 0;
`
