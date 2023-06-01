import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CategoryIcon from '@mui/icons-material/Category';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import FluorescentIcon from '@mui/icons-material/Fluorescent';
import { Link } from "react-router-dom";
import {useContext} from "react";
import { DarkModeContext } from "../../context/darkModeContext";



const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span><FluorescentIcon className="logoim" /></span>
          <span className="logo">DashGo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <GradingIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <BarChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAddIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <BookIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;