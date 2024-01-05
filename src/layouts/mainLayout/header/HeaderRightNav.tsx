import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../features/auth/authSlices";
import { Link } from "react-router-dom";

export default function HeaderRightNav() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul>
      <li><Link to="/search"><RiSearch2Line /></Link></li>
      <li>
        <FaRegCircleUser />
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/favorite-movies">Favorite</Link></li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </li>
    </ul>
  );
}
