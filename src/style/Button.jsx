import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border: 1px solid transparent;
  transition: 0.3s ease-in;
  /* cursor: pointer; */

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
  }
`;
