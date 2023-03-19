import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: block;

  border: 1px solid black;
  border-radius: 5%;
  margin-left: 10px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  color: #212121;

  width: 100px;
  text-decoration: none;
`;

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
