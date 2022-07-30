import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #ccc;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  height: 200px;
  width: 300px;
  padding: 10px;
  background: #222;
  border-radius: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: 80%;
  height: 30px;
  background: none;
  transition: 0.8s ease-in;
  color: #eee;

  &::placeholder {
    color: #eee;
    font-size: 14px;
  }

  &:focus {
    border-color: chartreuse;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  color: #f5f5f5;
  font-weight: bold;
  letter-spacing: 1px;
  background: chartreuse;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;
