import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import colors from "../../variables/colors";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlices";
import { NavLink } from "react-router-dom";


export default function Header() {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <HeaderStyled>

            <nav>
                <ul>
                    <li><NavLink to={"/"}>Dashboard</NavLink></li>
                    <li><NavLink to={"/movies"}>Movies</NavLink></li>
                </ul>

                <ul>
                    <li><RiSearch2Line /></li>
                    <li>
                        <FaRegCircleUser />

                        <ul>
                            <li>Profile</li>
                            <li onClick={handleLogout}>Logout</li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    margin-bottom: -100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    margin: 25px 0;

    a {
        text-decoration: none;
        color: #fff;

        &.active {
            &:after {
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background-color: ${colors.white};
                position: absolute;
                bottom: -5px;
                left: 0;
            }
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        color: #fff;
        font-size: 1.2rem;

        ul {
            display: flex;
            gap: 10px;
            align-items: center;
            
            li {
                list-style: none;
                cursor: pointer;
                position: relative;

                &:hover {
                    color: ${colors.darkgreen};

                    ul {
                        display: block;
                    }
                }

                ul {
                    display: none;
                    position: absolute;
                    background-color: #000;
                    padding: 10px;
                    border-radius: 10px;
                    top: 100%;
                    right: 0;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                    z-index: 1;

                    li {
                        list-style: none;
                        cursor: pointer;
                        padding: 5px 0;

                        &:hover {
                            color: ${colors.darkgreen};
                        }
                    }
                }
            }
        }
    }
`;