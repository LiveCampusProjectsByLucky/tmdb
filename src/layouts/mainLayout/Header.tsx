import styled from "styled-components";
import { FaBeer } from 'react-icons/fa';


export default function Header() {
  return (
    <HeaderStyled>

        <nav>
            <h1>Logo <FaBeer /></h1>

            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Logout</li>
            </ul>

            <ul>
                <li>Search</li>
                <li>Profile</li>
            </ul>
        </nav>

    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  
`;