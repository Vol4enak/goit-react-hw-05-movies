import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
export const BackBtn = styled(NavLink)`
  border: 1px solid black;
  border-radius: 7px;
  padding: 1px 5px 5px 5px;
  margin-left: 10px;
  text-decoration: none;
`;
export const Block = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 20px;
`