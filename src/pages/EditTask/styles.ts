import { styled } from 'styled-components'

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: darkred;
  }
`

export const EditButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 8px;

  &:hover {
    background-color: darkblue;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.624);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const ModalBody = styled.div`
  margin: 20px 0;

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

export const CloseButton = styled.button`
  background: ${(props) => props.theme['gray-300']};
  border: none;
  padding: 0.5rem;

  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
`

export const SaveButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
