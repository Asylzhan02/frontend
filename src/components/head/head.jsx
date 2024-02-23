import "./head.css";
import Animation from "../Animation/animation";
import { stack as Menu } from "react-burger-menu";
import "reactjs-popup/dist/index.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import InfoProfile from "../Profile/info-profile";

/*Шапка и роутинг сайта */

const Head = (props) => {
  return (
    <div>
      <div className="navi">
        <Link to="/" className="transparent-text">
          <h3>{props.title}</h3>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/"> {props.home} </Link>
            </li>
            <li>
              <Link to="/main_news">{props.skills}</Link>
            </li>
            <li>
              <Link to="/about">{props.projects}</Link>
            </li>
            <li>
              <Link to="/redactor">{props.redactor}</Link>
            </li>
            <li>
              <Link to="/contact">{props.contact}</Link>
            </li>
            <li>
              <Link to="/register">{props.register}</Link>
            </li>
            <li>
              <Link to="/login">{props.login}</Link>
            </li>
          </ul>
        </nav>
        <Animation />
        <IconButton color="primary">
          <Link to={"search"}>
            <SearchIcon sx={{ fontSize: 40, color: "#213E60", marginTop: 1 }} />
          </Link>
        </IconButton>
        <InfoProfile />
      </div>
    </div>
  );
};

export default Head;
